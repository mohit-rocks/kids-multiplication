import React, {useState, useRef} from 'react';
import {useDispatch, useSelector, useStore} from 'react-redux';
import { reset } from '../store/store.jsx';

ControlButtons.propTypes = {

};

function ControlButtons({props}) {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(reset());
  };

  function hearQuestion() {
    let text = document.getElementsByClassName('question-helper').item(0).textContent;
    text = text.replace('times', '')
    text = text + 'za';
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.voice = speechSynthesis.getVoices()[0];
    utterance.pitch = 1.3
    utterance.rate = 1
    speechSynthesis.speak(utterance);
  }

  return (
    <>
      <div className="controls">
        <button className="btn btn-audio" onClick={hearQuestion}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path
              d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
          Hear It
        </button>
        <button className="btn btn-secondary">Skip</button>
        <button className="btn btn-primary" onClick={handleReset}>Next Level</button>
      </div>
    </>
  );
}

export default ControlButtons;
