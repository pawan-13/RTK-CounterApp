import React from 'react';
import './App.css';
import Counter from './Redux-Toolkit/Counter';
// import Index from './practice/Index';
// import {incNumber, decNumber} from './action/index.js';
// import { useSelector, useDispatch } from 'react-redux';


// const App = () => {
//   const myState = useSelector((state) => state.changeTheNumber);
//   const dispatch = useDispatch();
//   let initialValue = 0;
//   const reducer = (state, action) => {
//     if(action.type==="Increment"){
//       return state+1;
//     }
//     if(action.type==="Decrement"){
//       return state-1;
//     }
//   }
//    const[state, dispatch] = useReducer(reducer, initialValue);
//   return (
//     <>
//       <div className='App'>
//         <h2>Hello this is redux Toolkit project</h2>
//         <h2>Count is : {state}</h2> 
//         //dispatch is used for trigger the event action.
//         <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
//         <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
//         <Index/>
//       </div>
//     </>
//   )
//   return(
//     <>
//      <div className='App'>
//         <h2>This is playlist of redux</h2>
//         <h2>Count is : {myState}</h2>
//         <button onClick={()=>dispatch(incNumber())}>Increment</button>
//         <button onClick={()=>dispatch(decNumber())}>Decrement</button>
//      </div>
//     </>
//   )
// } 
// export default App;

const App = () => {
  return(
    <>
       <Counter/>
    </>
  )
}

export default App;
