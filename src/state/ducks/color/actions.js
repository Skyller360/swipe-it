import types from './types';

export const changeColor = color => ({
  type: types.CHANGE_COLOR,
  color
});

export default {
  changeColor
};
