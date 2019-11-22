import React from 'react';
import Project from './Project';


import projectsStub from './resources/projects.json';

const project = projectsStub[1];

/*
    name,
    category,
    about,
    description,
    images,
    job,
    myWork,
    tags,
    slug,
    url,
* */


describe('Project', () => {
  const wrapper = shallow(<Project data={project} />);
  const findDataTest = (selector) => {
    return wrapper.find(`[data-test="project-${selector}"]`).length;
  }
  it('should have a date', ()=>{
    expect(findDataTest('date')).toBe(1);
  });

  it('should have a name', ()=>{
    expect(findDataTest('name')).toBe(1);
  });

  it('should have a category', ()=>{
    expect(findDataTest('category')).toBe(1);
  });

  it('should have an about', ()=>{
    expect(findDataTest('about')).toBe(1);
  });

  it('should have a description', ()=>{
    expect(findDataTest('description')).toBe(1);
  });

  it('should have a link', ()=>{
    expect(findDataTest('link')).toBe(1);
  });

  it('should have images', ()=>{
    expect(findDataTest('images')).toBe(1);
  });

  it('should have a work description', ()=>{
    expect(findDataTest('work')).toBe(1);
  });

  it('should have tags', ()=>{
    expect(findDataTest('tags')).toBe(1);
  });

})
