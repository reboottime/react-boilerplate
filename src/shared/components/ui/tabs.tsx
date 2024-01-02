/* eslint-disable max-len */
import * as TabsPrimitive from '@radix-ui/react-tabs';
import clsx from 'clsx';
import * as React from 'react';

import { cn } from './utils';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      className,
    )}
    ref={ref}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const groupedClassNames = clsx(
    'data-[state=active]:bg-blue-200 data-[state=active]:text-blue-600  data-[state=active]:shadow-sm data-[state=active]:border-2 data-[state=active]:border-blue-600 ',
    'capitalize text-sm font-medium whitespace-nowrap',
    'disabled:pointer-events-none disabled:opacity-50',
    'inline-flex items-center justify-center',
    'rounded-sm px-3 py-1.5 border-2 mr-2',
  );

  return (
    <TabsPrimitive.Trigger
      className={cn(
        'ring-offset-background transition-all border-gray-00',
        className,
        groupedClassNames,
      )}
      ref={ref}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    className={cn(
      'mt-2',
      className,
    )}
    ref={ref}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs as default, Tabs, TabsList, TabsTrigger, TabsContent };
