/* 액션 생성 함수 */
import * as types from './ActionTypes';

export const create = (color) => ({
  type: types.CREATE,
  color
});

export const remove = () => ({
  type: types.REMOVE
});

export const increment = (index) => {
  return {
    type: types.INCREMENT,
    index
  };
};

export const decrement = (index) => ({
  type: types.DECREMENT,
  index
});

export const setColor = ({color, index}) => {
  return {
    type: types.SET_COLOR,
    color,
    index
  };
};
