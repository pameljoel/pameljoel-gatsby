import React from 'react'
import Section from './Section';

describe('Section', () => {
  const props = {
    name: "Section name",
    description: "Section description",
    skills: [],
    tags: []
  }
  const { name, description, skills, tags } = props;
  const wrapper = shallow(<Section name={name} description={description} skills={skills} tags={tags}/>);
  const selector = '[data-test="section"]';
  const title_selector = '[data-test="section-title"]';
  const description_selector = '[data-test="section-description"]';

  const component = wrapper.find(selector);

  it('renders', () => {
    expect(component.length).toBe(1);
  })

  it('has a title', () => {
    expect(wrapper.find(title_selector).text()).toBe(name);
  })

  it('has a description', () => {
    expect(wrapper.find(description_selector).text()).toBe(description);
  })
})
