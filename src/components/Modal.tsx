import { ReactNode, useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary-dark/95 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-secondary-dark border border-dark rounded-2xl shadow-2xl">
        {/* Header */}
        {title && (
          <div className="sticky top-0 bg-secondary-dark border-b border-dark px-6 py-5 flex items-center justify-between">
            <h3>{title}</h3>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="p-6 lg:p-8">
          {!title && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
