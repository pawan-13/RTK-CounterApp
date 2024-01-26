import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    value : '0'
}

export const counterSlice = createSlice({
    name : 'counter',
    initialValue,
    reducers : {
        increment : (state) => {
           return state.value = state.value + 1;
        },
        decrement : (state) => {
            return state.value = state.value - 1;
        }
    }
});

export const {increment,decrement} = counterSlice.actions
export default counterSlice.reducer