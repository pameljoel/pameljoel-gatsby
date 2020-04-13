import React from 'react';
import { shallow } from 'enzyme';
import ObjectTag from './ObjectTag';

type tag = {
  name?: string;
  topSkill?: boolean;
  newSkill?: boolean;
  handleClick?: (name: string) => {};
};

describe('tag', () => {
  const createWrapper = (props: tag) => {
    const {
      name = 'name',
      newSkill = false,
      topSkill = false,
      handleClick = undefined,
    } = props;
    const tag = (
      <ObjectTag
        name={name}
        newSkill={newSkill}
        topSkill={topSkill}
        handleClick={handleClick}
      />
    );
    return shallow(tag);
  };

  const topSelector = '[data-test="tooltip-top"]';
  const newSelector = '[data-test="tooltip-new"]';
  const noop = jest.fn(() => 'string');

  it('renders', () => {
    const wrapper = createWrapper({});
    expect(wrapper.length).toBe(1);
  });

  describe('has TOP label', () => {
    const wrapper = createWrapper({ topSkill: true });

    it('has TOP tooltip', () => {
      expect(wrapper.find(topSelector).length).toBe(1);
    });

    it('does not have NEW tooltip', () => {
      expect(wrapper.find(newSelector).length).toBe(0);
    });
  });

  describe('has NEW label', () => {
    const wrapper = createWrapper({ newSkill: true });

    it('has NEW tooltip', () => {
      expect(wrapper.find(newSelector).length).toBe(1);
    });

    it('does not have TOP tooltip', () => {
      expect(wrapper.find(topSelector).length).toBe(0);
    });
  });

  describe('has callback', () => {
    const wrapper = createWrapper({ handleClick: noop });
    wrapper.simulate('click');

    it('calls callback', () => {
      expect(noop).toHaveBeenCalledTimes(1);
    });
  });
});
