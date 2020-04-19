import React from 'react';
import { shallow } from 'enzyme';
import Skill from './Skill';

let wrapper;
const descriptionDefault = 'description';
const nameDefault = 'description';
const percentageDefault = 90;
const hintDefault = undefined;
const experienceDefault = 5;

const createWrapper = (props = {}) => {
  const {
    description = descriptionDefault,
    name = nameDefault,
    percentage = percentageDefault,
    hint = hintDefault,
    startDate = experienceDefault,
  } = props;

  return shallow(
    <Skill
      description={description}
      name={name}
      percentage={percentage}
      startDate={startDate}
      hint={hint}
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

    it('has text', () => {
      expect(wrapper.find(selector).text()).toBe('5 years');
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
        wrapper = createWrapper({ hint: 'string' });
      });

      it('renders', () => {
        expect(wrapper.find(selector).length).toBe(1);
      });
    });
  });
});
