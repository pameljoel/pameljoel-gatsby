import SharedState from './index';
import React from 'react';

const PROJECT_NUMBER = 4;

describe('SharedState', () => {
  const wrapper = shallow(<SharedState><div>something</div></SharedState>);
  describe('has initial state', () => {
    it('is null', ()=> {
      const instance = wrapper.instance();
      expect(instance.state.selectedProject).toBeNull();
    })
  })

  describe('setSelectedProject', () => {
    it('set a selected project', () => {
      const instance = wrapper.instance();
      instance.setSelectedProject(PROJECT_NUMBER);
      expect(instance.state.selectedProject).toBe(PROJECT_NUMBER);
    })
  })

  describe('removeSelectedProject', () => {
    it('removes a selected project', () => {
      const instance = wrapper.instance();
      instance.setSelectedProject(PROJECT_NUMBER);
      expect(instance.state.selectedProject).toBe(PROJECT_NUMBER);
      instance.removeSelectedProject(PROJECT_NUMBER);
      expect(instance.state.selectedProject).toBeNull();
    })
  })
})

