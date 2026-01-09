import { ReactNode } from 'react';

/**
 * Card component variants
 */
type CardVariant = 'default' | 'elevated' | 'bordered' | 'glass';

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

/**
 * Reusable Card component with multiple variants
 */
export function Card({
  children,
  variant = 'default',
  className = '',
  padding = 'md',
  hover = false,
}: CardProps) {
  // Base styles
  const baseStyles = 'rounded-xl transition-all duration-300';

  // Variant-specific styles
  const variantStyles: Record<CardVariant, string> = {
    default: 'bg-slate-900/60 border border-slate-800',
    elevated: 'bg-slate-900 shadow-card border border-slate-800/50',
    bordered: 'bg-transparent border-2 border-slate-700',
    glass: 'bg-slate-900/40 backdrop-blur-sm border border-slate-700/50',
  };

  // Padding styles
  const paddingStyles: Record<string, string> = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  // Hover effect
  const hoverStyles = hover
    ? 'hover:border-slate-700 hover:shadow-card-hover hover:-translate-y-1 card-glow cursor-pointer'
    : '';

  const combinedStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${paddingStyles[padding]}
    ${hoverStyles}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return <div className={combinedStyles}>{children}</div>;
}
