import { configureStore, createSlice } from '@reduxjs/toolkit';
import LevelMapper from "../utilities/levelMapper.js";
import getRandomNumber from '../utilities/math.jsx'

const numberSlice = createSlice({
  name: 'counter',
  initialState: {
    number1: 0,
    number2: 0,
    answer: 0,
    level: 1
  },
  reducers: {
    setNumbers: (state) => {
      const [min, max] = LevelMapper.get(state.level);
      state.number1 = getRandomNumber(min, max);
      state.number2 = Math.floor(Math.random() * 10) + 1
    },
    setAnswer: (state) => { state.answer = state.number1 * state.number2 },
    setLevel: (state, action) => {state.level = action.payload.level},
    reset: (state) => {
      state.number1 = Math.floor(Math.random() * 6) + 1;
      state.number2 = Math.floor(Math.random() * 10) + 1;
      state.answer = state.number1 * state.number2;
    }
  }
});

const initialStatistics = {
  right: 0,
  wrong: 0,
};
const savedStatistics = localStorage.getItem("gameStats");
if (savedStatistics) {
  Object.assign(initialStatistics, JSON.parse(savedStatistics));
}

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: initialStatistics,
  reducers: {
    setRight: (state) => {
      state.right += 1;
    },
    setWrong: (state) => {
      state.wrong += 1;
    },
    resetStatistics: (state) => {
      state.right = 0;
      state.wrong = 0;
    }
  }
});

export const { setNumbers, setAnswer, reset, setLevel } = numberSlice.actions;
export const { setRight, setWrong, resetStatistics } = statisticsSlice.actions;

// Create store
const store = configureStore({
  reducer: {
    counter: numberSlice.reducer,
    statistics: statisticsSlice.reducer
  }
});

store.subscribe(() => {
  localStorage.setItem("gameStats", JSON.stringify(store.getState().statistics));
});

export default store;
