import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TextField from '@material-ui/core/TextField';
import '../App.css'
import {SearchSuccess} from '../actions/index'
import Select from './Select'
import searchLogo from '../search-icon.png'



class Search extends Component {
 
  constructor(props){
    super(props);
       
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleSorting=this.handleSorting.bind(this);
    this.handleSortDirection=this.handleSortDirection.bind(this);
    this.state = {
      values:{
      rating: '',
      firstName: '',
      lastName: '',
      year: '',
      Sorting:'',
      SortDirection:''
  }
  } 
}
    
   

      handleFirstName(e) {
        let value = e.target.value;
        this.setState( prevState => ({ values : 
             {...prevState.values, firstName: value
             }
           }) )
           let object = {
            Rating: this.props.values.Rating,
            Fornavn: value,
            Etternavn: this.props.values.Etternavn,
            Født: this.props.values.Født,
            Sorting: this.props.values.Sorting,
            SortDirection:this.props.values.SortDirection
           }
        this.props.dispatch(SearchSuccess(object))
       }
    
       handleLastName(e) {
        let value = e.target.value;
        //return value;
        this.setState( prevState => ({ values : 
             {...prevState.values, lastName: value
             }
           }))
           let object = {
            Rating: this.props.values.Rating,
            Fornavn: this.props.values.Fornavn,
            Etternavn: value,
            Født: this.props.values.Født,
            Sorting: this.props.values.Sorting,
            SortDirection:this.props.values.SortDirection
           }
        this.props.dispatch(SearchSuccess(object))
       }
    
       handleYear(e) {
        let value = e.target.value;
        
        this.setState( prevState => ({ values : 
             {...prevState.values, year: value
             }
           }))
           let object = {
            Rating: this.props.values.Rating,
            Fornavn: this.props.values.Fornavn,
            Etternavn: this.props.values.Etternavn,
            Født: value,
            Sorting: this.props.values.Sorting,
            SortDirection:this.props.values.SortDirection
           }
        this.props.dispatch(SearchSuccess(object))
       }
    
       handleRating(e) {
        let value = e.target.value;
        this.setState( prevState => ({ values : 
             {...prevState.values, rating: value
             }
           }))

           let object = {
            Rating: value,
            Fornavn: this.props.values.Fornavn,
            Etternavn: this.props.values.Etternavn,
            Født: this.props.values.Født,
            Sorting: this.props.values.Sorting,
            SortDirection:this.props.values.SortDirection
           }
        this.props.dispatch(SearchSuccess(object))
       }

       handleSorting(e) {
        let value = e.target.value;
        this.setState( prevState => ({ values : 
          {...prevState.values, Sorting: value
          }
        }))
       

           let object = {
            Rating: this.props.values.Rating,
            Fornavn: this.props.values.Fornavn,
            Etternavn: this.props.values.Etternavn,
            Født: this.props.values.Født,
            Sorting: value,
            SortDirection:this.props.values.SortDirection
           }
        this.props.dispatch(SearchSuccess(object))
       }

       handleSortDirection(e) {
        let value = e.target.value;
        this.setState( prevState => ({ values : 
          {...prevState.values, SortDirection: value
          }
        }))

           let object = {
            Rating: this.props.values.Rating,
            Fornavn: this.props.values.Fornavn,
            Etternavn: this.props.values.Etternavn,
            Født: this.props.values.Født,
            Sorting: this.props.values.Sorting,
            SortDirection:value
           }
        this.props.dispatch(SearchSuccess(object))
       }
   
    
      render() {
       
        
       
         return (
          
            <div className="search">
              <p className='searchHead'>SEARCH FOR PERSON</p>
              <img src={searchLogo} className="search-logo" alt="logo"/>
                <TextField
                className={'searchRating'}
                id="Rating"
                label="Rating"
                value={this.state.values.rating}
                className="searchField"
                onChange={this.handleRating}
                margin="normal"
                />
                <TextField
                className={'searchFirstName'}
                id="Fornavn"
                label="Fornavn"
                value={this.state.values.firstName}
                className="searchField"
                onChange={this.handleFirstName}
                margin="normal"
                />
                <TextField
                className={'searchLastName'}
                id="Etternavn"
                label="Etternavn"
                value={this.state.values.lastName}
                className="searchField"
                onChange={this.handleLastName}
                margin="normal"
                />
                <TextField
                className={'searchYear'}
                id="Født"
                label="Født"
                value={this.state.values.year}
                className="searchField"
                onChange={this.handleYear}
                margin="normal"/>
                <Select 
                className={'searchSorting'}
                name={'Sorting'}
                options = {["rating","firstName", "lastName",  "year"]} 
                value = {this.state.values.Sorting}
                placeholder = {'Sorting'}
                handleChange = {this.handleSorting}
                /> 
                <Select 
                className={'searchSortDirection'}
                name={'SortDirection'}
                options = {["asc","desc"]} 
                value = {this.state.values.SortDirection}
                placeholder = {'SortDirection'}
                handleChange = {this.handleSortDirection}
                /> 
            </div>
         )
     }
   }
   
   
   const mapStateToProps = state => ({
     values: state.values.values
   })

   export default connect(mapStateToProps)(Search)