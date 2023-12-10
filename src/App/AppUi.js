import { TodoCounter } from '../TodoCounter';
import { TodoButton } from '../TodoButton';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';

function AppUi({
    error,
    loading,
    completedTodos,
    totalTodos,
    stateSearchValue,
    setStateSearchValue,
    searchTodos,
    updateTodo,
    deleteTodo
}) {
    return (
        <>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch
                searchValue={stateSearchValue}
                setSearchValue={setStateSearchValue}
            />

            <TodoList>
                {loading && <p>Estamos cargando...</p>}
                {error && <p>Hubo un error al cargar...</p>}
                {(!loading && searchTodos.length === 0) && <p>Crea tu primer Todo</p>}
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

export { AppUi };