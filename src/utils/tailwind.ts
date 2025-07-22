import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge as originalTwMerge } from 'tailwind-merge';

export const twMerge = (...args: ClassValue[]) => originalTwMerge(clsx(args));
