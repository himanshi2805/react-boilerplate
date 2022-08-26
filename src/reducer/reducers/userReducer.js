import { USER, SET_USER } from '../actions/keys';

const INIT_STATE = {
  user: '',
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
