import { SelectHTMLAttributes, forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm text-white/60 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`w-full px-4 py-3 bg-transparent border border-dark rounded-xl text-white appearance-none focus:border-jade focus:outline-none transition-colors cursor-pointer ${className}`}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value} className="bg-secondary-dark">
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
            size={20}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-chili">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
