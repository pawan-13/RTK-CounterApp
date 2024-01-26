import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {increment,decrement} from '../Redux-Toolkit/features/counter/counterSlice';
import '../App.css';

const Counter = () => {
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch();
  
  return (
    <div className='App mt-5'>
      <h2 className="text-3xl text-black mb-3">This is playlist of redux</h2>
      <h2 className="text-2xl text-grey-700 mb-3">Count is : {count}</h2>
      <div className="flex flex-row gap-4 justify-center">
        <button className="border-solid border-2 border-red-600 px-5 py-2 text-gray-500 rounded-md" onClick={()=>dispatch(increment())}>Increment</button>
        <button className="border-solid border-2 border-red-600 text-gray-500 px-5 py-2 rounded-md" onClick={()=>dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}
export default Counter;