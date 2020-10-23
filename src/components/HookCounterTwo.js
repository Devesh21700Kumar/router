import React,{useState} from 'react';

function HookCounterTwo(){

const initialCount=0;
const[count,setCount]=useState(initialCount)

    return(
        <div>
         Count:{count}  
          <button onClick={()=> setCount(initialCount)}>RESET</button> 
          <button onClick={()=> setCount(count+1)}>PROFIT</button> 
          <button onClick={()=> setCount(count-1)}>LOSS</button> 
        </div>
    )
}

export default HookCounterTwo;