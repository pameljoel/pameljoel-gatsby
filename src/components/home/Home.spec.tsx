import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  const wrapper = shallow(<Home />);
  const search = (node: any) => {
    return wrapper.find(node);
  };

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(0);
    const selector = '[data-test="home"]';
    expect(search(selector)).toBeDefined();
  });

  it('renders the static content', () => {});
});
