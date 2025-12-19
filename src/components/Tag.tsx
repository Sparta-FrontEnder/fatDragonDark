import { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function Tag({ children, active = false, onClick }: TagProps) {
  const baseStyles = 'inline-flex items-center px-4 py-2 rounded-full text-sm transition-all cursor-pointer';
  const activeStyles = active
    ? 'bg-jade text-white'
    : 'bg-transparent border border-dark text-white/60 hover:border-jade/50 hover:text-white';

  return (
    <button onClick={onClick} className={`${baseStyles} ${activeStyles}`}>
      {children}
    </button>
  );
}
