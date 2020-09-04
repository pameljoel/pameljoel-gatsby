import React from 'react';
import Experience from './Experience';
import { shallow } from 'enzyme';

describe('Experience', () => {
  const calculateYears = (startDate: number, endDate?: number) => {
    const selector = '[data-test="experience"]';
    const wrapper = shallow(
      <Experience startDate={startDate} endDate={endDate} />
    );

    const now = new Date();
    const date = endDate ? endDate : now.getFullYear();

    const difference = date - startDate;
    const expected = `${difference} years`;

    expect(wrapper.find(selector).text()).toBe(expected);
  };

  it('renders', () => {
    const wrapper = shallow(<Experience startDate={2000} />);
    expect(wrapper.length).toBe(1);
  });

  it('returns a string with only startDate', () => {
    calculateYears(2000);
  });

  it('returns a string with startDate and endDate', () => {
    calculateYears(2000, 2010);
  });
});
