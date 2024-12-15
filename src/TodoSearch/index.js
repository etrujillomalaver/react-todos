import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch(){

    const {
        stateSearchValue,
        setStateSearchValue,
    } = React.useContext(TodoContext)

    return(
        <input 
            className='TodoSearch' 
            placeholder="Cortar cebolla"
            value={stateSearchValue}
            onChange={(event) => {
                setStateSearchValue(event.target.value);
            }}  
        >
        </input>
    );
}

export {TodoSearch};