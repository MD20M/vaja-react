import logo from './source_files/logo.svg';
import './App.css';
import { useState } from 'react';
import { Nekaj } from './Fragmenti/Nekaj';
import { Frag } from './Fragmenti/Frag';


function Nekaj2(props){

  return(
      <p>{props["props"]%10===0 ? <p>Nekaj {props["props"]}x in DELJIVO S 10!!!!</p> : <p>Nekaj {props["props"]}x</p>}</p>  
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
        <Nekaj></Nekaj>
        <button onClick={(e)=>setNekaj(getNekaj + 1)}>Button</button>
        <Frag></Frag>
        <Nekaj2 props={getNekaj}></Nekaj2>
      </header>
    </div>
  );
}

export default App;
