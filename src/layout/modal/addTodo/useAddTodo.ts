import { useState } from 'react';

import { useModalContext } from '@/context/modal';
import { useTodosContext } from '@/context/todo';
import { TodoPriority, TodoStatuses, type TodoType } from '@/types';

export const useAddTodo = () => {
  const { onClose } = useModalContext();
  const { todos, setTodos } = useTodosContext();

  const [todoInfo, setTodoInfo] = useState<TodoType>({
    title: '',
    description: '',
    deadline: new Date(),
    statuses: TodoStatuses.not_started,
    priority: TodoPriority.low,
    creationDate: new Date(),
    id: null,
  });

  const saveTodo = () => {
    const newTodo: TodoType = {
      ...todoInfo,
      id: todos.length + 1,
    };

    setTodos([...todos, newTodo]);
    onClose();
  };

  return {
    todo: todoInfo,
    setTodo: setTodoInfo,
    saveTodo,
    onClose,
  };
};
