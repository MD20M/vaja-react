import logo from './source_files/logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function Nekaj(props){

  console.log(props)

  return(
    <p>Nekaj {props[0]} x</p>
  );
}

function App() {
  const [getNekaj, setNekaj] = useState(1); 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Nekaj props={getNekaj}></Nekaj>
        <button onClick={(e)=>setNekaj(getNekaj + 1)}>Button</button>
      </header>
    </div>
  );
}

export default App;
