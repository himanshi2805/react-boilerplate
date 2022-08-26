import { SET_USER } from './keys';

export const setUser = user => ({
  type: SET_USER,
  payload: user,
});
