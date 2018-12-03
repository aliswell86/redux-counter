import React from 'react';
import PropTypes from 'prop-types';

const CounterList = ({counters}) => {
  return (
    <div />
  )
};

CounterList.propTypes = {
  counters: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    number: PropTypes.number
  }))
};

CounterList.defaultProps = {
  counters: []
};

export default CounterList;
