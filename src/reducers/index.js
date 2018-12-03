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

    // case types.INCREMENT:
    // return {
    //   ...state,
    //   number: state.number + 1
    // };
    // case types.DECREMENT:
    // return {
    //   ...state,
    //   number: state.number - 1
    // };
    // case types.SET_COLOR:
    // return {
    //   ...state,
    //   color: action.color
    // };
    default:
      return state;
  }
}

export default counter;
