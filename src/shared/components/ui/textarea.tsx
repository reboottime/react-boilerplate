import * as React from 'react';

import { cn } from 'shared/components/ui/utils';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'min-h-[10]',
          'rounded-md flex w-full',
          'p-2 px-3 py-2',
          //   configure stroke color
          'border border-stroke',
          'bg-white',
          'text-sm placeholder:text-dark-6',
          //   replace primary color
          'ring-offset-white focus-visible:ring-primary focus-visible:ring-offset-0',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea as default };
