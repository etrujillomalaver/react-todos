import './TodoIcon.css'
import React from "react";
import {ReactComponent as CheckSvg} from '../check.svg'
import {ReactComponent as DeleteSvg} from '../delete.svg'

const iconsType = {
    "check":  (color) => <CheckSvg className='Icon-svg' fill={color}/>,
    "delete": (color) => <DeleteSvg className='Icon-svg' fill={color}/>
}

function TodoIcon({type, color, onClick}){
    return (
        <span 
            className={`Icon-container Icon-container-${type}`}
            onClick = {onClick}
        >
            {iconsType[type](color)}
        </span>
    );
}

export { TodoIcon };