import React, {Component} from 'react';
//import logo from './brad.png';
import './App.css';
import Table from './components/table'
import Header from './components/header'
//import {useEffect} from 'react'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchActorsAction from './components/fetchActors'
import {getActorsError, getActors, getActorsPending} from './reducers/reducer'
import fetchActors from './components/fetchActors';
//import store from './index'



class App extends Component {
  constructor(props){
    super(props);

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

/*
useEffect( () => {fetch("/actors/")
.then(function(response) {
  return response.json();
}).thendata => console.log(data))
}, [])*/
  

  render() {
    console.log("Starter")
      
      const { error, actors ,pending} = this.props;
      if(!this.shouldComponentRender()) return (<div>Appen laster ikke</div>)

      return (
          <div>
            {console.log(actors)}
              {error && <span >{error}</span>}
              <div className="App">
              <header className="App-header">
                <Header/>
                <div className="table1">
                  <Table/>
                </div>
              </header>
            </div>
              
          </div>
      )
  }
}


const mapStateToProps = state => ({

  error: getActorsError(state),
  actors: getActors(state),
  pending: getActorsPending(state)
  /*
  error: getActorsError(state),
  actors: getActors(state),
  pending: getActorsPending(state)*/
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
      </header>
      
    </div>
  );
}*/

//export default App;
