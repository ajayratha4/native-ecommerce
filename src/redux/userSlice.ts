import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsersData: state => {
      state.loading = false;
    },
  },
});

export const {getUsersData} = userSlice.actions;

export default userSlice.reducer;
