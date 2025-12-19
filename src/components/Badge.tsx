import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'spicy' | 'vegetarian' | 'new';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-white/10 text-white/80',
    spicy: 'bg-chili/20 text-chili border border-chili/30',
    vegetarian: 'bg-jade/20 text-jade border border-jade/30',
    new: 'bg-jade/20 text-jade border border-jade/30',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs tracking-wide ${variants[variant]}`}>
      {children}
    </span>
  );
}
