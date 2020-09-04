import React from 'react';
import { shallow } from 'enzyme';
import Skill from './Skill';
import { getYearsOfExperience } from './utils';

let wrapper;
const descriptionDefault = 'description';
const nameDefault = 'description';
const percentageDefault = 90;
const hintDefault = undefined;
const startDateDefault = 1980;
const endDateDefault = 2020;

const createWrapper = (props = {}) => {
  const {
    description = descriptionDefault,
    name = nameDefault,
    percentage = percentageDefault,
    hint = hintDefault,
    startDate = startDateDefault,
    endDate = endDateDefault,
  } = props;

  return shallow(
    <Skill
      percentage={percentage}
      hint={hint}
      description={description}
      name={name}
      startDate={startDate}
      endDate={endDate}
    />
  );
};

beforeEach(() => {
  wrapper = createWrapper();
});

describe('Skill', () => {
  it('renders', () => {
    const selector = '[data-test="skill"]';
    expect(wrapper.find(selector).length).toBe(1);
  });

  describe('getExperience', () => {
    describe('5 years', () => {
      const experience = getYearsOfExperience(2000, 2005);
      expect(experience).toBe(5);
    });
  });
});
