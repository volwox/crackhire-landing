'use client';

import React, { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonAsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type ButtonAsLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
} & (ButtonAsButtonProps | ButtonAsLinkProps);

const baseStyles =
  'inline-flex items-center justify-center font-semibold tracking-tight rounded-lg transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed';

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-accent-500 text-white hover:bg-accent-400 focus:ring-accent-500 active:bg-accent-600',
  secondary:
    'bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 focus:ring-slate-500 active:bg-slate-800',
  ghost: 'bg-transparent text-slate-300 hover:bg-slate-800/50 hover:text-slate-100 focus:ring-slate-500 active:bg-slate-800',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-sm px-4 py-2 gap-1.5',
  md: 'text-base px-6 py-3 gap-2',
  lg: 'text-lg px-8 py-4 gap-2.5',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`.trim();

  // Link mode (always same tab)
  if (typeof href === 'string') {
    const { onClick, ...anchorProps } = props as ButtonAsLinkProps;

    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        // Explicitly avoid target=_blank anywhere in the app
        target={undefined}
        rel={undefined}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  // Button mode
  const buttonProps = props as ButtonAsButtonProps;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
