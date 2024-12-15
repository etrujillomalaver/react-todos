import React from "react";
import {useLocalStorage} from './useLocalStorage'

const TodoContext = React.createContext();

/*
const defaultTodos = [
  {text: 'Hacer mercado de plaza', completed: true},
  {text: 'Limpiar la cocina', completed: false},
  {text: 'Hacer el almuerzo', completed: true},
  {text: 'Bañar al perro', completed: false}
];


localStorage.setItem('TODO_V1', JSON.stringify(defaultTodos));
*/

function TodoProvider({children}){
    
  const [openModal, setStateOpenModal] = React.useState(false);
  const [stateSearchValue, setStateSearchValue] = React.useState('');
  //console.log('Esstás escribiendo en el componente TodoSearch: ' + stateSearchValue)

  const {
    item: stateTodos, 
    saveItem: saveTodos, 
    loading, 
    error} = useLocalStorage("TODO_V1", []);

  const completedTodos = stateTodos.filter(todo => todo.completed).length;
  const totalTodos = stateTodos.length;

  const filteredTodos = stateTodos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(stateSearchValue.toLocaleLowerCase()) 
    }
  );

  const funcComplete = (text) =>{
    const newTodos = [...stateTodos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text == text
    );

    newTodos[todoIndex].completed = true;

    saveTodos(newTodos);

  };

  const funcDelete = (text) =>{
    const newTodos = [...stateTodos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

  };

  const addTodo = (text) =>{
    const newTodos = [...stateTodos];
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos);
  }

    return(
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            stateSearchValue,
            setStateSearchValue,
            filteredTodos,
            funcComplete,
            funcDelete,
            loading,
            error,
            openModal, 
            setStateOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};