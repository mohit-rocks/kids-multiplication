import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";

ProgressBar.propTypes = {

};

function ProgressBar(props) {
  const statistics = useSelector(state => state.statistics)
  const progress = ((statistics.right + statistics.wrong)/20)*100;
  return (
    <>
      <div className="progress-bar">
        <div className="progress-fill" style={{'width': `${progress}%`}}></div>
      </div>
    </>
  );
}

export default ProgressBar;
