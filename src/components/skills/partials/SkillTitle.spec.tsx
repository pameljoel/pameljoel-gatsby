import React from 'react';
import { shallow } from 'enzyme';
import SkillTitle from './SkillTitle';

const nameDefault = 'description';
const startDateDefault = 1980;
const endDateDefault = 2020;
const toggleAdditionalInfoDefault = jest.fn(() => {});

describe('SkillTitle', () => {
  const wrapper = shallow(
    <SkillTitle
      name={nameDefault}
      startDate={startDateDefault}
      endDate={endDateDefault}
      toggleAdditionalInfo={toggleAdditionalInfoDefault}
    />
  );

  it('renders', () => {
    const selector = '[data-test="skill-title"]';
    expect(wrapper.find(selector).length).toBe(1);
  });
});
