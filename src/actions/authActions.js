import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_USER, LOGIN_ERROR, LOGIN_SUCCESS, SIGN_OUT
} from './types';

import {api} from '../services/Api';
import setAuthToken from '../utils/setAuthToken';

export const loadingMessage = (type = AUTH_LOADING) => ({
  type,
});


export const failureMessage = (error, type = AUTH_ERROR) => ({
  type,
  payload: error,
});

export const successMessage = (data, type = AUTH_USER) => {
  return {
    type,
    payload: data,
  };
};

export const signUp = formProps => (dispatch) => {
  dispatch(loadingMessage());
  return api.user.create(formProps)
      .then((response) => {
        dispatch(successMessage(response.data));
      })
      .catch((error) => {
        dispatch(failureMessage(error.response.data));
      });
};

export const signIn = formProps => (dispatch) => {
  dispatch(loadingMessage());
  return api.user.login(formProps)
      .then((response) => {
        dispatch(successMessage(response.data, LOGIN_SUCCESS));
      })
      .catch((error) => {
        dispatch(failureMessage(error.response.data, LOGIN_ERROR));
      });
};

export const signOut = () => (dispatch) => {
  setAuthToken();
  dispatch(loadingMessage());
  dispatch(successMessage({}, SIGN_OUT));

};
