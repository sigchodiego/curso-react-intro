import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {

    const { addTodo, setOpenModal } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false); // En cualquier caso dentro de los botones se debe cerrar el modal
        addTodo(newTodoValue);
    }
    const onCancel = () => {
        setOpenModal(false); // En cualquier caso dentro de los botones se debe cerrar el modal
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="modal__content">
                <h4>Agrega un nuevo TODO a la lista</h4>
                <textarea type="text" placeholder="Escribe tu TODO" value={newTodoValue} onChange={onChange} />
                <div className="modalFooter">
                    <button className="modal__cancel-btn" onClick={onCancel}>Cancelar</button>
                    <button type="submit" className="modal__save-btn">Guardar</button>
                </div>
            </div>
        </form>
    );
}

export { TodoForm };