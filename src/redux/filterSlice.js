import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue: (state) => {},
  },
});


export default searchValueSlice.reducer;