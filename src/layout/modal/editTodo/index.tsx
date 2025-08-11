import React from 'react';

import { AddTodoUI } from '../addTodo/UI';

import { useEditTodo } from './useEditTodo';

export const EditTodo = () => {
  const { todo, setTodo, saveTodo, onClose } = useEditTodo();

  return (
    <AddTodoUI
      todo={todo}
      setTodo={setTodo}
      saveTodo={saveTodo}
      onClose={onClose}
    />
  );
};

export default EditTodo;
