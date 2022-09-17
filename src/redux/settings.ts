import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  sidebar: false,
  audioPlayer: false,
  modal: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
    setAudioPlayer: (state, action) => {
      state.audioPlayer = action.payload;
    },
    setModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export const {setSidebar, setAudioPlayer, setModal} = settingsSlice.actions;

export default settingsSlice.reducer;
