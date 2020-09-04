import React from 'react';
import Daily from './Daily';
import { shallow } from 'enzyme';

describe('Daily', () => {
  const wrapper = shallow(<Daily />);

  it('renders', () => {
    const selector = '[data-test="daily"]';
    expect(wrapper.find(selector).length).toBe(1);
  });
});
