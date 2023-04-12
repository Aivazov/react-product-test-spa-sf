import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPages: 0,
  activePage: 0,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setTotalPages(state) {},
    incrementPage: (state) => {
      state.activePage += 1;
    },
    decrementPage: (state) => {
      state.activePage -= 1;
    },
  },
});

export const { setTotalPages, incrementPage, decrementPage } =
  paginationSlice.actions;

export default paginationSlice.reducer;
