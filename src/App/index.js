import React from "react";
import { useLocalStorage } from './useLocalStorage';
import { AppUi } from "./AppUi";

function App() {

  const [stateSearchValue, setStateSearchValue] = React.useState('')
  const { item: stateTodos, saveItem: saveTodo, loading, error } = useLocalStorage('TODO_V2', []);

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
    <AppUi
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      stateSearchValue={stateSearchValue}
      setStateSearchValue={setStateSearchValue}
      searchTodos={searchTodos}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}

    />
  );

}

export default App;
