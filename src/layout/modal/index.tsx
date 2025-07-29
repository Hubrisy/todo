import { useState } from 'react';
import clsx from 'clsx';

import Button from '../../components/button';
import Input from '../../components/input';
import Select from '../../components/select';

import { useModalContext } from '@/context/modal';
import { useTodosContext } from '@/context/todo';
import { TodoPriority, TodoStatuses, type TodoTypes } from '@/types';

const todoPriorityColorSystem = {
  extreme: '#F21E1E',
  moderate: '#3ABEFF',
  low: '#05A301',
};

export const Modal = () => {
  const { setModal } = useModalContext();
  const { todos, setTodos } = useTodosContext();

  const [todoInfo, setTodoInfo] = useState<TodoTypes>({
    title: '',
    description: '',
    date: '',
    statuses: TodoStatuses.not_started,
    priority: TodoPriority.low,
  });

  const saveTodo = () => {
    setTodos([...todos, todoInfo]);
    setModal(undefined);
  };

  return (
    <div className="fixed inset-0 bg-[#0000008f] flex items-center justify-center">
      <div className="w-[90%] h-[70%] bg-white p-4 rounded-lg shadow-lg">
        <div className="">
          <div className="flex justify-between font-semibold">
            <div className="cursor-pointer">
              <div className="text-[16px]">Add new task</div>
              <div className="max-w-[80%] h-0.5 bg-bittersweet" />
            </div>
            <div className="cursor-pointer" onClick={() => setModal(undefined)}>
              <div className="text-[14px]">Go back</div>
              <div className="h-[1px] bg-black" />
            </div>
          </div>
          <div className="mt-6">
            <div>
              <div>Title</div>
              <Input
                value={todoInfo.title}
                onChange={e =>
                  setTodoInfo({ ...todoInfo, title: e.target.value })
                }
                className="border-santasgrey border-[1px]"
              />
            </div>
            <div className="mt-3">
              <div>Date</div>
              <Input
                value={todoInfo.date}
                onChange={e =>
                  setTodoInfo({ ...todoInfo, date: e.target.value })
                }
                className="border-santasgrey border-[1px]"
              />
            </div>
            <div className="mt-3">
              <div>Priority</div>
              <Select
                value={todoInfo.priority}
                onChange={e =>
                  setTodoInfo({
                    ...todoInfo,
                    priority: e.target.value as TodoPriority,
                  })
                }
                className="border-santasgrey border-[1px] w-full h-10 rounded-lg"
              >
                {Object.values(TodoPriority).map(state => (
                  <option
                    key={state}
                    value={state}
                    className={clsx(`text-[${todoPriorityColorSystem[state]}`)}
                  >
                    {state}
                  </option>
                ))}
              </Select>
            </div>
            <div className="mt-3">
              <div>Description</div>
              <textarea
                value={todoInfo.description}
                onChange={e =>
                  setTodoInfo({ ...todoInfo, description: e.target.value })
                }
                className="border-santasgrey border-[1px] w-full rounded-lg p-2 max-h-[80px] overflow-y-auto"
              />
            </div>
            <div className="mt-6">
              <Button
                className="w-[90px] h-8 text-white bg-bittersweet"
                onClick={saveTodo}
              >
                Done
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
