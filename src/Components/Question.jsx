import React from 'react';
import { useSelector } from 'react-redux';

function Question() {
  const { number1, number2 } = useSelector(state => state.counter);
  return (
    <>
      <div className="question-section pulse">
        <div className="question">{number1} × {number2} = ?</div>
        <div className="question-helper">What is {number1} times {number2}?</div>
      </div>
    </>
  );
}

export default Question;
