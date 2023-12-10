import './TodoItem.css'
import { CompleteIcon } from '../Icons/CompleteIcon.js'
import { DeleteIcon } from '../Icons/DeleteIcon.js'

function TodoItem({ text, completed, onComplete, onDelete }) {
    return (
        <li className="TodoItem" >
            {/* <span
                className={`Icon Icon-check ${completed && "Icon-check--active"}`}
                onClick={onComplete}
            >
                V
            </span> */}
            <CompleteIcon completed={completed} onComplete={onComplete} />
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                {text}
            </p>
            {/* <span
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                X
            </span> */}
            <DeleteIcon onDelete={onDelete} />
        </li>
    );
}

export { TodoItem };