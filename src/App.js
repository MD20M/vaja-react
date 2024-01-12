import logo from './source_files/logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function Nekaj(){
  const [tekst, setTekst] = useState(true);
  const tekst1 = "Nekaj 1";
  const tekst2 = "Nekaj 2";
  return(
    <>
      <div id="neke"> Tekst v Nekaj funkciji</div>
      <p>nekaj novega lala</p>
      <button onClick={(e)=>{setTekst(!tekst)}}> klikni me</button>
      <span>{tekst? tekst1 : tekst2}</span>
    </>
  )
}

function Nekaj2(props){

  return(
      <p>{props["props"]%10==0 ? <p>Nekaj {props["props"]}x in DELJIVO S 10!!!!</p> : <p>Nekaj {props["props"]}x</p>}</p>  
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
        <Nekaj2 props={getNekaj}></Nekaj2>
        <Nekaj></Nekaj>
        <button onClick={(e)=>setNekaj(getNekaj + 1)}>Button</button>
      </header>
    </div>
  );
}

export default App;
