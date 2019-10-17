import React, { Component } from 'react';
import '../App.css'

class tableContent extends Component{
    state = {
        persons: []
    }

    componentDidMount(){
        this.getPersons();
    }
    
    getPersons = () => {
    axios.get('/api/persons')
        .then(res => {
        if(res.data){
            this.setState({
            persons: res.data
            })
        }
        })
        .catch(err => console.log(err))
    } 
    
    createData(digghet, fornavn, etternavn, fodt) {
        return { digghet, fornavn, etternavn, fodt};
    }

    fillForm(){
        const rows = [
            createData(10, "Chris", "Hemsworth", 1987),
            createData(9, "Brad", "Pitt", 1972),
            createData(8, "Channing", "Tatum", 1985),
            createData(11, "David", "Beckham", 1979),
            createData(7, "Johnny", "Depp", 1974),
            createData(1, "Chris", "Hemsworth", 1987),
            createData(2, "Brad", "Pitt", 1972),
            createData(3, "Channing", "Tatum", 1985),
            createData(12, "David", "Beckham", 1979),
            createData(5, "Johnny", "Depp", 1974),
            createData(13, "Chris", "Hemsworth", 1987),
            createData(14, "Brad", "Pitt", 1972),
            createData(15, "Channing", "Tatum", 1985),
            createData(16, "David", "Beckham", 1979),
            createData(17, "Johnny", "Depp", 1974),
        ];
    }
    
}