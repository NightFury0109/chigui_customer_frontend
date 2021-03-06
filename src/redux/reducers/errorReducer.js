import { ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {};

function errorReducer(state = initialState, action) {
  switch (action.type) {
    case ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}

export default errorReducer;