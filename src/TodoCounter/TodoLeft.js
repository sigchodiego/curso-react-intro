function TodoLeft({ todos }) {
    return (
        <strong style={{ color: 'salmon' }}>
            {todos.completedTodos}
        </strong> + 'de' +
        <strong style={{ color: 'lawngreen' }}>
            {todos.totalTodos}
        </strong >
    );
}

export { TodoLeft }