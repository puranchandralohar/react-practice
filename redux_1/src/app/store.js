import { configureStore } from '@reduxjs/toolkit'
import  CounterReducers  from '../Components/Features/CounterSlice';

const store = configureStore({
  reducer: {
    counter: CounterReducers,
  },
})

export default store;