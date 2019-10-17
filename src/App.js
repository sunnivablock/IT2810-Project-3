import React from 'react';
import Table from './components/table';
import Header from './components/header';
import FormContainer from './components/FormContainer';
//import {useEffect} from 'react';



function App() {
    /*useEffect( () => {fetch("/persons/")
    .then(function(response) {
      return response.json();
    }).then(data => console.log(data))
  }, [])*/
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className="mainContent">
        <div className="table1">
          <Table/>
        </div>
        <div className="formContainer">
          <FormContainer/>
        </div>
      </div>
    </div>
  );
}

export default App;
