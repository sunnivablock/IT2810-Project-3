import React from 'react';

const Input = (props) => {
    return (  
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">{props.title}
            </label>
            <input
            className="form-control"
            id={props.name}
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder} 
            {...props}
            />
        </div>
    )
}

/*Source: https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y*/

export default Input;