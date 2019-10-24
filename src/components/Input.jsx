import React from 'react';

const Input = (props) => {
    return (  
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">{props.title}
            </label>
            <input
            className={props.className}
            id={props.name}
            name={props.name}
            type={props.type}
            maxLength={props.maxLength}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder} 
            />
        </div>
    )
}

/*Source: https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y*/

export default Input;