import React from 'react';
import PropTypes from 'prop-types';

ProgressBar.propTypes = {

};

function ProgressBar(props) {
  return (
    <>
      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
    </>
  );
}

export default ProgressBar;
