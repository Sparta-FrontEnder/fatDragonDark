import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm text-white/60 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-3 bg-transparent border border-dark rounded-xl text-white placeholder:text-white/30 focus:border-jade focus:outline-none transition-colors ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-chili">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
