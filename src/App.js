import React from 'react';
import logo from './brad.png';
import './App.css';
import Table from './components/table'
import Header from './components/header'

/*const express = require('express');
const app = express();
const apiPort = 8080;*/



function App() {
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


/*app.listen(apiPort, () => console.log('Server running on port ${apiPort}'));*/
