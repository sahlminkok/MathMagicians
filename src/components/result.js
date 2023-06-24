import React from 'react';
import PropTypes from 'prop-types';

function Result({ result }) {
  return (
    <div className="result darkGray">{result}</div>
  );
}

Result.propTypes = {
  result: PropTypes.string,
};

Result.defaultProps = {
  result: '',
};

export default Result;
