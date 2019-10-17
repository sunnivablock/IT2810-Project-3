import React, {Component} from 'react';
import '../App.css';
import logo from '../brad.png';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
        
         };
    render(){
        return (
        <div className='Header'>
            <img src={logo} className="App-logo" alt="logo" />
            <span className="firstHeader" >BAROMETERET</span>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        );
    };
};

export default Header;