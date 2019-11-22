import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Projects from './Projects';

describe('render', () => {
  it('renders', () => {
    const wrapper = shallow(<Projects />);
    expect(wrapper.length).toBe(1);
  })
})

