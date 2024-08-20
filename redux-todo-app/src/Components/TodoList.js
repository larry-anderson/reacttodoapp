// src/components/TodoList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../actions';

const TodoList = () => {
  const [text, setText] = useState('');
  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a new task" />
      <button onClick={handleAddTodo}>Add To-Do</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span onClick={() => dispatch(toggleTodo(todo.id))} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
