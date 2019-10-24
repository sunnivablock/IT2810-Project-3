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
import Search from './components/search2'
import Button from './components/Button';


class App extends Component {
  constructor(props){
    super(props);
    this.shouldComponentRender=this.shouldComponentRender.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.fire= this.fire.bind(this);
    this.state = {
      
      values:{
      rating: '',
      firstName: '',
      lastName: '',
      year: '',
      Sorting:"firstName",
      SortDirection:"asc"

  } }
  }

  generateURLQuery = () => {
    console.log(this.state.values.Sorting)
    return "/api/persons?" + ((!this.state.values.firstName) ? '' : `&firstName=${this.state.values.firstName}`)+ 
        ((!this.state.values.lastName) ? '' : `&lastName=${this.state.values.lastName}`) +
        ((!this.state.values.rating) ? '' : `&rating=${this.state.values.rating}`) +
        ((!this.state.values.year) ? '' : `&year=${this.state.values.year}`)+
        ((!this.state.values.Sorting) ? '' : `&sort=${this.state.values.Sorting}`)+
        ((this.state.values.SortDirection === 'asc') ? '&sortAsc=True' : '');
        
};


  componentDidMount(){
    const {fetchActors}=this.props;
    fetchActors(this.generateURLQuery())
    
  }

  shouldComponentRender(){
      if(this.pending === false) return false;
      return true;
  }

  fire() {
    const {fetchActors}=this.props;
    fetchActors(this.generateURLQuery())
  }

   handleButtonClick() {
    // current=this.state.values
     
     console.log(this.props.values)
      this.setState({values:{firstName: this.props.values.Fornavn, 
        lastName:this.props.values.Etternavn, year:this.props.values.Født,
        rating:this.props.values.Rating, Sorting:this.props.values.Sorting,
        SortDirection:this.props.values.SortDirection}},this.fire)
        
        
       
   }

  render() {
    const { error, fetchActors} = this.props;
     if(!this.shouldComponentRender()) return (<div>Appen laster ikke</div>)
     getActors2()
      return (
        getHotList(),
          <div>
              {error && <span >{error}</span>}
              <div className="App">
                  <Header/>
                  <div className="mainContent">
                    <Search/>
                     <Button 
                      title = "Knapp"
                      type = {'button' }
                      action={this.handleButtonClick}
                      /> 
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