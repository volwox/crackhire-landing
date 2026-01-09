import { ReactNode } from 'react';

/**
 * Badge component variants
 */
type BadgeVariant = 'default' | 'success' | 'warning' | 'accent' | 'outline';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  icon?: ReactNode;
}

/**
 * Reusable Badge component for labels and tags
 */
export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon,
}: BadgeProps) {
  // Base styles
  const baseStyles = 'inline-flex items-center font-medium rounded-full';

  // Variant-specific styles
  const variantStyles: Record<BadgeVariant, string> = {
    default: 'bg-slate-800 text-slate-300',
    success: 'bg-emerald-900/50 text-emerald-400 border border-emerald-800',
    warning: 'bg-amber-900/50 text-amber-400 border border-amber-800',
    accent: 'bg-accent-900/50 text-accent-400 border border-accent-800',
    outline: 'bg-transparent text-slate-400 border border-slate-700',
  };

  // Size-specific styles
  const sizeStyles: Record<BadgeSize, string> = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-sm px-3 py-1 gap-1.5',
  };

  const combinedStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <span className={combinedStyles}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
