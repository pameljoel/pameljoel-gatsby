import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import StaticContent from './StaticContent';

describe('Home', () => {
  const wrapper = shallow(<Home />);

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });

  it('renders DOM', () => {
    const selector = '[data-test="home"]';
    expect(wrapper.find(selector).length).toBe(1);
  });

  it('renders static content', () => {
    expect(wrapper.find(StaticContent).length).toBe(1);
  });

  describe('loading', () => {
    const selector = '[data-test="loading"]';
    expect(wrapper.find(selector).length).toBe(0);
  });
});
