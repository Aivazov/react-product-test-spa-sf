import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import filterSlice from './filterSlice';
import paginationSlice from './paginationSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    filter: filterSlice,
    pagination: paginationSlice,
  },
});

export default store;
