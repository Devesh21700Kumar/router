import React,{useState} from 'react';

function HookCounterThree(){

const initialCount=0;
const[name,setName]=useState({firstName:'',lastName:''})
//Using ... will make us copy the array and help us overrite a specific part
    return(
        <form>
            <input type='text'
             value ={name.firstName} 
             onChange={e=>setName({...name,firstName:e.target.value})}/>
            
            <input type='text'
             value ={name.lastName} 
             onChange={e=>setName({...name,lastName:e.target.value})}/>
             

            <h2>Your first name is={name.firstName}</h2> 
            <h2>Your last name is={name.lastName}</h2> 
        </form>
    )
}

export default HookCounterThree;