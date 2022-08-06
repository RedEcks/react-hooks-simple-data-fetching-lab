// create your App component here
import React, { useState, useEffect } from "react";

function App(){

    const [doggo,setdoggo]=useState([]);
    const [isLoaded,setIsLoaded]=useState([]);

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res)=>res.json())
            .then((data)=>{
                setdoggo(data.message)
                setIsLoaded(true)
            })

    }, []);
    
    if(!isLoaded){ return<p>Loading...</p>}

    return (<img src={doggo} alt="" height="800" width="800"/>)

}

export default App;