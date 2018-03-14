import types from './types';

export const endGame = color => ({
  type: types.ENDED,
  color
});

export default {
  endGame
};
