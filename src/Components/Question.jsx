import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Question() {
  const dispatch = useDispatch();
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
