import types from "./types";

const gameReducer = (state = {ended: false}, action) => {

  switch (action.type) {
    case types.ENDED:
      return {
        ...state,
        ended: true
      };

    default:
      return state;
  }
};

export default gameReducer;
