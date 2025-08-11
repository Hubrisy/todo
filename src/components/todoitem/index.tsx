import EditImg from '@assets/img/svg/icons/Edit.svg';
import clsx from 'clsx';

import { useModalContext } from '@/context/modal';
import { useTodosContext } from '@/context/todo';
import type { TodoType } from '@/types';

export const TodoItem: React.FC<TodoType> = ({
  deadline,
  description,
  priority,
  statuses,
  title,
  creationDate,
  id,
}) => {
  const { editTodoModal } = useModalContext();
  const { setSelectedTodoId } = useTodosContext();

  return (
    <div className="w-full border-santasgrey border-[1px] rounded-xl mt-4">
      <div className="max-w-[350px] m-auto relative p-2">
        <div
          className={clsx(
            // eslint-disable-next-line no-nested-ternary
            statuses === 'Not Started'
              ? 'text-[#F21E1E]'
              : statuses === 'In Progress'
                ? 'text-[#0225FF]'
                : 'text-[#05A301]',
            'w-3 h-3 rounded-full border-2 bg-white absolute top-3 left-2',
          )}
        />
        <div className="text-start mt-2 pl-6">
          <div className="font-semibold text-[16px]">{title}</div>
          <div className="font-normal text-[14px] text-boulder pt-2.5">
            {description.length > 140
              ? `${description.slice(0, 140)}...`
              : description}
          </div>
          <div className="mt-7 flex text-[10px] font-normal justify-between items-center">
            <div>
              Priority:
              <span
                className={clsx(
                  // eslint-disable-next-line no-nested-ternary
                  priority === 'Extreme'
                    ? 'text-[#F21E1E]'
                    : priority === 'Moderate'
                      ? 'text-[#3ABEFF]'
                      : 'text-[#05A301]',
                  'ml-0.5',
                )}
              >
                {priority}
              </span>
            </div>
            <div>
              Status:
              <span
                className={clsx(
                  // eslint-disable-next-line no-nested-ternary
                  statuses === 'Not Started'
                    ? 'text-[#F21E1E]'
                    : statuses === 'In Progress'
                      ? 'text-[#0225FF]'
                      : 'text-[#05A301]',
                  'ml-0.5',
                )}
              >
                {statuses}
              </span>
            </div>
            <div className="text-santasgrey">
              <div>Deadline on: {deadline?.toLocaleDateString()}</div>
              <div>Created at: {creationDate?.toLocaleDateString()}</div>
            </div>
          </div>
        </div>
        {id !== null && (
          <div
            className="absolute right-2 top-3.5"
            onClick={() => editTodoModal(id, setSelectedTodoId)}
          >
            <EditImg />
          </div>
        )}
      </div>
    </div>
  );
};
