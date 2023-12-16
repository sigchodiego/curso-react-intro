import { TodoCounter } from '../TodoCounter';
import { TodoButton } from '../TodoButton';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoForm } from '../TodoForm';

import { TodosLoading } from '../TodosLoading';
import { TodosEmpty } from '../TodosEmpty';
import { TodosError } from '../TodosError';
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal';


function AppUi() {

    const { error,
        loading,
        searchTodos,
        updateTodo,
        deleteTodo,
        openModal,
        setOpenModal } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchTodos.length === 0) && <TodosEmpty />}
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
            <TodoButton setOpenModal={setOpenModal} />

            {openModal && <Modal >
                <TodoForm />
            </Modal>}

        </>
    );
}

export { AppUi };