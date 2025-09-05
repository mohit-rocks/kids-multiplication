import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";

Statistics.propTypes = {

};

function Statistics({props}) {
  const { right: right, wrong: wrong  } = useSelector(state => state.statistics);
  const accuracy = (right + wrong === 0) ? 0 : (right/(right + wrong))*100;
  return (
    <>
      <div className="stats">
        <div className="stat-item">
          <div className="stat-number">{right}</div>
          <div className="stat-label">Correct</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{wrong}</div>
          <div className="stat-label">Wrong</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{accuracy.toFixed(2)}%</div>
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
