import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setlogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const {setlogin} = settingsSlice.actions;

export default settingsSlice.reducer;
