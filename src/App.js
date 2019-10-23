import React, {Component} from 'react';
import './App.css';
import Table from './components/table'
import Header from './components/header'
import getActors2 from './components/data.js';
import getHotList from './components/graphChart/fillGraph'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchActorsAction from './components/fetchActors'
import {getActorsError, getActorsPending} from './reducers/reducer'
import FormContainer from './components/FormContainer'
import GraphContainer from './components/graphChart/GraphContainer'
import PersonInfo from './components/personInfo'
//var GraphContainer = require("./components/GraphContainer");
//import Search from './components/search2'
import { Select } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


class App extends Component {
  constructor(props){
    super(props);
    this.shouldComponentRender=this.shouldComponentRender.bind(this);
    
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.state = {values:{
      rating: '',
      firstName: '',
      lastName: '',
      year: '',

  } }
  }

  generateURLQuery = () => {
    return "/api/persons?" + ((!this.state.values.Fornavn) ? '' : `&firstName=${this.state.values.Fornavn}`)+ 
        ((!this.state.values.Etternavn) ? '' : `&lastName=${this.state.values.Etternavn}`) +
        ((!this.state.values.Rating) ? '' : `&rating=${this.state.values.Rating}`) +
        ((!this.state.values.Født) ? '' : `&year=${this.state.values.Født}`)+
        ((!this.state.Sorting) ? '' : `&sort=${this.state.Sorting}`)+
        ((this.state.SortDirection === 'asc') ? '&sortAsc=True' : '');
};


  componentDidMount(){
    const {fetchActors}=this.props;
    fetchActors(this.generateURLQuery())
  }

  shouldComponentRender(){
      if(this.pending === false) return false;
      return true;
  }


  
  handleFirstName(e, navn) {
    let value = e.target.value;
    this.setState( prevState => ({ values : 
         {...prevState.values, firstName: value
         }
       }) )
   }

   handleLastName(e) {
    let value = e.target.value;
    this.setState( prevState => ({ values : 
         {...prevState.values, lastName: value
         }
       }))
   }

   handleYear(e) {
    let value = e.target.value;
    this.setState( prevState => ({ values : 
         {...prevState.values, year: value
         }
       }))
   }

   handleRating(e) {
    let value = e.target.value;
    this.setState( prevState => ({ values : 
         {...prevState.values, rating: value
         }
       }))
   }




  render() {
    console.log(this.state.newPerson)
    console.log(this.state.values)
     const { error, fetchActors} = this.props;
     if(!this.shouldComponentRender()) return (<div>Appen laster ikke</div>)
    //console.log(TextFields())
     getActors2()

     
    
      return (
        getHotList(),
          <div>
              {error && <span >{error}</span>}
              <div className="App">
                  <Header/>
                  
                  
                  <div className="mainContent">
                    <div className="search">
                  
                      <TextField
                      id="Rating"
                      label="Rating"
                      value={this.state.values.rating}
                      className="searchField"
                      onChange={this.handleRating}
                      margin="normal"
                      />
                      <TextField
                      id="First name"
                      label="First Name"
                      value={this.state.values.firstName}
                      className="searchField"
                      onChange={this.handleFirstName}
                      margin="normal"
                      />
                      <TextField
                      id="Etternavn"
                      label="Last Name"
                      value={this.state.values.lastName}
                      className="searchField"
                      onChange={this.handleLastName}
                      margin="normal"
                      />
                      <TextField
                      id="Født"
                      label="Year"
                      value={this.state.values.year}
                      className="searchField"
                      onChange={this.handleYear}
                      margin="normal"/>
                    </div>
                  
                    <div className="table1">
                      <Table/>
                    </div>
                    <div className="formContainer">
                      <FormContainer/>
                    </div>
                    <div className="graphContainer">
                      <GraphContainer/>
                    </div>
                  </div>
            </div>  
          </div>
      )
  }
}

const mapStateToProps = state => ({
  actors: state.actors.actors,
  error: getActorsError(state),
  pending: getActorsPending(state),
  values: state.values.values
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchActors: fetchActorsAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App );


//{showPersonDetails ? ( <PersonInfo /> ):(null)}