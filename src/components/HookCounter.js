import React,{useState} from 'react';

function HookCounter(){

const initialCount=0;
const[count,setCount]=useState(initialCount)

    return(
        <div>
            <button onClick={()=> setCount(count+1)}>Count-{count}</button> 
        </div>
    )
}

export default HookCounter;