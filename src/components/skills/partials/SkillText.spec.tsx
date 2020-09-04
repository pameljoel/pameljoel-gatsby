import React from 'react';
import { shallow } from 'enzyme';
import SkillText from './SkillText';

const nameDefault = 'name';
const descriptionDefault = 'description';
const startDateDefault = 1980;
const endDateDefault = 2020;
const showAdditionalInfoDefault = false;
const toggleAdditionalInfoDefault = jest.fn(() => {});

describe('SkillText', () => {
  const wrapper = shallow(
    <SkillText
      name={nameDefault}
      startDate={startDateDefault}
      endDate={endDateDefault}
      description={descriptionDefault}
      hint={undefined}
      showAdditionalInfo={showAdditionalInfoDefault}
      toggleAdditionalInfo={toggleAdditionalInfoDefault}
    />
  );

  it('renders', () => {
    const selector = '[data-test="skill-text"]';
    expect(wrapper.find(selector).length).toBe(1);
  });
});
