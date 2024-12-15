import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter(){
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);
    
    return(
        <h1 className="TodoCounter">Has completado {completedTodos} de {totalTodos} Todos</h1>
    );
}

export {TodoCounter};