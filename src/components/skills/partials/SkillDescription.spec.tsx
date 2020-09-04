import React from 'react';
import { shallow } from 'enzyme';
import SkillDescription from './SkillDescription';

const descriptionDefault = 'description';

describe('SkillTitle', () => {
  const wrapper = shallow(
    <SkillDescription description={descriptionDefault} />
  );

  it('renders', () => {
    const selector = '[data-test="skill-description"]';
    expect(wrapper.find(selector).length).toBe(1);
  });
});
