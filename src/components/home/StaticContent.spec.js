import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import StaticContent from './StaticContent';

describe('Home', () => {
  const wrapper = shallow(<StaticContent />);

  it('renders', () => {
    expect(wrapper.find('[data-test="static"]').length).toBe(1);
  });
});
