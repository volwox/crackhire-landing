'use client';

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const baseStyles =
  'inline-flex items-center justify-center font-semibold tracking-tight rounded-lg transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-500 text-white hover:bg-accent-400 focus:ring-accent-500 active:bg-accent-600',
  secondary:
    'bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 focus:ring-slate-500 active:bg-slate-800',
  ghost:
    'bg-transparent text-slate-300 hover:bg-slate-800/50 hover:text-slate-100 focus:ring-slate-500 active:bg-slate-800',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-sm px-4 py-2 gap-1.5',
  md: 'text-base px-6 py-3 gap-2',
  lg: 'text-lg px-8 py-4 gap-2.5',
};

type CommonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

type AsButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type AsLinkProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    /**
     * NOTE: We intentionally DO NOT open new tabs anywhere for conversion reasons.
     * This prop is kept for backward compatibility but ignored.
     */
    external?: boolean;
  };

export function Button(props: AsButtonProps | AsLinkProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
  } = props;

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`.trim();

  if ('href' in props && typeof props.href === 'string') {
    const { href, onClick, ...rest } = props;

    return (
      <a
        {...rest}
        href={href}
        className={classes}
        onClick={onClick}
        // Explicitly avoid target=_blank anywhere in the app
        target={undefined}
        rel={undefined}
      >
        {children}
      </a>
    );
  }

  const { onClick, disabled, type, ...rest } = props;

  return (
    <button
      {...rest}
      type={type ?? 'button'}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
