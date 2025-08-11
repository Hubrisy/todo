import React from 'react';

import { AddTodoUI } from './UI';
import { useAddTodo } from './useAddTodo';

export const AddTodo = () => {
  const { todo, setTodo, saveTodo, onClose } = useAddTodo();

  return (
    <AddTodoUI
      todo={todo}
      setTodo={setTodo}
      saveTodo={saveTodo}
      onClose={onClose}
    />
  );
};

export default AddTodo;
