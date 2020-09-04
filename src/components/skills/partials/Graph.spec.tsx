import React from 'react';
import Graph from './Graph';
import { shallow } from 'enzyme';

describe('Graph', () => {
  const wrapper = shallow(<Graph percentage={50} color="black" />);

  it('renders', () => {
    const selector = '[data-test="skill-graph"]';
    expect(wrapper.find(selector).length).toBe(1);
  });
});
