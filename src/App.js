import React from 'react';
import logo from './brad.png';
import './App.css';
import Table from './components/table'
import Header from './components/header'
import {useEffect} from 'react'



function App() {
    useEffect( () => {fetch("/actors/")
    .then(function(response) {
      return response.json();
    }).then(data => console.log(data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      
        <div className="table1">
          <Table/>
        </div>
      </header>
      
    </div>
  );
}

export default App;
