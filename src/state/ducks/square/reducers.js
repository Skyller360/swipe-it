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

    default:
      return state;
  }
};

export default squareReducer;
