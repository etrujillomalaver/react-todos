import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm(){

    const {
        addTodo,
        setStateOpenModal
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');


    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setStateOpenModal(false);
    };

    const onCancel = () => {
        setStateOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }


    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Escribe tu TODO"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button className = "TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
                <button className = "TodoForm-button TodoForm-button--add">Agregar</button>
            </div>            
        </form>
    );
}

export {TodoForm};