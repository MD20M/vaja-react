import { useEffect, useRef, useState } from 'react';
import { Temp } from './Temp';
export function Frag(){
    const [tekst, setTekst] = useState(false);
    const [response, setResponse] = useState(null);

    const reference = useRef(0);


    useEffect(()=>{
      fetch("http://127.0.0.1:5000/books").then(y=>y.json()).then(x=>{setResponse(x);console.log(x)}).catch(e=>{console.log(e)});
    },[])

    return(
      <>
        <div>
            <p>{JSON.stringify(response)}</p>
            <input type={"text"} ref={reference} value={reference.current.value} />
            <button onClick={(e)=>{console.log(reference.current.value); setTekst(!tekst)}}>Klikni!</button>
            {tekst ? <Temp props={reference.current.value}/> : console.log("")}
        </div>
      </>
    )
  }