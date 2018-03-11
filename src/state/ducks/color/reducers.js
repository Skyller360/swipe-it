import types from "./types";
/* State shape
state: {
  todos: [],
  visibilityFilter: SHOW_ALL
}
*/

// this method can be confusing because it serves two purposes:
// 1 - it create a new todo
// 2 - it toggles the completed state of an existing todo
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
