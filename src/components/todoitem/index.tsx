import type { TodoTypes } from '@/types';

export const TodoItem: React.FC<TodoTypes> = ({
  date,
  description,
  priority,
  statuses,
  title,
}) => (
  <div className="w-full border-santasgrey border-[1px] rounded-xl mt-4">
    <div className="max-w-[350px] m-auto relative p-2">
      <div className="w-3 h-3 rounded-full border-2 border-red-500 bg-white absolute top-[10px] left-2" />
      <div className="text-start mt-2 pl-10">
        <div className="font-semibold text-[16px]">{title}</div>
        <div className="font-normal text-[14px]">{description}</div>
        <div className="mt-7 flex text-[10px] font-normal justify-between">
          <div>Priority: {priority}</div>
          <div>Status: {statuses}</div>
          <div>Created on: {date}</div>
        </div>
      </div>
    </div>
  </div>
);
