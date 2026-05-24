/* eslint-disable react-refresh/only-export-components */
import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@lib/utils';

export type ButtonVariant = 'primary' | 'ghost' | 'solid';
export type ButtonRadius = 'default' | 'pill';
export type ButtonSize = 'default' | 'sm';

export interface ButtonVariantsProps {
  variant?: ButtonVariant;
  radius?: ButtonRadius;
  size?: ButtonSize;
  className?: string;
}

export function buttonVariants({
  variant = 'primary',
  radius = 'default',
  size = 'default',
  className,
}: ButtonVariantsProps = {}): string {
  return cn(
    'inline-flex items-center justify-center gap-2',
    'font-mono font-medium tracking-wide',
    'transition-colors duration-250 cursor-pointer',
    'select-none whitespace-nowrap',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
    'disabled:pointer-events-none disabled:opacity-50',

    size === 'default' && 'px-5 py-2.5 text-xs',
    size === 'sm' && 'px-4 py-2   text-xs',

    radius === 'default' && 'rounded-md',
    radius === 'pill' && 'rounded-full',

    variant === 'primary' && 'bg-accent text-bg hover:bg-accent-2',
    variant === 'ghost' &&
      'border border-line-3 bg-transparent text-ink hover:border-accent hover:text-accent',
    variant === 'solid' && 'bg-ink text-bg hover:bg-accent',

    className,
  );
}

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, ButtonVariantsProps {
  asChild?: boolean;
  icon?: ReactNode;
  iconEnd?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, radius, size, asChild = false, icon, iconEnd, className, children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp ref={ref} className={buttonVariants({ variant, radius, size, className })} {...props}>
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
        {iconEnd && <span className="shrink-0">{iconEnd}</span>}
      </Comp>
    );
  },
);

Button.displayName = 'Button';
