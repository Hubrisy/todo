import React, {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

export enum ModalType {
  'todo' = 'todo',
  'burger' = 'burger',
}

interface ModalContextType {
  modal: ModalType | undefined;
  setModal: Dispatch<SetStateAction<ModalType | undefined>>;
  selectedTodoId: number | null;
  setSelectedTodoId: Dispatch<SetStateAction<number | null>>;
  editTodoModal: (id: number) => void;
}

const defaultModalState: ModalContextType = {
  modal: undefined,
  selectedTodoId: null,
  setModal: () => {},
  setSelectedTodoId: () => {},
  editTodoModal: () => {},
};

const ModalContext = createContext<ModalContextType>(defaultModalState);

export const ModalContextProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [modal, setModal] = useState<ModalContextType['modal']>(
    defaultModalState.modal,
  );
  const [selectedTodoId, setSelectedTodoId] = useState<
    ModalContextType['selectedTodoId']
  >(defaultModalState.selectedTodoId);

  const editTodoModal = (id: number) => {
    setModal(ModalType.todo);
    setSelectedTodoId(id);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [modal]);

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        selectedTodoId,
        setSelectedTodoId,
        editTodoModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
