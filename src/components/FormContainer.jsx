import React, {Component} from 'react';  
import '../App.css';
import axios from 'axios';

/* Import Components; These are our dumb components. They are stateless functional components. */
import Button from './Button';
import Input from './Input'; 
import Select from './Select';


class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newPerson: {
        firstName: '',
        lastName: '',
        profession: '',
        year: '',
        rating: ''
      },
      ratingOptions: ['1','2','3','4','5','6','7','8','9','10']
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleProfession = this.handleProfession.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFirstName(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newPerson : 
         {...prevState.newPerson, firstName: value
         }
       }), () => console.log(this.state.newPerson))
   }
   
   handleLastName(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newPerson : 
         {...prevState.newPerson, lastName: value
         }
       }), () => console.log(this.state.newPerson))
   }
   
  handleAge(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newPerson : 
        {...prevState.newPerson, year: value
        }
      }), () => console.log(this.state.newPerson))
  }

  handleRating(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newPerson : 
        {...prevState.newPerson, rating: value
        }
      }), () => console.log(this.state.newPerson))
  }

  handleProfession(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newPerson : 
        {...prevState.newPerson, profession: value
        }
      }), () => console.log(this.state.newPerson))
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => ({ newPerson : 
      {...prevState.newPerson, [name]: value
      }
    }), () => console.log(this.state.newPerson))
  }

  handleFormSubmit = () => {
    let personData = this.state.newPerson;
    console.log(personData)
    axios.post('http://localhost:8000/api/persons', personData)
      .then(response => {
        response.then(data =>{
        console.log("Successful" + data);
      })
      })
      .catch(err => {
        return console.log(err+'Could not post to db.');
      })
  }

  submitResponse(){
    console.log("Submit button pushed")
  }

  handleClearForm(e) {
    // Logic for resetting the form
    e.preventDefault(); //prevents the page from being refreshed on form submission, which is the default form behavior.
    this.setState({ 
      newPerson: {
        firstName: '',
        lastName: '',
        profession: '',
        year: '',
        rating: ''
      },
    })
}

render() {
  return (
      <form className="formContainer">
        <h2 className='formHeader'>ADD NEW PERSON</h2>
        
        <Input inputType={'text'}
          title= {'First name '} 
          name= {'firstName'}
          value={this.state.newPerson.firstName} 
          placeholder = {'Fornavn'}
          handleChange = {this.handleFirstName}/> {/* First name of the user */}
        
        <Input inputType={'text'}
          title= {'Last name '} 
          name= {'lastName'}
          value={this.state.newPerson.lastName} 
          placeholder = {'Etternavn'}
          handleChange = {this.handleLastName}/> {/* Last name of the user */}

        <Input inputType={'number'} 
          name={'age'}
          title= {'Age '} 
          value={this.state.newPerson.age} 
          placeholder = {'Fødselsår'}
          handleChange={this.handleAge} /> {/* Age */} 
        
        <Input inputType={'text'} 
          name={'profession'}
          title= {'Profession '} 
          value={this.state.newPerson.profession} 
          placeholder = {'Yrke'}
          handleChange={this.handleProfession} /> {/* Profession */} 
        
        <Select title={'Rating'}
          name={'rating'}
          options = {this.state.ratingOptions} 
          value = {this.state.newPerson.rating}
          placeholder = {'Velg rating'}
          handleChange = {this.handleRating}
          /> {/* Rating selection */}

        <Button 
          action = {this.handleFormSubmit}
          type = {'primary'} 
          title = {'Submit'} 
          onClick = {this.submitResponse}
          style={buttonStyle}/> { /*Submit */ }
      
        <Button 
          action = {this.handleClearForm}
          type = {'secondary'}
          title = {'Clear'}
          style={buttonStyle}/> {/* Clear the form */}

      </form>
  );
}
}

const buttonStyle = {
margin : '5px 5px 5px 5px'
}

export default FormContainer;

