import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useState,
} from 'react';

import type { TodoTypes } from '@/types';

interface TodosProps {
  todos: Array<TodoTypes>;
  setTodos: Dispatch<SetStateAction<Array<TodoTypes>>>;
}

const defaultTodos: TodosProps = {
  todos: [],
  setTodos: () => {},
};

const TodosContext = createContext<TodosProps>(defaultTodos);

export const TodosContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Array<TodoTypes>>(defaultTodos.todos);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => useContext(TodosContext);
