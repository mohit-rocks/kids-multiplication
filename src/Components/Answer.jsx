import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import reschuffle from "../utilities/reschuffle.jsx";
import { setRight, setWrong } from '../store/store.jsx';

function Answer() {
  const dispatch = useDispatch();
  const { answer: correctAnswer } = useSelector(state => state.counter);
  const { level } = useSelector(state => state.counter);

  // Generate number options.
  let results = [correctAnswer];
  while (results.length < 4) {
    const num = Math.floor(Math.random() * 99) + 1;
    if (num !== correctAnswer && !results.includes(num)) {
      results.push(num);
    }
  }
  results = reschuffle(results);

  function calculateResult(event) {
    const clickedValue = parseInt(event.target.textContent);
    const button = event.target;
    const allButtons = document.querySelectorAll('.answer-btn');

    if (clickedValue === correctAnswer) {
      button.className = "answer-btn correct";

      // Dispatch the redux event to update right questions count.
      // See store.jsx for the exposed functions.
      dispatch(setRight({level: level}))
    }
    else {
      button.className = "answer-btn incorrect";
      // Dispatch the redux event to update wrong questions count.
      dispatch(setWrong({level: level}))
      // Get the other elements and highlight the correct element.
      allButtons.forEach((btn) => {
        if (parseInt(btn.textContent) === correctAnswer) {
          btn.className = "answer-btn correct";
        }
      })
    }
    allButtons.forEach((btn) => btn.disabled = true);
  }

  return (
    <>
      <div className="answers-grid">
        {
          results.map((number, index) => {
            return <button key={`${correctAnswer}-${index}`} className="answer-btn" id={index} onClick={calculateResult}>{number}</button>
          })
        }
      </div>
    </>
  );
}

export default Answer;
