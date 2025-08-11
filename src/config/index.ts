import type { SelectOption } from '@/components/customSelect';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const todoPriorityOptions: Array<SelectOption> = [
  { value: 'Extreme', label: 'Extreme', color: '#F21E1E' },
  { value: 'Moderate', label: 'Moderate', color: '#3ABEFF' },
  { value: 'Low', label: 'Low', color: '#05A301' },
];

export const todoStatusOptions: Array<SelectOption> = [
  { value: 'Not Started', label: 'Not Started', color: '#F21E1E' },
  { value: 'In Progress', label: 'In Progress', color: '#0225FF' },
  { value: 'Completed', label: 'Completed', color: '#05A301' },
];
