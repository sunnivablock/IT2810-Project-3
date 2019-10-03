import React, {Component} from 'react';
import '../App.css';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
        
         };
    render(){
        return (
        <div className='Header'>
            <span className="firstHeader" style={{"fontSize" : "23px"}}>WELCOME</span>
            
        </div>
        );
    };
};

export default Header;