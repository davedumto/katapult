import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Simple utility to merge tailwind classes if packages aren't available
// In a real environment with clsx/tailwind-merge:
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

// Fallback implementation for this environment:
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}