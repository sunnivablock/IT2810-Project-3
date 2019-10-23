import React, {Component} from 'react';  
import '../App.css';
import './table.js';



class personInfo extends Component {  

    render(){
        // TODO: FIKS SÅ DU FÅR HENTET ROW-VERDIER FRA TABLE OG BRUKE DE HER. DENNE KOMPONENTEN HENTES I APP.js
        
        /*function evaluateRating(rating){
            if(rating<30){
                return("This person is rated as below average");
            }
            else if(rating<70){
                return("This person is rated as average");
            }
            else if(rating<90){
                return("This person is rated as pretty good looking");
            }
            else{
                return("This person is rated as really damn hot");
            }
        }*/

        console.log("Inne i personinfo")
        return(
            <div className='personInfo'>
                <span><i><center><b>Click on a person to display more information.</b></center></i></span>
                
                <span>More text to come.
                    E.g.: --profession-- --firstName-- was born in --age-- etc.
                </span>
                
            </div>
        )
    }
}
//<span>{evaluateRating(rating)}</span>
export default personInfo;