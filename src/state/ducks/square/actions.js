import types from './types';

export const colored = (color, id) => ({
  type: types.COLORED,
  color,
  id
});

export default {
  colored
};
