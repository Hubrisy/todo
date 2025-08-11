import { useState } from 'react';

import Button from '../../components/button';
import Input from '../../components/input';

import type { SelectOption } from '@/components/customSelect';
import ColourSelect from '@/components/customSelect';
import { DatePickerComponent } from '@/components/datePicker';
import { useModalContext } from '@/context/modal';
import { useTodosContext } from '@/context/todo';
import { TodoPriority, TodoStatuses, type TodoType } from '@/types';

const todoPriorityOptions: Array<SelectOption> = [
  { value: 'Extreme', label: 'Extreme', color: '#F21E1E' },
  { value: 'Moderate', label: 'Moderate', color: '#3ABEFF' },
  { value: 'Low', label: 'Low', color: '#05A301' },
];

const todoStatusOptions: Array<SelectOption> = [
  { value: 'Not Started', label: 'Extreme', color: '#F21E1E' },
  { value: 'In Progress', label: 'In Progress', color: '#0225FF' },
  { value: 'Completed', label: 'Completed', color: '#05A301' },
];

export const Modal = () => {
  const { setModal, selectedTodoId } = useModalContext();
  const { todos, setTodos } = useTodosContext();

  const [todoInfo, setTodoInfo] = useState<TodoType>(() => {
    const editingTodo = todos.find(todo => todo.id === selectedTodoId);

    if (editingTodo) {
      return editingTodo;
    }

    return {
      title: '',
      description: '',
      deadline: new Date(),
      statuses: TodoStatuses.not_started,
      priority: TodoPriority.low,
      creationDate: new Date(),
      id: null,
    };
  });

  const saveTodo = () => {
    let updatedTodos: Array<TodoType> = [];

    if (!!todoInfo.id && !!selectedTodoId && todoInfo.id === selectedTodoId) {
      updatedTodos = todos.map(item =>
        item.id === selectedTodoId ? { ...todoInfo } : item,
      );
    } else {
      const newTodo: TodoType = {
        ...todoInfo,
        id: todos.length + 1,
      };

      updatedTodos = [...todos, newTodo];
    }

    setTodos(updatedTodos);
    setModal(undefined);
  };

  return (
    <div className="fixed inset-0 bg-[#0000008f] flex items-center justify-center">
      <div className="w-[90%] bg-white p-4 rounded-lg shadow-lg">
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
              <div>Complete by this date</div>
              <DatePickerComponent
                className="border-santasgrey border-[1px] min-w-full rounded-lg p-2 max-h-[36px]"
                onChange={deadline => setTodoInfo({ ...todoInfo, deadline })}
                value={todoInfo.deadline}
              />
            </div>
            <div className="mt-3">
              <div>Priority</div>
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
            <div>
              {!!todoInfo.id && (
                <div className="mt-3">
                  <div>Statuses</div>
                  <ColourSelect
                    defaultValue={todoStatusOptions[0]}
                    options={todoStatusOptions}
                    onChange={option =>
                      setTodoInfo({
                        ...todoInfo,
                        statuses: option?.value as TodoStatuses,
                      })
                    }
                    value={
                      todoStatusOptions.find(
                        option => option.value === todoInfo.statuses,
                      ) ?? null
                    }
                  />
                </div>
              )}
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
