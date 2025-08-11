import dynamic from 'next/dynamic';

import { ModalType, useModalContext } from '@/context/modal';

const AddTodo = dynamic(() => import('./addTodo'));
const EditTodo = dynamic(() => import('./editTodo'));

const ComponentMap: Partial<Record<ModalType, React.ComponentType>> = {
  [ModalType.addTodo]: AddTodo,
  [ModalType.editTodo]: EditTodo,
};

export const ModalController = () => {
  const { modal } = useModalContext();
  const Component = modal && ComponentMap[modal];

  return <>{!!Component && <Component />}</>;
};
