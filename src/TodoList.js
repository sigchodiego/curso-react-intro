function TodoList(props) {
    return (
        <ul style={{ padding: 0 }}>
            {props.children}
        </ul>
    );
}

export { TodoList };