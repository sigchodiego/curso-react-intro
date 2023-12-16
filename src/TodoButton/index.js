import './TodoButton.css'

function TodoButton({ setOpenModal }) {
    return (
        <button onClick={
            () => {
                setOpenModal(state => !state)
            }
        }>Agregar tarea +</button>
    );
}

export { TodoButton };