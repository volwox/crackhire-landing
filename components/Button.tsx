'use client';

import { forwardRef } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  external?: never;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  type?: never;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  disabled?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white shadow-glow hover:shadow-glow-lg',
  secondary:
    'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600',
  ghost: 'bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-white',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      children,
      className = '',
      ...rest
    } = props;

    const baseStyles = `
      inline-flex items-center justify-center font-medium rounded-lg
      transition-all duration-200 ease-out
      focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-slate-950
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const combinedClassName = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.trim();

    // If href is provided, render as link
    if ('href' in props && props.href) {
      const { href, external, onClick, ...linkRest } = props as ButtonAsLink;
      
      // External links: same tab by default, just add rel for security
      if (external) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            rel="noopener noreferrer"
            onClick={onClick}
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }

      // Internal links: use Next.js Link
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          onClick={onClick}
          className={combinedClassName}
        >
          {children}
        </Link>
      );
    }

    // Otherwise render as button
    const { type = 'button', onClick, disabled, ...buttonRest } = props as ButtonAsButton;

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={combinedClassName}
      >
        {children}
      </button>
    );
  }
);
