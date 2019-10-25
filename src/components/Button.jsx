import React from 'react';

const Button = (props) => {
    return(
        <button 
            className = {props.className}
            style = {props.style} 
            onClick = {props.action}
            disabled = {props.disabled}
            id={props.id}>
            {props.title} 
        </button>
    )
}

export default Button;