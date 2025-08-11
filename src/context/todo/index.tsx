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
  selectedTodoId: number | null;
  setSelectedTodoId: Dispatch<SetStateAction<number | null>>;
}

const defaultTodos: TodosProps = {
  todos: [],
  setTodos: () => {},
  selectedTodoId: null,
  setSelectedTodoId: () => {},
};

const TodosContext = createContext<TodosProps>(defaultTodos);

export const TodosContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Array<TodoType>>(defaultTodos.todos);
  const [selectedTodoId, setSelectedTodoId] = useState<
    TodosProps['selectedTodoId']
  >(defaultTodos.selectedTodoId);

  return (
    <TodosContext.Provider
      value={{ todos, setTodos, selectedTodoId, setSelectedTodoId }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => useContext(TodosContext);

// import {
//   createContext,
//   type Dispatch,
//   type PropsWithChildren,
//   type SetStateAction,
//   useContext,
//   useEffect,
//   useState,
// } from 'react';
// import { openDB } from 'idb';

// import type { TodoType } from '@/types';

// interface TodosProps {
//   todos: Array<TodoType>;
//   setTodos: Dispatch<SetStateAction<Array<TodoType>>>;
//   selectedTodoId: number | null;
//   setSelectedTodoId: Dispatch<SetStateAction<number | null>>;
// }

// const defaultTodos: TodosProps = {
//   todos: [],
//   setTodos: () => {},
//   selectedTodoId: null,
//   setSelectedTodoId: () => {},
// };

// const TodosContext = createContext<TodosProps>(defaultTodos);

// async function initDB() {
//   return openDB('todos_db', 1, {
//     upgrade(db) {
//       if (!db.objectStoreNames.contains('todo')) {
//         db.createObjectStore('todo', { keyPath: 'id' });
//       }
//     },
//   });
// }

// export const TodosContextProvider: React.FC<PropsWithChildren> = ({
//   children,
// }) => {
//   const [todos, setTodos] = useState<Array<TodoType>>(defaultTodos.todos);
//   const [selectedTodoId, setSelectedTodoId] = useState<
//     TodosProps['selectedTodoId']
//   >(defaultTodos.selectedTodoId);

//   useEffect(() => {
//     async function loadTodos() {
//       const db = await initDB();
//       const todosFromDB = await db.getAll('todo');
//       setTodos(todosFromDB);
//     }

//     loadTodos();
//   }, []);

//   useEffect(() => {
//     async function saveTodos() {
//       const db = await initDB();
//       const tx = db.transaction('todo', 'readwrite');
//       const store = tx.objectStore('todo');

//       await store.clear();

//       await Promise.all(todos.map(todo => store.put(todo)));

//       await tx.done;
//     }

//     saveTodos();
//   }, [todos]);

//   return (
//     <TodosContext.Provider
//       value={{ todos, setTodos, selectedTodoId, setSelectedTodoId }}
//     >
//       {children}
//     </TodosContext.Provider>
//   );
// };

// export const useTodosContext = () => useContext(TodosContext);
