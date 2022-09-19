import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  snackbar: {open: false, message: null},
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setlogin: (state, action) => {
      state.isLogin = action.payload;
    },
    openAlertSnackbar: (state, action) => {
      if (action.payload) {
        state.snackbar = action.payload;
      } else {
        state.snackbar = {open: false, message: null};
      }
    },
  },
});

export const {setlogin, openAlertSnackbar} = settingsSlice.actions;

export default settingsSlice.reducer;
