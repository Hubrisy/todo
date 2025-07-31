export interface TodoTypes {
  title: string;
  date: Date | null;
  priority: TodoPriority;
  statuses: TodoStatuses;
  description: string;
}

export enum TodoPriority {
  'extreme' = 'extreme',
  'moderate' = 'moderate',
  'low' = 'low',
}

export enum TodoStatuses {
  'not_started' = 'not_started',
  'in_progress' = 'in_progress',
  'completed' = 'completed',
}
