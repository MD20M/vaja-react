import { useEffect, useRef, useState } from 'react';
export function Nekaj(){
    const [tekst, setTekst] = useState(true);
    const tekst1 = "Nekaj 1";
    const tekst2 = "Nekaj 2";

    const reference = useRef(0);
    useEffect((e)=>{
      reference.current++;
    },[tekst])
    return(
      <>
        <div id="neke"> Tekst v Nekaj funkciji</div>
        <p>nekaj novega lala</p>
        <button onClick={(e)=>{setTekst(!tekst)}}> klikni me</button>
        <span>{tekst? tekst1 : tekst2}</span>
        <div>{reference.current}</div>
      </>
    )
  }