import { TodoCounter } from './TodoCounter/';
import { TodoButton } from './TodoButton/';
import { TodoSearch } from './TodoSearch/';
import { TodoItem } from './TodoItem/';
import { TodoList } from './TodoList/';

import React from 'react';


function useLocalStorage(itemName, initialValue) {

  let localStogrageItem = localStorage.getItem(itemName);
  let storageItem = localStogrageItem ? JSON.parse(localStogrageItem) : initialValue;

  const [item, setItem] = React.useState(storageItem);

  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem))
  }

  return [item, saveItem];

}

function App() {

  const [stateSearchValue, setStateSearchValue] = React.useState('')
  const [stateTodos, saveTodo] = useLocalStorage('TODO_V2', []);

  const completedTodos = stateTodos.filter(
    todo => todo.completed
  ).length;
  const totalTodos = stateTodos.length;

  const searchTodos = stateTodos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const todoSearchText = stateSearchValue.toLocaleLowerCase();
      return todoText.includes(todoSearchText);
    }
  );

  const updateTodo = (key) => {
    const newTodos = [...stateTodos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === key);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodo(newTodos);
  }
  const deleteTodo = (key) => {
    const newTodos = [...stateTodos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === key);
    newTodos.splice(todoIndex, 1);
    saveTodo(newTodos);
  }

  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={stateSearchValue}
        setSearchValue={setStateSearchValue}
      />

      <TodoList>
        {searchTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => updateTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <TodoButton />

    </>
  );
}

export default App;
