import React, {Component} from 'react';
//import logo from './brad.png';
import './App.css';
import Table from './components/table'
import Header from './components/header'
//import {useEffect} from 'react'

import getActors2 from './components/data.js';


import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchActorsAction from './components/fetchActors'
import {getActorsError, getActors, getActorsPending} from './reducers/reducer'
import fetchActors from './components/fetchActors';
import FormContainer from './components/FormContainer'
//import store from './index'



class App extends Component {
  constructor(props){
    super(props);
    console.log("hei")
    this.shouldComponentRender=this.shouldComponentRender.bind(this);
  }


  componentDidMount(){
    const {fetchActors}=this.props;
    fetchActors()
  }

  shouldComponentRender(){
      const {pending} = this.props;
      if(this.pending === false) return false;
      return true;
}



  render() {
    console.log("Starter")
      
    
      const { error, actors ,pending} = this.props;
      if(!this.shouldComponentRender()) return (<div>Appen laster ikke</div>)

      getActors2()

      return (
        console.log(actors),
          <div>
            <div className="test">
            {actors && actors.map(actor => <h1>{actor.firstName}</h1>)}
            </div>
              {error && <span >{error}</span>}
              <div className="App">
              <header className="App-header">
                <Header/>
                <div className="mainContent">
                  <div className="table1">
                    <Table/>
                  </div>
                  <div className="formContainer">
                    <FormContainer/>
                  </div>
                </div>
              </header>
            </div>
              
          </div>
      )
  }
}


const mapStateToProps = state => ({
  actors: state.actors.actors,
  error: getActorsError(state),
//actors: state.actors,
  pending: getActorsPending(state)
 
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchActors: fetchActorsAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App );




/*function App() {

  
    
  



  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Actors/>
        <div className="table1">
          <Table/>
        </div>
        <div className="formContainer">
          <FormContainer/>
        </div>
      </div>
    </div>
  );
}*/

//export default App;
