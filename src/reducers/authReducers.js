import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGN_OUT,
} from '../actions/types';
import setAuthToken from '../utils/setAuthToken';

const INITIAL_STATE = {
  user: {},
  authenticated: false,
  errorMessage: {},
  loading: false,
};

export default function (state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case AUTH_LOADING:
      return {
        ...state,
        errorMessage: {},
        loading: true,
      };
    case AUTH_USER:
      return {
        ...state,
        user: actions.payload,
        errorMessage: {},
        loading: false,
      };
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: actions.payload,
        loading: false,
      };
    case LOGIN_SUCCESS:
      setAuthToken(actions.payload.access || undefined);
      return {
        ...state,
        authenticated: true,
        errorMessage: {},
        loading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        errorMessage: actions.payload,
        loading: false,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: {},
        authenticated: false,
        errorMessage: {},
        loading: false,
      };
    default:
      return state;
  }
}
