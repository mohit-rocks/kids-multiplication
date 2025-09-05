import React from 'react';
import {useSelector} from "react-redux";

Statistics.propTypes = {

};

function Statistics({props}) {
  const statistics = useSelector(state => state.statistics);
  const { level } = useSelector(state => state.counter);

  // Get current level statistics or fallback to 0 if not found.
  const currentStats = statistics[level] || { right: 0, wrong: 0 };
  const rightCount = currentStats.right;
  const wrongCount = currentStats.wrong;
  const accuracy = (rightCount + wrongCount === 0) ? 0 : (rightCount/(rightCount + wrongCount)) * 100;

  return (
    <>
      <div className="stats">
        <div className="stat-item">
          <div className="stat-number">{rightCount}</div>
          <div className="stat-label">Correct</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{wrongCount}</div>
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
