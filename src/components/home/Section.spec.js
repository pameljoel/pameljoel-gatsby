import React from 'react';
import { shallow } from 'enzyme';
import Section from './Section';
import Skills from '../skills/Skills';
import Tags from '../tags/Tags';

describe('Section', () => {
  let wrapper;
  let component;
  const SECTION_SELECTOR = '[data-test="section"]';
  const TITLE_SELECTOR = '[data-test="section-title"]';
  const DESCRIPTION_SELECTOR = '[data-test="section-description"]';
  const SKILLS_SELECTOR = '[data-test="section-skills"]';

  const oneSkills = [
    {
      name: 'React',
      description: 'an UI library',
      percentage: '50',
      pro: true,
    },
  ];

  const defaultProps = {
    name: 'Section name',
    description: 'Section description',
    skills: oneSkills,
  };

  const createWrapper = (props = {}) => {
    const {
      name = defaultProps.name,
      description = defaultProps.description,
      skills = defaultProps.skills,
    } = props;

    return shallow(
      <Section name={name} description={description} skills={skills} />
    );
  };

  beforeEach(() => {
    wrapper = createWrapper();
    component = wrapper.find(SECTION_SELECTOR);
  });

  it('renders', () => {
    expect(component.length).toBe(1);
  });

  describe('title', () => {
    it('has a title', () => {
      expect(wrapper.find(TITLE_SELECTOR).length).toBe(1);
    });
    it('title text is expected', () => {
      expect(wrapper.find(TITLE_SELECTOR).text()).toBe(defaultProps.name);
    });
  });

  describe('description', () => {
    it('has a title', () => {
      expect(wrapper.find(DESCRIPTION_SELECTOR).length).toBe(1);
    });
    it('has a description', () => {
      expect(wrapper.find(DESCRIPTION_SELECTOR).text()).toBe(
        defaultProps.description
      );
    });
  });

  describe('skills', () => {
    it('has a skills section', () => {
      expect(wrapper.find(SKILLS_SELECTOR).length).toBe(1);
    });

    it('renders skills', () => {
      expect(wrapper.find(Skills).length).toBe(1);
    });
  });
});
