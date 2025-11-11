/**
 * Mock Data for LifeCoach Platform MVP
 * Based on MVP specification for Sarah Thompson's coaching journey
 */

export interface Goal {
  id: string;
  title: string;
  category: 'career' | 'healing' | 'personal';
  progress: number;
  totalSteps: number;
  completedSteps: number;
  nextAction: string;
  dueDate?: string;
}

export interface CheckInQuestion {
  id: string;
  question: string;
  type: 'scale' | 'text' | 'guided';
  options?: string[];
}

export interface HealingExercise {
  id: string;
  title: string;
  category: string;
  totalExercises: number;
  completed: number;
  description: string;
}

export interface CoachMessage {
  id: string;
  from: 'coach' | 'client';
  message: string;
  timestamp: string;
  read: boolean;
}

export interface ClientProfile {
  id: string;
  name: string;
  focusArea: string;
  secondaryFocus: string;
  coachName: string;
  joinedDate: string;
}

// Current Client Profile
export const currentClient: ClientProfile = {
  id: 'sarah_thompson_32',
  name: 'Sarah Thompson',
  focusArea: 'Career transition after divorce',
  secondaryFocus: 'Trust and boundaries',
  coachName: 'Jennifer',
  joinedDate: '2024-09-15'
};

// Active Goals
export const activeGoals: Goal[] = [
  {
    id: 'goal-1',
    title: 'Update resume and LinkedIn profile',
    category: 'career',
    progress: 60,
    totalSteps: 5,
    completedSteps: 3,
    nextAction: 'Add recent certifications and update skills section',
    dueDate: '2024-12-20'
  },
  {
    id: 'goal-2',
    title: 'Complete 3 informational interviews',
    category: 'career',
    progress: 33,
    totalSteps: 3,
    completedSteps: 1,
    nextAction: 'Reach out to two contacts from your network',
    dueDate: '2024-12-30'
  },
  {
    id: 'goal-3',
    title: 'Process relationship patterns through guided exercises',
    category: 'healing',
    progress: 38,
    totalSteps: 8,
    completedSteps: 3,
    nextAction: 'Complete "Recognizing Your Patterns" reflection',
    dueDate: '2025-01-15'
  }
];

// Weekly Check-in Questions
export const weeklyCheckIn: CheckInQuestion[] = [
  {
    id: 'check-1',
    question: 'What felt most challenging this week?',
    type: 'scale'
  },
  {
    id: 'check-2',
    question: 'Where did you show up authentically for yourself?',
    type: 'text'
  },
  {
    id: 'check-3',
    question: 'What boundary did you practice or need to practice?',
    type: 'guided',
    options: [
      'Saying no to requests that drain me',
      'Asking for what I need',
      'Protecting my time',
      'Setting emotional boundaries'
    ]
  }
];

// Healing Exercise Library
export const healingExercises: HealingExercise[] = [
  {
    id: 'exercise-1',
    title: 'Inner child dialogue prompts',
    category: 'Self-Discovery',
    totalExercises: 12,
    completed: 4,
    description: 'Connect with your younger self through guided prompts'
  },
  {
    id: 'exercise-2',
    title: 'Forgiveness letter templates',
    category: 'Healing',
    totalExercises: 8,
    completed: 2,
    description: 'Write therapeutic letters to process and release'
  },
  {
    id: 'exercise-3',
    title: 'Values clarification worksheets',
    category: 'Self-Discovery',
    totalExercises: 5,
    completed: 5,
    description: 'Identify your core values to guide decisions'
  },
  {
    id: 'exercise-4',
    title: 'Confidence building affirmations',
    category: 'Growth',
    totalExercises: 30,
    completed: 12,
    description: 'Daily personalized affirmations for self-belief'
  }
];

// Recent Coach Communication
export const recentMessages: CoachMessage[] = [
  {
    id: 'msg-1',
    from: 'coach',
    message: 'Sarah, I\'m so proud of how you handled that interview! Your authenticity really shines through. Let\'s debrief in our next session.',
    timestamp: '2 hours ago',
    read: true
  },
  {
    id: 'msg-2',
    from: 'client',
    message: 'Thank you, Jennifer! I felt nervous but remembered our preparation. The techniques you taught me really helped.',
    timestamp: '3 hours ago',
    read: true
  },
  {
    id: 'msg-3',
    from: 'coach',
    message: 'Remember to complete this week\'s reflection exercise before our Thursday session. You\'re making incredible progress! 🌱',
    timestamp: '1 day ago',
    read: true
  }
];

// Weekly Progress Stats
export interface WeeklyStats {
  goalsWorkedOn: number;
  reflectionsDone: number;
  breakthroughMoments: number;
  coachingSessions: number;
}

export const thisWeekStats: WeeklyStats = {
  goalsWorkedOn: 3,
  reflectionsDone: 5,
  breakthroughMoments: 2,
  coachingSessions: 1
};

// Milestone Badges
export interface Badge {
  id: string;
  title: string;
  icon: string;
  earnedDate: string;
  description: string;
}

export const earnedBadges: Badge[] = [
  {
    id: 'badge-1',
    title: 'First Week Complete',
    icon: '⭐',
    earnedDate: '2024-09-22',
    description: 'Completed your first week of coaching'
  },
  {
    id: 'badge-2',
    title: 'Reflection Master',
    icon: '📝',
    earnedDate: '2024-10-15',
    description: 'Completed 10 reflection exercises'
  },
  {
    id: 'badge-3',
    title: 'Boundary Builder',
    icon: '🛡️',
    earnedDate: '2024-11-01',
    description: 'Successfully practiced setting boundaries for a month'
  }
];
