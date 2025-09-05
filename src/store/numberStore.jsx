import { configureStore, createSlice } from '@reduxjs/toolkit';

const numberSlice = createSlice({
  name: 'counter',
  initialState: {
    number1: 0,
    number2: 0,
    answer: 0
  },
  reducers: {
    setNumbers: (state) => {
      state.number1 = Math.floor(Math.random() * 6) + 1;
      state.number2 = Math.floor(Math.random() * 10) + 1
    },
    setAnswer: (state) => { state.answer = state.number1 * state.number2 },
    reset: (state) => {
      state.number1 = Math.floor(Math.random() * 6) + 1;
      state.number2 = Math.floor(Math.random() * 10) + 1
    }
  }
});

export const { setNumbers, setAnswer, reset } = numberSlice.actions;

// Create store
const numberStore = configureStore({
  reducer: {
    counter: numberSlice.reducer
  }
});

export default numberStore;
