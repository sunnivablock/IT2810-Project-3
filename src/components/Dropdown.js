import React, { Component } from 'react'
import Select from 'react-select'

class Dropdown extends Component{

    constructor(props){
        super(props);
        this.state = {
            options : [
            { value: '/api/persons/ratingDESC', label: 'Rating (høyest til lavest)' },
            { value: '/api/persons/ratingASC', label: 'Rating (lavest til høyest)' },
            { value: '/api/persons/firstNameASC', label: 'Fornavn (alfabetisk)' }
     ]}
    }



render(){
return(
    <Select options={this.state.options} />
)}
    }


export default Dropdown;