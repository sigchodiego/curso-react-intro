import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'
import { TodoLeft } from './TodoLeft';

function TodoCounter() {
    const { completedTodos, totalTodos } = React.useContext(TodoContext);
    return totalTodos > 0 ? (
        <h1>
            Has completado <TodoLeft todos={{ completedTodos, totalTodos }} /> TODOs
        </h1>
    ) : <h2 style={{ textAlign: 'center', paddingTop: 50 }}>Todavia no has agregado TODOs</h2>;
}

export { TodoCounter };