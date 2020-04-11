import React from 'react';
import { mount } from 'enzyme';
import Home from './Home';
import HomeStaticContent from './HomeStaticContent';
import Loading from '../status/Loading';

describe('Home', () => {
  const wrapper = mount(<Home />);

  const searchSelector = (selector: string) => {
    return wrapper.find(selector);
  };

  const searchSelectorInComponent = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: React.JSXElementConstructor<any>,
    selector: string
  ) => {
    const deepWrapper = mount(<Home />);

    const staticContent = deepWrapper.find(component);
    return staticContent.find(selector);
  };

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });

  it('renders DOM', () => {
    const selector = '[data-test="home"]';
    expect(searchSelector(selector).length).toBe(1);
  });

  it('renders static content', () => {
    const selector = '[data-test="static"]';
    const Component = searchSelectorInComponent(HomeStaticContent, selector);

    expect(Component.length).toBe(1);
  });

  describe('loading', () => {
    const selector = '[data-test="loading"]';
    const Component = searchSelectorInComponent(Loading, selector);

    expect(Component.length).toBe(0);
  });
});
