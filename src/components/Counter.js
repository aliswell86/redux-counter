import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.scss'; //_i
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Counter = ({index, number, color, onSetColor, onIncrement, onDecrement}) => (
  <div
    className={cx('Counter')}
    style={{backgroundColor:color}}
    onClick={() => onIncrement(index)}
    onDoubleClick={() => onSetColor(index)}
    onContextMenu={(e) => {
      e.preventDefault();
      onDecrement(index);
    }}>
    {number}
  </div>
);

Counter.propTypes = {
  index: PropTypes.number,
  number: PropTypes.number,
  color: PropTypes.string,
  onSetColor: PropTypes.func,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
};

Counter.defaultProps = {
  index: 0,
  number: 0,
  color: 'black',
  onSetColor: () => console.warn('onSetColor not defined'),
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined')
};

export default Counter;
