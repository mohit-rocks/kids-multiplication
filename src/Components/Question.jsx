import React from 'react';
import PropTypes from 'prop-types';

Question.propTypes = {
  number1: PropTypes.bigint.isRequired,
  number2: PropTypes.bigint.isRequired,
};

function Question({number1, number2}) {
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
