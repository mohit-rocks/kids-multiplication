import React from 'react';
import PropTypes from 'prop-types';

ControlButtons.propTypes = {

};

function ControlButtons({props}) {
  return (
    <>
      <div className="controls">
        <button className="btn btn-audio">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path
              d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
          Hear It
        </button>
        <button className="btn btn-secondary">Skip</button>
        <button className="btn btn-primary">Next Level</button>
      </div>
    </>
  );
}

export default ControlButtons;
