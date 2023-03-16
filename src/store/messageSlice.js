import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const messageSlice = createSlice({
  name: 'messagesList',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
