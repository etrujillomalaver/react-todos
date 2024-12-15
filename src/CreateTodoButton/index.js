import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton(){

    const {
        openModal,
        setStateOpenModal
    } = React.useContext(TodoContext);

    return(
        <button className="CreateTodoButton" onClick={
            () => {
                
                setStateOpenModal(!openModal);
            }
        }>
            +
        </button>
    );
}

export {CreateTodoButton};