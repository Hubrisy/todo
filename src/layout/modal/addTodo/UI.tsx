import type { Dispatch, SetStateAction } from 'react';

import Button from '../../../components/button';
import Input from '../../../components/input';

import ColourSelect from '@/components/customSelect';
import { DatePickerComponent } from '@/components/datePicker';
import { todoPriorityOptions, todoStatusOptions } from '@/config';
import type { TodoPriority, TodoStatuses, TodoType } from '@/types';

interface Props {
  onClose: () => void;
  saveTodo: (todo: TodoType) => void;
  todo: TodoType;
  setTodo: Dispatch<SetStateAction<TodoType>>;
}

export const AddTodoUI: React.FC<Props> = ({
  todo,
  setTodo,
  saveTodo,
  onClose,
}) => (
  <div className="fixed inset-0 bg-[#0000008f] flex items-center justify-center z-20">
    <div className="w-[90%] bg-white p-4 rounded-lg shadow-lg">
      <div className="">
        <div className="flex justify-between font-semibold">
          <div className="cursor-pointer">
            <div className="text-[16px]">Add new task</div>
            <div className="max-w-[80%] h-0.5 bg-bittersweet" />
          </div>
          <div className="cursor-pointer" onClick={onClose}>
            <div className="text-[14px]">Go back</div>
            <div className="h-[1px] bg-black" />
          </div>
        </div>
        <form
          className="mt-6"
          onSubmit={e => {
            e.preventDefault();
            saveTodo(todo);
          }}
        >
          <div>
            <div>Title</div>
            <Input
              value={todo.title}
              onChange={e => setTodo({ ...todo, title: e.target.value })}
              minLength={3}
              required
              className="border-santasgrey border-[1px]"
            />
          </div>
          <div className="mt-3">
            <div>Complete by this date</div>
            <DatePickerComponent
              className="border-santasgrey border-[1px] min-w-full rounded-lg p-2 max-h-[36px]"
              onChange={deadline => setTodo({ ...todo, deadline })}
              value={todo.deadline}
            />
          </div>
          <div className="mt-3">
            <div>Priority</div>
            <ColourSelect
              defaultValue={todoPriorityOptions[0]}
              options={todoPriorityOptions}
              onChange={option =>
                setTodo({
                  ...todo,
                  priority: option?.value as TodoPriority,
                })
              }
              value={
                todoPriorityOptions.find(
                  option => option.value === todo.priority,
                ) ?? null
              }
            />
          </div>
          <div>
            <div className="mt-3">
              <div>Statuses</div>
              <ColourSelect
                defaultValue={todoStatusOptions[0]}
                options={todoStatusOptions}
                onChange={option =>
                  setTodo({
                    ...todo,
                    statuses: option?.value as TodoStatuses,
                  })
                }
                value={
                  todoStatusOptions.find(
                    option => option.value === todo.statuses,
                  ) ?? null
                }
              />
            </div>
          </div>
          <div className="mt-3">
            <div>Description</div>
            <textarea
              value={todo.description}
              onChange={e => setTodo({ ...todo, description: e.target.value })}
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
