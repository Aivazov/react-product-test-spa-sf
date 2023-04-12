import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import filterSlice from './filterSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    filter: filterSlice,
  },
});

export default store;
