import React from 'react';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';


function App(){
  return(
    <div className='App'>
    <ClassCounterOne/>
    <HookCounterOne/>
    </div>
  )
}


export default App;












/*import {BrowserRouter,Route} from 'react-router-dom';

const P=()=>{
  return <div>Hell</div>;
};


const G=()=>{
  return <div>Heaven</div>;
};

const App=()=>{

  return (
    <div >
  <BrowserRouter>
<div>
  <Route path="/" exact component={P}/>
  <Route path="/p"  component={G}/>
  </div>
  </BrowserRouter>
    </div>
  );
  
}*/
