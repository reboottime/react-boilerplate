import { clsx as classNames, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(classNames(inputs));
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function clsx(...args: any[]) {
  return cn(classNames(args));
}
