import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Todo 1', completed: false },
  { text: 'Todo 2', completed: true },
  { text: 'Todo 3', completed: false },
  { text: 'Todo 4', completed: false },
];

function App() {
  return (
    <>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <TodoButton />

    </>
  );
}

export default App;
