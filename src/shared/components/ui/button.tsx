/* eslint-disable max-len */
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@ui/utils';

const buttonVariants = cva('button', {
  variants: {
    variant: {
      primary: 'button--primary',
      danger: 'button--danger',
      outline: 'button--outline',
      link: 'button--link',
    },
    size: {
      default: 'button--md',
      sm: 'button--sm',
      lg: 'button--lg',
      icon: 'button--icon',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
    fullWidth: false,
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, fullWidth = true, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild
      ? Slot
      : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, fullWidth }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button as default, buttonVariants };
