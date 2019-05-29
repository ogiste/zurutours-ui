import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import HeaderComponent from '../HeaderComponent';


const setUp = () => {
  const wrapper = shallow(<HeaderComponent/>);

  return {
    wrapper,
  };
};

describe('Header Layout test::', () => {
  const {wrapper} = setUp();

  it('should handleItemClick function', () => {
    wrapper.instance().handleItemClick({}, {
          name: 'about',
        },
    );

    expect(wrapper.state().activeItem).toEqual('about');
  });
});
