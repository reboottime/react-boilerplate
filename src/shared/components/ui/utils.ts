import { clsx as classNames, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidv4 } from 'uuid';

export function cn(...inputs: ClassValue[]) {
  return twMerge(classNames(inputs));
}

// deprecated, prefer using  useId exported from React
export function getUuid() {
  return uuidv4();
}
