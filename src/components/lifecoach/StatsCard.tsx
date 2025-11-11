'use client';

interface StatsCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  color?: 'primary' | 'accent' | 'secondary';
}

const colorClasses = {
  primary: 'bg-primary/10 text-primary',
  accent: 'bg-accent/10 text-accent',
  secondary: 'bg-secondary text-secondary-foreground'
};

export function StatsCard({ icon, label, value, color = 'primary' }: StatsCardProps) {
  return (
    <div className="bg-card rounded-xl p-5 shadow border border-border hover:shadow-md transition-shadow">
      <div className={`w-10 h-10 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <div className="text-3xl font-bold text-card-foreground mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
