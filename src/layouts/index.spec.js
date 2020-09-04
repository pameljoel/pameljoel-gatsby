import SharedState from './index';
import { shallow } from 'enzyme';
import React from 'react';

const PROJECT_NUMBER = 4;

describe('SharedState', () => {
  const wrapper = shallow(
    <SharedState>
      <div className="child-element">something</div>
    </SharedState>
  );

  describe('has initial state', () => {
    it('is null', () => {
      const child = wrapper.find('.child-element');
      expect(child.props().selectedProject).toBeNull();
    });
  });

  describe('setSelectedProject', () => {
    it('set a selected project', () => {
      const selector = '.child-element';
      wrapper.find(selector).props().setSelectedProject(PROJECT_NUMBER);

      expect(wrapper.find(selector).props().selectedProject).toBe(
        PROJECT_NUMBER
      );
    });
  });

  describe('removeSelectedProject', () => {
    it('removes a selected project', () => {
      const selector = '.child-element';
      wrapper.find(selector).props().setSelectedProject(PROJECT_NUMBER);
      wrapper.find(selector).props().removeSelectedProject(PROJECT_NUMBER);

      expect(wrapper.find(selector).props().selectedProject).toBeNull();
    });
  });
});
