import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {resetStatistics} from "../store/store.jsx";

Footer.propTypes = {

};

function Footer(props) {
  const dispatch = useDispatch();

  function clearStatistics() {
    dispatch(resetStatistics())
  }

  return (
    <>
      <div className="controls">
        <button className="btn btn-secondary" onClick={clearStatistics}>Clear data and statistics</button>
      </div>
    </>
  );
}

export default Footer;
