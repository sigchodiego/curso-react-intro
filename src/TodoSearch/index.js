import { TodoContext } from '../TodoContext';
import './TodoSearch.css'
import React from 'react'

function TodoSearch() {
    const { stateSearchValue, setStateSearchValue } = React.useContext(TodoContext);
    return (
        <input
            placeholder="Cortar cebolla"
            value={stateSearchValue}
            onChange={
                (event) => {
                    setStateSearchValue(event.target.value);
                }
            } />
    );
}

export { TodoSearch };