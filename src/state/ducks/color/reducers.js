import types from "./types";

const colorReducer = (state = {color: ''}, action) => {

  switch (action.type) {
    case types.CHANGE_COLOR:
      return {
        ...state,
        color: action.payload
      };
      break;

    default:
      return state;
      break;
  }
};

export default colorReducer;
