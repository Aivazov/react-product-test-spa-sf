import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPages: 0,
};

const paginationSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setTotalPages(state) {},
  },
});

const { setTotalPages } = paginationSlice.actions;

export default paginationSlice.reducer;
