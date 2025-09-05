import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";

ProgressBar.propTypes = {

};

function ProgressBar(props) {
  const statistics = useSelector(state => state.statistics)
  const { level } = useSelector(state => state.counter)

  const rightCount = statistics[level].right ?? 0;
  const wrongCount = statistics[level].wrong ?? 0;
  const progress = ((rightCount + wrongCount)/20)*100;
  return (
    <>
      <div className="progress-bar">
        <div className="progress-fill" style={{'width': `${progress}%`}}></div>
      </div>
    </>
  );
}

export default ProgressBar;
