'use client';

import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

interface ExerciseCardProps {
  title: string;
  category: string;
  totalExercises: number;
  completed: number;
  description: string;
  onStart?: () => void;
}

export function ExerciseCard({
  title,
  category,
  totalExercises,
  completed,
  description,
  onStart
}: ExerciseCardProps) {
  const progress = Math.round((completed / totalExercises) * 100);
  const isComplete = completed === totalExercises;

  return (
    <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-all">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
          <BookOpen className="w-6 h-6 text-accent" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-card-foreground mb-1">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{category}</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">
                  {completed} of {totalExercises} completed
                </span>
                <span className="font-semibold text-accent">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <Button
              onClick={onStart}
              variant={isComplete ? 'outline' : 'default'}
              size="sm"
              className="w-full"
            >
              {isComplete ? 'Review Exercises' : 'Continue Journey'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
