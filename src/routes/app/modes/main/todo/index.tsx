import { useMemo, useState } from 'react';
import Pending from '@assets/img/svg/icons/Pending.svg';
import PlusBtn from '@assets/img/svg/icons/Plus.svg';
import clsx from 'clsx';
import Image from 'next/image';

import { TodoItem } from '@/components/todoitem';
import { ModalType, useModalContext } from '@/context/modal';
import { useTodosContext } from '@/context/todo';
import { Modal } from '@/layout/modal';
import { TodoStatuses } from '@/types';

export const Todo = () => {
  const { modal, setModal } = useModalContext();
  const [activeFilter, setActiveFilter] = useState<TodoStatuses>(
    TodoStatuses.not_started,
  );
  const { todos, setSelectedTodoId } = useTodosContext();

  const createNewTodo = () => {
    setSelectedTodoId(null);
    setModal(ModalType.addTodo);
  };

  const filteredTodos = useMemo(
    () => todos.filter(todo => todo.statuses === activeFilter),
    [todos, activeFilter],
  );

  const filterTodoFunction = (statuses: TodoStatuses) => {
    setActiveFilter(statuses);
  };

  return (
    <div className="rounded-xl relative z-5">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="flex">
            <div>
              <Pending />
            </div>
            <div className="text-bittersweet font-medium text-[16px]">
              To-Do
            </div>
          </div>
          <div className="flex items-center" onClick={createNewTodo}>
            <div>
              <PlusBtn />
            </div>
            <div className="font-normal text-[12px] text-santasgrey ml-1.5">
              Add task
            </div>
          </div>
        </div>
        <div className="mt-4">
          {todos.length ? (
            <div>
              <div className="flex text-[14px] font-medium justify-between">
                <div
                  onClick={() => filterTodoFunction(TodoStatuses.not_started)}
                  className={clsx(
                    activeFilter === TodoStatuses.not_started
                      ? 'text-black border-black'
                      : 'text-santasgrey border-white',
                    'border-b-[1px]',
                  )}
                >
                  Not started
                </div>
                <div
                  onClick={() => filterTodoFunction(TodoStatuses.in_progress)}
                  className={clsx(
                    activeFilter === TodoStatuses.in_progress
                      ? 'text-black border-black'
                      : 'text-santasgrey border-white',
                    'border-b-[1px]',
                  )}
                >
                  In progress
                </div>
                <div
                  onClick={() => filterTodoFunction(TodoStatuses.completed)}
                  className={clsx(
                    activeFilter === TodoStatuses.completed
                      ? 'text-black border-black'
                      : 'text-santasgrey border-white',
                    'border-b-[1px]',
                  )}
                >
                  Completed
                </div>
              </div>

              <div>
                {filteredTodos.map((todo, index) => (
                  <TodoItem
                    key={index}
                    deadline={todo.deadline}
                    description={todo.description}
                    priority={todo.priority}
                    statuses={todo.statuses}
                    title={todo.title}
                    creationDate={todo.creationDate}
                    id={todo.id}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <Image
                src="/img/notodo3.png"
                alt="No todo yet"
                width={300}
                height={100}
              />
            </div>
          )}
        </div>
      </div>
      <div>{modal === ModalType.addTodo && <Modal />}</div>
    </div>
  );
};
