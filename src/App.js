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
import fetchTopActorsAction from './components/fetchTopActors'
import {getTopActorsError, getTopActorsPending, getTopActors} from './reducers/reducer'



class App extends Component {
  constructor(props){
    super(props);
    this.shouldComponentRender=this.shouldComponentRender.bind(this);
    //Need to make input-fields for these values
    this.state={
      Sorting:"firstName",
      SortDirection:"asc",
      values:{
        Rating:"", 
        Fornavn:"a",
        Etternavn:"",
        Født:"",
      }
    }
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
    const {fetchTopActors}=this.props;
    fetchTopActors('/api/persons?sort=rating')
    
  }



  shouldComponentRender(){
      if(this.pending === false) return false;
      return true;
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


const mapStateToProps = state => {
  console.log(state)
  return {
  actors: state.actors.actors,
  topactors: state.topactors.topactors,
  error: getActorsError(state),
  pending: getActorsPending(state)
 
}}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchActors: fetchActorsAction,
  fetchTopActors: fetchTopActorsAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
