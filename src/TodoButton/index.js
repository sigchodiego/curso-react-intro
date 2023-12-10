import './TodoButton.css'

function TodoButton() {
    return (
        <button onClick={
            () => { console.log('click') }
        }>Agregar tarea +</button>
    );
}

export { TodoButton };