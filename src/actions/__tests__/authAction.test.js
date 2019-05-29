import expect from 'expect';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import {
  API_URL,
  api,
} from '../../services/Api';
import * as actions from '../authActions';
import {
  AUTH_ERROR,
  AUTH_USER,
  AUTH_LOADING,
} from '../types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

const payload = {
  email: '',
  username: '',
};

describe('User actions ', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
    store.clearActions();
  });

  it('render loading message action', () => {
    const loadingAction = actions.loadingMessage();
    const expectedAction = {
      type: AUTH_LOADING,
    };
    expect(loadingAction)
        .toEqual(expectedAction);
  });

  it('should failureMessage action', () => {
    const error = {errors: {username: 'Username field is required.'}};
    const failureAction = actions.failureMessage(error);
    const expectedAction = {
      type: AUTH_ERROR,
      payload: error,
    };
    expect(failureAction).toEqual(expectedAction);
  });

  it('should handle successMessage action', () => {
    const expectedAction = {
      type: AUTH_USER,
      payload,
    };
    const successAction = actions.successMessage(payload);
    expect(successAction).toEqual(expectedAction);
  });

  it('test it creates AUTH_SUCCESS when registration successful', async (done) => {
    const expectedActions = actions.successMessage(payload);

    moxios.stubRequest(`${API_URL}/user/create/`, {
      status: 200,
      response: {
        ...payload
      },
    });

    await store.dispatch(actions.signUp({}));
    expect(store.getActions()).toContainEqual(expectedActions);
    done();
  });

  it('test it creates AUTH_ERROR when registration fails', async (done) => {
    const data = {
      errors: 'found something wrong',
    };

    const expectedActions = actions.failureMessage(data);

    moxios.stubRequest(`${API_URL}/user/create/`, {
      status: 400,
      response: {
        errors: 'found something wrong',
      },
    });

    await store.dispatch(actions.signUp({}));
    expect(store.getActions()).toContainEqual(expectedActions);
    done();
  });
});
