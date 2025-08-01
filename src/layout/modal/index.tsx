import { useState } from 'react';

import Button from '../../components/button';
import Input from '../../components/input';

import type { SelectOption } from '@/components/customSelect';
import ColourSelect from '@/components/customSelect';
import { DatePickerComponent } from '@/components/datePicker';
import { useModalContext } from '@/context/modal';
import { useTodosContext } from '@/context/todo';
import { TodoPriority, TodoStatuses, type TodoTypes } from '@/types';

const todoPriorityOptions: Array<SelectOption> = [
  { value: 'extreme', label: 'Extreme', color: '#F21E1E' },
  { value: 'moderate', label: 'Moderate', color: '#3ABEFF' },
  { value: 'low', label: 'Low', color: '#05A301' },
];

export const Modal = () => {
  const { setModal } = useModalContext();
  const { todos, setTodos } = useTodosContext();

  const [todoInfo, setTodoInfo] = useState<TodoTypes>({
    title: '',
    description: '',
    date: new Date(),
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
          <form
            className="mt-6"
            onSubmit={e => {
              e.preventDefault();
              saveTodo();
            }}
          >
            <div>
              <div>Title</div>
              <Input
                value={todoInfo.title}
                onChange={e =>
                  setTodoInfo({ ...todoInfo, title: e.target.value })
                }
                minLength={3}
                required
                className="border-santasgrey border-[1px]"
              />
            </div>
            <div className="mt-3">
              <div>Date</div>
              <DatePickerComponent
                className="border-santasgrey border-[1px] min-w-full rounded-lg p-2 max-h-[36px]"
                onChange={date => setTodoInfo({ ...todoInfo, date })}
                value={todoInfo.date}
              />
            </div>
            <div className="mt-3">
              <div>Description</div>
              <ColourSelect
                defaultValue={todoPriorityOptions[0]}
                options={todoPriorityOptions}
                onChange={option =>
                  setTodoInfo({
                    ...todoInfo,
                    priority: option?.value as TodoPriority,
                  })
                }
                value={
                  todoPriorityOptions.find(
                    option => option.value === todoInfo.priority,
                  ) ?? null
                }
              />
            </div>
            <div className="mt-3">
              <div>Description</div>
              <textarea
                value={todoInfo.description}
                onChange={e =>
                  setTodoInfo({ ...todoInfo, description: e.target.value })
                }
                required
                className="border-santasgrey border-[1px] w-full rounded-lg p-2 max-h-[80px] overflow-y-auto"
              />
            </div>
            <div className="mt-6">
              <Button
                className="w-[90px] h-8 text-white bg-bittersweet"
                type="submit"
              >
                Done
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
