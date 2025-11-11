'use client';

import { useState } from 'react';
import { ProgressCard } from '@/components/lifecoach/ProgressCard';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { activeGoals } from '@/lib/data/mockData';
import { Plus, Target, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import Image from 'next/image';

interface ActionStep {
  id: string;
  goalId: string;
  title: string;
  completed: boolean;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
}

const mockActionSteps: ActionStep[] = [
  {
    id: 'step-1',
    goalId: 'goal-1',
    title: 'Review and update work experience section with recent accomplishments',
    completed: true,
    dueDate: '2024-12-15',
    priority: 'high'
  },
  {
    id: 'step-2',
    goalId: 'goal-1',
    title: 'Get feedback from coach on resume draft',
    completed: true,
    dueDate: '2024-12-17',
    priority: 'high'
  },
  {
    id: 'step-3',
    goalId: 'goal-1',
    title: 'Add recent certifications and update skills section',
    completed: false,
    dueDate: '2024-12-18',
    priority: 'high'
  },
  {
    id: 'step-4',
    goalId: 'goal-1',
    title: 'Optimize LinkedIn headline and about section',
    completed: false,
    dueDate: '2024-12-19',
    priority: 'medium'
  },
  {
    id: 'step-5',
    goalId: 'goal-1',
    title: 'Share updated LinkedIn profile with network',
    completed: false,
    dueDate: '2024-12-20',
    priority: 'low'
  },
  {
    id: 'step-6',
    goalId: 'goal-2',
    title: 'Complete informational interview with Sarah from marketing',
    completed: true,
    dueDate: '2024-12-10',
    priority: 'high'
  },
  {
    id: 'step-7',
    goalId: 'goal-2',
    title: 'Reach out to two contacts from your network',
    completed: false,
    dueDate: '2024-12-22',
    priority: 'high'
  },
  {
    id: 'step-8',
    goalId: 'goal-2',
    title: 'Schedule and complete remaining interviews',
    completed: false,
    dueDate: '2024-12-30',
    priority: 'medium'
  }
];

const priorityColors = {
  high: 'bg-destructive/10 text-destructive border-destructive/20',
  medium: 'bg-accent/10 text-accent-foreground border-accent/20',
  low: 'bg-secondary text-secondary-foreground border-secondary/20'
};

export default function PlanningPage() {
  const [selectedGoal, setSelectedGoal] = useState(activeGoals[0].id);
  const [steps, setSteps] = useState(mockActionSteps);

  const toggleStep = (stepId: string) => {
    setSteps(steps.map(step =>
      step.id === stepId ? { ...step, completed: !step.completed } : step
    ));
  };

  const currentGoal = activeGoals.find(g => g.id === selectedGoal);
  const currentSteps = steps.filter(s => s.goalId === selectedGoal);
  const upcomingSteps = currentSteps.filter(s => !s.completed);
  const completedSteps = currentSteps.filter(s => s.completed);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative w-full h-48 md:h-64 mb-8 overflow-hidden">
        <Image
          src="/generated/dashboard-planning-hero.png"
          alt="Goal planning workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40 flex items-center">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h1 className="text-4xl md:text-5xl mb-4 text-foreground">Goal Planning</h1>
            <p className="text-lg text-foreground/90">
              Break down your goals into actionable steps and track your progress
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pb-8 md:pb-12 max-w-7xl">

        {/* Goals Overview */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl">Your Active Goals</h2>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Goal
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activeGoals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                className={`text-left transition-all ${
                  selectedGoal === goal.id ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
                }`}
              >
                <ProgressCard
                  title={goal.title}
                  progress={goal.progress}
                  completedSteps={goal.completedSteps}
                  totalSteps={goal.totalSteps}
                  nextAction={goal.nextAction}
                  category={goal.category}
                  dueDate={goal.dueDate}
                />
              </button>
            ))}
          </div>
        </section>

        {/* Action Steps Section */}
        {currentGoal && (
          <section>
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-md border border-border mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl">{currentGoal.title}</h2>
                  <p className="text-muted-foreground">Track your action steps below</p>
                </div>
              </div>
            </div>

            {/* Upcoming Steps */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                Upcoming Actions ({upcomingSteps.length})
              </h3>
              <div className="space-y-3">
                {upcomingSteps.length > 0 ? (
                  upcomingSteps.map((step) => (
                    <div
                      key={step.id}
                      className="bg-card rounded-xl p-5 shadow border border-border hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <Checkbox
                          checked={step.completed}
                          onCheckedChange={() => toggleStep(step.id)}
                          className="mt-1"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <p className="font-medium text-card-foreground flex-1">
                              {step.title}
                            </p>
                            <Badge className={`${priorityColors[step.priority]} border flex-shrink-0`}>
                              {step.priority}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>Due: {new Date(step.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-card rounded-xl p-8 shadow border border-border text-center">
                    <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
                    <p className="text-lg font-medium text-card-foreground mb-1">All caught up!</p>
                    <p className="text-muted-foreground">All action steps for this goal are complete.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Completed Steps */}
            {completedSteps.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Completed ({completedSteps.length})
                </h3>
                <div className="space-y-3">
                  {completedSteps.map((step) => (
                    <div
                      key={step.id}
                      className="bg-card rounded-xl p-5 shadow border border-border opacity-60"
                    >
                      <div className="flex items-start gap-4">
                        <Checkbox
                          checked={step.completed}
                          onCheckedChange={() => toggleStep(step.id)}
                          className="mt-1"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-card-foreground line-through">
                            {step.title}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span>Completed {new Date(step.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
