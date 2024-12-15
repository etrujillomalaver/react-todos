import React from "react";
import {TodoIcon} from '../TodoIcon'

function DeleteIcon({complete, onDelete}){
    return (
        <TodoIcon
            type='delete'
            color={'gray'}
            onClick = {onDelete}
        />
    );
}

export { DeleteIcon };