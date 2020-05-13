import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Greeting from './Components/Greeting';
import FormLogin from './Components/FormLogin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting
          name="andrey"
          age={27}
        />
        <Button
          type="button"
          variant="primary"
        >
          Test
        </Button>
        {/* <FormLogin /> */}
      </header>
    </div>
  );
}

export default App;
