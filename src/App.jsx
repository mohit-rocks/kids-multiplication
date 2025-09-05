import { useState } from 'react'
import './App.css'
import Header from "./Components/Header.jsx";
import ProgressBar from "./Components/ProgressBar.jsx";
import Question from "./Components/Question.jsx";
import Answer from "./Components/Answer.jsx";
import Statistics from "./Components/Statistics.jsx";
import ControlButtons from "./Components/ControlButtons.jsx";
import {Provider} from "react-redux";
import numberStore from './store/numberStore.jsx';

function App() {

  // Generate number 1 and number 2.
  const [number1, number2] = [1, 2].map(() => Math.floor(Math.random() * 6) + 1);
  const correctAnswer = number1 * number2;

  return (
    <>
      <Provider store={numberStore}>
        <div className={"quiz-container"}>
          <Header>

          </Header>
          <ProgressBar>

          </ProgressBar>
          <Question number1={number1} number2={number2}>

          </Question>
          <Answer correctAnswer={correctAnswer}></Answer>

          <ControlButtons></ControlButtons>
          <Statistics>

          </Statistics>
        </div>
      </Provider>
    </>
  )
}

export default App
