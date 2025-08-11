import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useState,
} from 'react';

import type { TodoType } from '@/types';

interface TodosProps {
  todos: Array<TodoType>;
  setTodos: Dispatch<SetStateAction<Array<TodoType>>>;
}

const defaultTodos: TodosProps = {
  todos: [],
  setTodos: () => {},
};

const TodosContext = createContext<TodosProps>(defaultTodos);

export const TodosContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Array<TodoType>>(defaultTodos.todos);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => useContext(TodosContext);
