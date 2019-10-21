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
//var GraphContainer = require("./components/GraphContainer");


class App extends Component {
  constructor(props){
    super(props);
    this.shouldComponentRender=this.shouldComponentRender.bind(this);
    //this.fetchActors=this.fetchActors.bind(this);
    //this.testFunksjon=this.testFunksjon.bind(this);
  }

  componentDidMount(){
    const {fetchActors}=this.props;
    fetchActors('/api/persons/ratingDESC')
  }

  testFunksjon(url){
    const {fetchActors}=this.props;
    fetchActors(url)
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
        //fetchActors('/api/persons/ratingASC'),
        console.log(fetchActors.actors),
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


const mapStateToProps = state => ({
  actors: state.actors.actors,
  error: getActorsError(state),
  pending: getActorsPending(state)
 
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchActors: fetchActorsAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App );


//<button /*onChange={fetchActors('/api/persons/ratingDESC')}*/>Klikk</button>