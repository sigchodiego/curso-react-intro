import './TodoItem.css'

function TodoItem({ text, completed }) {
    return (
        <li data-completed={completed} >
            <img src="https://static-00.iconduck.com/assets.00/arrow-right-circle-icon-512x512-2p1e2aaw.png" />
            <p>{text}</p>
            <span>X</span>
        </li>
    );
}

export { TodoItem };