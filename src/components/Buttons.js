import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss'; //_i
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Buttons = ({onCreate, onRemove}) => {
  return (
    <div className={cx('Buttons')}>
      <div className={cx('btn', 'add')} onClick={onCreate}>생성</div>
      <div className={cx('btn', 'remove')} onClick={onRemove}>제거</div>
    </div>
  )
};

Buttons.propTypes = {
  onCreate: PropTypes.func,
  onRemove: PropTypes.func
};

Buttons.defaultProps = {
  onCreate: () => console.warn('onCreate not defined'),
  onRemove: () => console.warn('onRemove not defined')
};

export default Buttons;
