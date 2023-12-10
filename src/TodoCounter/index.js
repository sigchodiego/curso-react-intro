import './TodoCounter.css'

function TodoCounter({ total, completed }) {
    return (
        <h1>
            Has completado <strong>{completed}</strong> de <strong>{total}</strong> TODOs
        </h1>
    );
}

export { TodoCounter };