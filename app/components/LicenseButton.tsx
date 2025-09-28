'use client';

import { useState } from 'react';
import { DollarSign, ShoppingCart, Tag } from 'lucide-react';

interface LicenseButtonProps {
  variant: 'buy' | 'sell';
  price?: string;
  onAction?: () => void;
  disabled?: boolean;
}

export function LicenseButton({ variant, price, onAction, disabled = false }: LicenseButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (disabled || isLoading) return;
    
    setIsLoading(true);
    try {
      await onAction?.();
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === 'buy') {
    return (
      <button
        onClick={handleClick}
        disabled={disabled || isLoading}
        className="btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          <>
            <ShoppingCart className="w-4 h-4" />
            <span>Buy License</span>
            {price && <span className="font-bold">({price})</span>}
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className="btn-secondary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <>
          <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          <span>Listing...</span>
        </>
      ) : (
        <>
          <Tag className="w-4 h-4" />
          <span>List for License</span>
        </>
      )}
    </button>
  );
}
