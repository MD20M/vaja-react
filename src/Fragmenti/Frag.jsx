import { useEffect, useRef, useState } from 'react';
export function Frag(){
    const [tekst, setTekst] = useState(false);

    const reference = useRef(0);

    useEffect((e)=>{
 
    },[tekst])

    return(
      <>
        <div>
            <input type={"text"} ref={reference} value={reference.current.value} />
            <button onClick={(e)=>{console.log(reference.current.value)}}>Klikni!</button>
        </div>
      </>
    )
  }