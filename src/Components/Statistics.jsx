import React from 'react';
import PropTypes from 'prop-types';

Statistics.propTypes = {

};

function Statistics({props}) {
  return (
    <>
      <div className="stats">
        <div className="stat-item">
          <div className="stat-number">12</div>
          <div className="stat-label">Correct</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">3</div>
          <div className="stat-label">Wrong</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">80%</div>
          <div className="stat-label">Accuracy</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">1.2s</div>
          <div className="stat-label">Avg Time</div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
