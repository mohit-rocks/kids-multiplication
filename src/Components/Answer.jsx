import React from 'react';
import PropTypes from 'prop-types';
import reschuffle from "../utilities/reschuffle.jsx";

Answer.propTypes = {
  correctAnswer: PropTypes.number.isRequired
};

function Answer({correctAnswer}) {

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
    }
    else {
      button.className = "answer-btn incorrect";
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
            return <button key={index} className="answer-btn" id={index} onClick={calculateResult}>{number}</button>
          })
        }
      </div>
    </>
  );
}

export default Answer;
