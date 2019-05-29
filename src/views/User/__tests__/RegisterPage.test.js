import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import {
  RegisterPage,
  mapStateToProps
} from '../RegisterPage';


const setUp = () => {
  const props = {
    user: {},
    errorMessage: {},
    loading: false,
    signUp: jest.fn(),
  };
  const wrapper = shallow(<RegisterPage {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Register Page test::', () => {
  const {wrapper, props} = setUp();

  it('should handleChange function', () => {
    wrapper.instance().handleChange({}, {
      name: 'name',
      value: 'test'
    });

    expect(wrapper.state().name).toEqual('test');
  });

  it('render componentWillReceiveProps with change', () => {
    const data = {
      user: {email: 'test', name: 'test'},
      errorMessage: {name: 'Required', email: 'Required', password: 'Required'}
    };
    wrapper.setProps(data);
    expect(wrapper.state().errorMessage).toEqual(data.errorMessage);
  });

  it('render componentWillReceiveProps with no change', () => {
    wrapper.setProps();
    expect(wrapper.state().name).toEqual('test');
  });


  it(' handleSubmit event', () => {
    wrapper.instance()
        .handleSubmit({
          preventDefault: () => {
          }
        });

    expect(props.signUp).toBeCalledTimes(1);
  });

  it('properly maps state to props', () => {
    const initialState = {
      auth: {
        errorMessage: {email: 'Email field is required.'},
      },
    };

    expect(mapStateToProps(initialState).errorMessage)
        .toEqual(initialState.auth.errorMessage);
  });
});
