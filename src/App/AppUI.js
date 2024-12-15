import logo from '../platzi.webp';
import './App.css';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {TodosLoading} from '../TodosLoading'
import {TodosError} from '../TodosError'
import {TodosEmpty} from '../TodosEmpty'
import {CreateTodoButton} from '../CreateTodoButton';
import React from 'react';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';



function AppUI({
  // completedTodos,
  // totalTodos,
  // stateSearchValue,
  // setStateSearchValue,
  // filteredTodos,
  // funcComplete,
  // funcDelete,
  // loading,
  // error
}
){

  const {
    filteredTodos,
    funcComplete,
    funcDelete,
    loading,
    error,
    openModal
  } = React.useContext(TodoContext);
    return (
        <React.Fragment>
    
          <TodoCounter/>
          <TodoSearch/>
          
          <TodoList>
            {loading && 
              <>
                <TodosLoading/>
                <TodosLoading/>
                <TodosLoading/>
              </>              
            }
            {error && <TodosError/>}
            {(!loading && filteredTodos.length == 0) 
              && <TodosEmpty/>}
            {
              filteredTodos.map(
                todo=> (
                <TodoItem 
                  key={todo.text} 
                  text={todo.text} 
                  completed={todo.completed}
                  funcComplete={() => funcComplete(todo.text)}
                  funcDelete={()=>funcDelete(todo.text)}
                />
              ))
            }
          </TodoList>            

          <CreateTodoButton/>

          {
            openModal && (
              <Modal>
                <TodoForm/>
              </Modal>
            )
          }

        </React.Fragment>
      );
}

export { AppUI };