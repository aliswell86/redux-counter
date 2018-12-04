import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import styles from './CounterList.scss'; //_i
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {
  const counterList = counters.map(
    (counter, i) => (
      <Counter
        key={i}
        index={i}
        {...counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onSetColor={onSetColor}/>
    )
  )

  return (
    <div className={cx('CounterList')}>
      {counterList}
    </div>
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
