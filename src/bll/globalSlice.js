import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    online: false,
  },
  reducers: {
    setOnline: (state, action) => {
      state.online = action.payload;
    },
  }
});

export const {setOnline,} = globalSlice.actions;

export default globalSlice.reducer;
