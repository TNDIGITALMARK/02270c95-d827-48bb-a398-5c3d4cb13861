'use client';

import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

interface ProgressCardProps {
  title: string;
  progress: number;
  completedSteps: number;
  totalSteps: number;
  nextAction: string;
  category: 'career' | 'healing' | 'personal';
  dueDate?: string;
}

const categoryColors = {
  career: 'bg-primary/10 text-primary border-primary/20',
  healing: 'bg-accent/10 text-accent-foreground border-accent/20',
  personal: 'bg-secondary text-secondary-foreground border-secondary/20'
};

const categoryLabels = {
  career: 'Career',
  healing: 'Healing',
  personal: 'Personal'
};

export function ProgressCard({
  title,
  progress,
  completedSteps,
  totalSteps,
  nextAction,
  category,
  dueDate
}: ProgressCardProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <Badge className={`${categoryColors[category]} mb-2 border`}>
            {categoryLabels[category]}
          </Badge>
          <h3 className="text-xl font-semibold text-card-foreground mb-1">
            {title}
          </h3>
        </div>
        {progress === 100 && (
          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 ml-2" />
        )}
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">
              {completedSteps} of {totalSteps} steps complete
            </span>
            <span className="font-semibold text-primary">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="pt-2 border-t border-border">
          <p className="text-sm text-muted-foreground mb-1">Next Action:</p>
          <p className="text-sm font-medium text-card-foreground">{nextAction}</p>
        </div>

        {dueDate && (
          <div className="flex items-center text-sm text-muted-foreground">
            <span>Due: {formatDate(dueDate)}</span>
          </div>
        )}
      </div>
    </div>
  );
}
