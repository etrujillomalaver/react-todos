import './TodoItem.css'
import {CompletedIcon} from '../TodoIcon/CompletedIcon.js'
import {DeleteIcon} from '../TodoIcon/DeleteIcon.js'

function TodoItem({text, completed, funcComplete, funcDelete}){
    return(
      <li className="TodoItem">
        <CompletedIcon 
          complete={completed} 
          onComplete={funcComplete}/>
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
      
        <DeleteIcon 
          complete={completed} 
          onDelete={funcDelete}/>
      </li>
    );
  }

  export {TodoItem};