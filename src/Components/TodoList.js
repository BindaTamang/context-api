// src/components/TodoList.js
import React, { useContext } from 'react';
import { TodoListContext } from '../Contexts/TodoList';
import TodoItem from './Todo';

const TodoList = () => {
  const { todos } = useContext(TodoListContext);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
