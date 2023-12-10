import './TodoSearch.css'
import React from 'react'

function TodoSearch({ searchValue, setSearchValue }) {
    return (
        <input
            placeholder="Cortar cebolla"
            value={searchValue}
            onChange={
                (event) => {
                    setSearchValue(event.target.value);
                }
            } />
    );
}

export { TodoSearch };