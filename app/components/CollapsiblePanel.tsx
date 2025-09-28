'use client';

import { useState, ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapsiblePanelProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  variant?: 'default';
}

export function CollapsiblePanel({ 
  title, 
  children, 
  defaultOpen = false,
  variant = 'default' 
}: CollapsiblePanelProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-surface hover:bg-opacity-30 transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-text-secondary" />
        ) : (
          <ChevronDown className="w-5 h-5 text-text-secondary" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6 animate-slide-up">
          {children}
        </div>
      )}
    </div>
  );
}
