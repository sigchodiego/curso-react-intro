import React from "react";
import { createPortal } from "react-dom";
import './Modal.css'

function Modal({ setOpenModal }) {
    return createPortal(
        <div className="modal">
            <div className="modal__content">
                <h4>Agrega un nuevo TODO a la lista</h4>
                <input type="text" name="add-todo-input" placeholder="Escribe tu TODO" />
                <div className="modalFooter">
                    <button className="modal__save-btn">Guardar</button>
                    <button className="modal__cancel-btn" onClick={() => {
                        setOpenModal(state => !state);
                    }}>Cancelar</button>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };