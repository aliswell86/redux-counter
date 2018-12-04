import * as types from '../actions/ActionTypes';

const initalStates = {
  counters: [{
    color: 'black',
    number: 0
  }]
};

function counter(state = initalStates, action) {
  const {counters} = state;

  switch(action.type) {
    case types.CREATE:
    return {
      counters: [
        ...counters,
        {
          color: action.color,
          number: 0
        }
      ]
    };

    case types.REMOVE:
    return {
      counters: counters.slice(0, counters.length - 1)
    };

    case types.INCREMENT:
    return {
      counters: [
        ...counters.slice(0, action.index), //선택한 오브젝트 앞부분
        {
          ...counters[action.index], //선택한 오브젝트
          number: counters[action.index].number + 1 //오브젝트내 필요값 변경
        },
        ...counters.slice(action.index + 1, counters.length) //선택한 오브젝트 뒷부분
      ]
    };

    case types.DECREMENT:
    return {
      counters: [
        ...counters.slice(0, action.index),
        {
          ...counters[action.index],
          number: counters[action.index].number - 1
        },
        ...counters.slice(action.index + 1, counters.length)
      ]
    }

    case types.SET_COLOR:
    return {
      counters: [
        ...counters.slice(0, action.index),
        {
          ...counters[action.index],
          color: action.color
        },
        ...counters.slice(action.index + 1, counters.length)
      ]
    }

    default:
      return state;
  }
}

export default counter;
