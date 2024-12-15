import React from "react";
import {TodoIcon} from '../TodoIcon'

function CompletedIcon({complete, onComplete}){
    return (
        <TodoIcon
            type='check'
            color={complete ? 'green': 'gray'}
            onClick={onComplete}

        />
    );
}

export { CompletedIcon };