import api from '../../utils/api';
import { USER_LOADED, CLEAR_ERRORS, ERRORS, LOGIN_SUCCESS, AUTH_ERROR } from './types';

export const loadUser = () => async dispatch => {
  try {
    const res = await api.get('/users/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = newUser => async dispatch => {
  try {
    await api.post('/users/signup', newUser);

    window.location.href = "/";
    dispatch(loadUser());
    dispatch(clearErrors());
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data
    });
  }
};

// Login User
export const login = userData => async dispatch => {
  try {
    const res = await api.post('/users/signin', userData);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(clearErrors());
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data
    });
  }
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};