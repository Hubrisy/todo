import { useState } from 'react';

import { useModalContext } from '@/context/modal';
import { useTodosContext } from '@/context/todo';
import { type TodoType } from '@/types';

export const useEditTodo = () => {
  const { onClose } = useModalContext();
  const { todos, setTodos, selectedTodoId } = useTodosContext();

  const [todoInfo, setTodoInfo] = useState<TodoType>(
    todos.find(todo => todo.id === selectedTodoId) as TodoType,
  );

  const saveTodo = () => {
    if (!todoInfo) return;
    const updatedTodos = todos.map(todo =>
      todo.id === todoInfo.id ? { ...todo, ...todoInfo } : todo,
    );

    setTodos(updatedTodos);
    onClose();
  };

  return {
    todo: todoInfo,
    setTodo: setTodoInfo,
    saveTodo,
    onClose,
  };
};
