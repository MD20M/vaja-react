import { useEffect, useRef, useState } from 'react';
import { Temp } from './Temp';
export function Frag(){
    const [tekst, setTekst] = useState(false);

    const reference = useRef(0);

    useEffect((e)=>{
 
    },[tekst])

    return(
      <>
        <div>
            <input type={"text"} ref={reference} value={reference.current.value} />
            <button onClick={(e)=>{console.log(reference.current.value); setTekst(!tekst)}}>Klikni!</button>
            {tekst ? <Temp props={reference.current.value}/> : console.log("")}
        </div>
      </>
    )
  }