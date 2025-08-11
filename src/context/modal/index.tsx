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
  'addTodo' = 'addTodo',
  'editTodo' = 'editTodo',
  'burger' = 'burger',
}

interface ModalContextType {
  modal: ModalType | undefined;
  setModal: Dispatch<SetStateAction<ModalType | undefined>>;
  onClose: () => void;
}

const defaultModalState: ModalContextType = {
  modal: undefined,
  setModal: () => {},
  onClose: () => {},
};

const ModalContext = createContext<ModalContextType>(defaultModalState);

export const ModalContextProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [modal, setModal] = useState<ModalContextType['modal']>(
    defaultModalState.modal,
  );

  const onClose = () => setModal(undefined);

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
        onClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
