import Pending from '@assets/img/svg/icons/Pending.svg';
import PlusBtn from '@assets/img/svg/icons/Plus.svg';

import { TodoItem } from '@/components/todoitem';
import { ModalType, useModalContext } from '@/context/modal';
import { useTodosContext } from '@/context/todo';
import { Modal } from '@/layout/modal';

export const Todo = () => {
  const { modal, setModal } = useModalContext();
  const { todos } = useTodosContext();

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
          <div className="flex items-center">
            <div onClick={() => setModal(ModalType.todo)}>
              <PlusBtn />
            </div>
            <div className="font-normal text-[12px] text-santasgrey ml-1.5">
              Add task
            </div>
          </div>
        </div>
        <div className="mt-6">
          {todos.map(item => (
            <TodoItem
              date={item.date}
              description={item.description}
              priority={item.priority}
              statuses={item.statuses}
              title={item.title}
              key={item.title}
            />
          ))}
        </div>
      </div>
      <div>{modal === ModalType.todo && <Modal />}</div>
    </div>
  );
};
