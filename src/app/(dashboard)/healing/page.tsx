'use client';

import { ExerciseCard } from '@/components/lifecoach/ExerciseCard';
import { ReflectionPrompt } from '@/components/lifecoach/ReflectionPrompt';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { healingExercises, weeklyCheckIn, earnedBadges } from '@/lib/data/mockData';
import { Sparkles, Heart, Award } from 'lucide-react';
import Image from 'next/image';

export default function HealingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative w-full h-48 md:h-64 mb-8 overflow-hidden">
        <Image
          src="/generated/dashboard-healing-hero.png"
          alt="Peaceful healing space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40 flex items-center">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h1 className="text-4xl md:text-5xl mb-4 text-foreground">Healing Journey</h1>
            <p className="text-lg text-foreground/90">
              Your private space for reflection, growth, and emotional healing
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pb-8 md:pb-12 max-w-7xl">

        {/* Weekly Check-in */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 md:p-8 shadow-md border border-accent/20 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl">This Week's Check-In</h2>
                <p className="text-muted-foreground">Take a moment to reflect on your week</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {weeklyCheckIn.map((question) => (
              <ReflectionPrompt
                key={question.id}
                question={question.question}
                type={question.type}
                options={question.options}
                onSave={(response) => console.log('Saved:', response)}
              />
            ))}
          </div>

          <Button className="w-full mt-6" size="lg">
            Submit Weekly Check-In
          </Button>
        </section>

        {/* Healing Exercise Library */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl mb-2">Your Healing Exercises</h2>
              <p className="text-muted-foreground">Guided exercises designed for your journey</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {healingExercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                title={exercise.title}
                category={exercise.category}
                totalExercises={exercise.totalExercises}
                completed={exercise.completed}
                description={exercise.description}
                onStart={() => console.log('Starting exercise:', exercise.id)}
              />
            ))}
          </div>
        </section>

        {/* Milestones & Achievements */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-accent" />
            <div>
              <h2 className="text-2xl md:text-3xl">Your Achievements</h2>
              <p className="text-muted-foreground">Celebrate your milestones and progress</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {earnedBadges.map((badge) => (
              <div
                key={badge.id}
                className="bg-card rounded-xl p-6 shadow border border-border hover:shadow-md transition-all text-center"
              >
                <div className="text-5xl mb-3">{badge.icon}</div>
                <h3 className="font-semibold text-lg text-card-foreground mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {badge.description}
                </p>
                <Badge variant="outline" className="text-xs">
                  Earned {new Date(badge.earnedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </Badge>
              </div>
            ))}
          </div>

          {/* Upcoming Milestone */}
          <div className="mt-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
            <div className="flex items-start gap-4">
              <Sparkles className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-card-foreground mb-2">
                  Next Milestone: Healing Champion
                </h3>
                <p className="text-muted-foreground mb-3">
                  Complete 5 more healing exercises to earn this badge
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-background rounded-full h-2 overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '70%' }} />
                  </div>
                  <span className="text-sm font-medium text-primary">7/10</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
