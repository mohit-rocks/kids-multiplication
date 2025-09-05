import React, {useState, useRef} from 'react';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {reset, setLevel, setNumbers} from '../store/store.jsx';

ControlButtons.propTypes = {

};

function ControlButtons({props}) {
  const dispatch = useDispatch();
  const {level: level} = useSelector(state => state.counter)

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

  function nextLevel() {
    const newLevel = level+1;
    dispatch(setLevel({level: newLevel}));
    dispatch(setNumbers());
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
        <button className="btn btn-secondary" onClick={handleReset}>Next</button>
        <button className="btn btn-primary" onClick={nextLevel}>Next Level</button>
      </div>
    </>
  );
}

export default ControlButtons;
