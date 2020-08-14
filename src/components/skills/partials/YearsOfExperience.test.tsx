import React from 'react';
import YearsOfExperience from './YearsOfExperience';
import { shallow } from 'enzyme';

describe('YearsOfExperience', () => {
  const wrapper = shallow(
    <YearsOfExperience startDate={2000} tooltipName="name" />
  );

  it('should render html', () => {
    expect(wrapper.find('[data-test="skill-experience"]').length).toBe(1);
  });

  describe('tooltip', () => {
    const selector = '[data-test="tooltip-name"]';
    it('should show tooltip', () => {
      expect(wrapper.find(selector).length).toBe(1);
    });
  });
});
