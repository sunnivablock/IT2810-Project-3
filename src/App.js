import React, {Component} from 'react';
import logo from './brad.png';
import './App.css';
import Table from './components/table'
import Header from './components/header'
import {useEffect} from 'react'
import Actors from './components/actors'
import PropTypes from 'prop-types';
import { connect ,ReactReduxContext} from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchActorsAction from './components/actors'
import {getActorsError, getActors, getActorsPending} from './reducers/index'



class App extends Component {
  constructor(props) {
      super(props);

      this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
      const {fetchActors} = this.props;
      fetchActors();
  }

  shouldComponentRender() {
      const {pending} = this.props;
      if(this.pending === false) return false;
      // more tests
      return true;
  }

  render() {
      const {actors, error, pending} = this.props;

      

      return (
          <div>
              {error && <span >{error}</span>}
              <Actors actors={actors} />
          </div>
      )
  }
}


const mapStateToProps = state => ({
  error: getActorsError(state),
  products: getActors(state),
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

  
    
  

    useEffect( () => {fetch("/actors/")
    .then(function(response) {
      return response.json();
    }).then(data => console.log(data))
  }, [])


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
}

export default App; */
