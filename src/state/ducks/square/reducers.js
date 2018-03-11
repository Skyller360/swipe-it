import types from "./types";

const squareReducer = (state = {ids: []}, action) => {

  switch (action.type) {
    case types.COLORED:
      return {
        ...state,
        ids: [
          ...state.ids,
          action.payload
        ]
      };
      break;

    default:
      return state;
      break;
  }
};

export default squareReducer;
