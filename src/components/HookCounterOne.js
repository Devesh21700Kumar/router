import React,{useState,useEffect} from 'react';

function HookCounterOne(){
const initialCount=0;
const[count,setCount]=useState(initialCount)

useEffect(()=>{
    document.title=`Clicked ${count} times`
})

    return(
        <div>
            <button onClick={()=> setCount(count+1)}>Count-{count}</button> 
        </div>
    )
}

export default HookCounterOne;