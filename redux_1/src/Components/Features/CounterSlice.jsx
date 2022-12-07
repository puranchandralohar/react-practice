import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value:0,
}


export const CounterSlice = createSlice({
    name:"counter",
    initialState:initialState,
    reducers:{
        incrementing:(state)=>{
            state.value+=1;
        },
        decrementing:(state)=>{
            state.value-=1;
        }
    }
})

export const { incrementing, decrementing}  = CounterSlice.actions

export default CounterSlice.reducer