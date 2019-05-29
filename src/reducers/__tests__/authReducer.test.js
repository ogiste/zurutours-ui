import expect from 'expect';
import reducer from '../authReducers';
import {
  failureMessage,
  loadingMessage,
  successMessage,
} from '../../actions/authActions';


const INITIAL_STATE = {
  user: {},
  authenticated: '',
  errorMessage: {},
  loading: false,
};

const payload = {
  email: '',
  username: '',
};

describe('Testing AUTHREDUCER', () => {
  it('should return the initial state', () => {
    const state = reducer(INITIAL_STATE, {});
    expect(state).toEqual(INITIAL_STATE);
  });

  it('should handle LOADING_PROGRESS', () => {
    const loadingAction = loadingMessage();
    const state = reducer(INITIAL_STATE, loadingAction);
    const expectedState = {
      ...INITIAL_STATE,
      errorMessage: {},
      loading: true,
    };
    expect(state).toEqual(expectedState);
  });

  it('should handle AUTH_SUCCESS', () => {
    const authSuccessAction = successMessage(payload);
    const expectedState = {
      ...INITIAL_STATE,
      user: payload,
      errorMessage: {},
      loading: false,
    };
    const state = reducer(INITIAL_STATE, authSuccessAction);
    expect(state).toEqual(expectedState);
  });

  it('should handle AUTH_ERROR', () => {
    const error = {errors: {username: 'Username field is required.'}};
    const authErrorAction = failureMessage(error);
    const state = reducer(INITIAL_STATE, authErrorAction);
    const expectedState = {
      ...INITIAL_STATE,
      errorMessage: error,
      loading: false,
    };
    expect(state).toEqual(expectedState);
  });
});
