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
      description={description}
      name={name}
      percentage={percentage}
      startDate={startDate}
      hint={hint}
      endDate={endDate}
    />
  );
};

beforeEach(() => {
  wrapper = createWrapper();
});

describe('Skill', () => {
  describe('graph', () => {
    const selector = '[data-test="skill-graph"]';
    it('renders', () => {
      expect(wrapper.find(selector).length).toBe(1);
    });
  });

  describe('title', () => {
    const selector = '[data-test="skill-title"]';
    it('renders', () => {
      expect(wrapper.find(selector).length).toBe(1);
    });
  });

  describe('experience', () => {
    const selector = '[data-test="skill-experience"]';
    it('renders', () => {
      expect(wrapper.find(selector).length).toBe(1);
    });

    it('has tooltip', () => {
      expect(wrapper.find(selector).text()).toBe('<Tooltip />');
    });
  });

  describe('description', () => {
    const selector = '[data-test="skill-description"]';
    it('renders', () => {
      expect(wrapper.find(selector).length).toBe(1);
    });
  });

  describe('text', () => {
    const selector = '[data-test="skill-text"]';
    it('renders', () => {
      expect(wrapper.find(selector).length).toBe(1);
    });
  });

  describe('additionalInfo', () => {
    const selector = '[data-test="skill-additional-info"]';

    describe('has no hint', () => {
      it('renders', () => {
        expect(wrapper.find(selector).length).toBe(0);
      });
    });

    describe('has hint', () => {
      const selector = '[data-test="skill-additional-info"]';
      beforeEach(() => {
        wrapper = createWrapper({ hasAdditionalInfo: true, hint: 'string' });
      });

      it('renders hints', () => {
        wrapper.find('header').simulate('click');
        expect(wrapper.find(selector).length).toBe(1);
      });
    });
  });

  describe('getExperience', () => {
    describe('5 years', () => {
      const experience = getYearsOfExperience(2000, 2005);
      expect(experience).toBe(5);
    });
  });
});
