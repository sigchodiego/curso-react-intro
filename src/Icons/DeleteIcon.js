import { TodoIcon } from './'

function DeleteIcon({ onDelete }) {
    return (
        <TodoIcon
            type='delete'
            color='salmon'
            onClick={onDelete}
        />
    );
}

export { DeleteIcon };