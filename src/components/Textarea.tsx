import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm text-white/60 mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`w-full px-4 py-3 bg-transparent border border-dark rounded-xl text-white placeholder:text-white/30 focus:border-jade focus:outline-none transition-colors resize-none ${className}`}
          rows={4}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-chili">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
