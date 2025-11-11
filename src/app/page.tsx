'use client';

import { ProgressCard } from '@/components/lifecoach/ProgressCard';
import { StatsCard } from '@/components/lifecoach/StatsCard';
import { Button } from '@/components/ui/button';
import { activeGoals, currentClient, thisWeekStats, recentMessages } from '@/lib/data/mockData';
import { Target, BookOpen, Sparkles, MessageCircle, Heart } from 'lucide-react';
import Image from 'next/image';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <Image
          src="/generated/hero-coach.png"
          alt="Life Coach"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="max-w-2xl">
              <h1 className="text-white mb-4 text-4xl md:text-5xl">
                Welcome back, {currentClient.name.split(' ')[0]}
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed">
                Continue your journey of growth, healing, and transformation
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message Coach {currentClient.coachName}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-7xl">
        {/* Current Focus Section */}
        <section className="mb-12">
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-md border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl">Your Current Focus</h2>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Primary Focus</p>
                <p className="text-lg font-medium text-card-foreground">{currentClient.focusArea}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Also Working On</p>
                <p className="text-lg font-medium text-card-foreground">{currentClient.secondaryFocus}</p>
              </div>
            </div>
          </div>
        </section>

        {/* This Week's Progress */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl mb-6">This Week's Progress</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatsCard
              icon={<Target className="w-5 h-5" />}
              label="Goals Worked On"
              value={thisWeekStats.goalsWorkedOn}
              color="primary"
            />
            <StatsCard
              icon={<BookOpen className="w-5 h-5" />}
              label="Reflections Done"
              value={thisWeekStats.reflectionsDone}
              color="accent"
            />
            <StatsCard
              icon={<Sparkles className="w-5 h-5" />}
              label="Breakthrough Moments"
              value={thisWeekStats.breakthroughMoments}
              color="accent"
            />
            <StatsCard
              icon={<MessageCircle className="w-5 h-5" />}
              label="Coaching Sessions"
              value={thisWeekStats.coachingSessions}
              color="primary"
            />
          </div>
        </section>

        {/* Active Goals */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl">Active Goals</h2>
            <Button variant="outline">View All Goals</Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activeGoals.map((goal) => (
              <ProgressCard
                key={goal.id}
                title={goal.title}
                progress={goal.progress}
                completedSteps={goal.completedSteps}
                totalSteps={goal.totalSteps}
                nextAction={goal.nextAction}
                category={goal.category}
                dueDate={goal.dueDate}
              />
            ))}
          </div>
        </section>

        {/* Recent Coach Messages */}
        <section>
          <h2 className="text-2xl md:text-3xl mb-6">Recent Messages from Coach {currentClient.coachName}</h2>
          <div className="space-y-4">
            {recentMessages.filter(msg => msg.from === 'coach').slice(0, 2).map((message) => (
              <div
                key={message.id}
                className="bg-card rounded-xl p-6 shadow border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                    <Image
                      src="/generated/testimonial-1.png"
                      alt="Coach Jennifer"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between mb-2">
                      <p className="font-semibold text-card-foreground">Coach {currentClient.coachName}</p>
                      <span className="text-sm text-muted-foreground">{message.timestamp}</span>
                    </div>
                    <p className="text-card-foreground leading-relaxed">{message.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All Messages
          </Button>
        </section>
      </div>
    </div>
  );
}
