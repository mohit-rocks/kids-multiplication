import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {

};

function Header({props}) {
  return (
    <>
      <div className="floating-emoji emoji-1">🧮</div>
      <div className="floating-emoji emoji-2">⭐</div>
      <div className="floating-emoji emoji-3">🎯</div>

      <div className="header">
        <h1 className="title">Multiplication Quiz</h1>

        <div className="level-info">
          <div className="level-badge">Level 3 - Table of 3</div>
          <div className="timer">
            <svg className="timer-icon" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
            2:45
          </div>
          <div className="score">Score: 850pts</div>
        </div>
      </div>
    </>
  );
}

export default Header;
