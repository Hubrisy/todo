export interface TodoType {
  title: string;
  deadline: Date | null;
  priority: TodoPriority;
  statuses: TodoStatuses;
  description: string;
  creationDate: Date | null;
  id: number | null;
}

export enum TodoPriority {
  'extreme' = 'Extreme',
  'moderate' = 'Moderate',
  'low' = 'Low',
}

export enum TodoStatuses {
  'not_started' = 'Not Started',
  'in_progress' = 'In Progress',
  'completed' = 'Completed',
}
