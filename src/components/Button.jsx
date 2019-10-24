import React from 'react';

const Button = (props) => {
    return(
        <button 
            style = {props.style} 
            className = {props.className}
            onClick = {props.action}
            disabled = {props.disabled}>
            {props.title} 
        </button>
    )
}

export default Button;