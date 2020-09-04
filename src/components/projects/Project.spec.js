import React from 'react';
import { shallow } from 'enzyme';
import Project from './Project';

import projectsStub from '../../../static/resources/projects.json';

const project = projectsStub[2];

describe('Project', () => {
  const wrapper = shallow(<Project {...project} />);
  const elementLength = (selector) => {
    return wrapper.find(`[data-test="project-${selector}"]`).length;
  };

  it('should have a date', () => {
    expect(elementLength('date')).toBe(1);
  });

  it('should have a name', () => {
    expect(elementLength('name')).toBe(1);
  });

  it('should have a category', () => {
    expect(elementLength('category')).toBe(1);
  });

  it('should have an about', () => {
    expect(elementLength('about')).toBe(1);
  });

  it('should have a description', () => {
    expect(elementLength('description')).toBe(1);
  });

  it('should have a link', () => {
    expect(elementLength('link')).toBe(1);
  });

  it('should have images', () => {
    expect(elementLength('images')).toBe(1);
  });

  it('should have a work description', () => {
    expect(elementLength('work')).toBe(1);
  });

  it('should have Tags', () => {
    expect(elementLength('tags')).toBe(1);
  });
});
