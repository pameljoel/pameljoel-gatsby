import React from 'react';
import YearsOfExperience from './YearsOfExperience';
import { shallow } from 'enzyme';

const name = 'name';
let wrapper: any;

const createWrapper = ({ startDate, endDate }: { startDate: number; endDate?: number }) => {
  return shallow(<YearsOfExperience startDate={startDate} tooltipName={name} endDate={endDate} />);
};

describe('YearsOfExperience', () => {
  beforeEach(() => {
    wrapper = createWrapper({ startDate: 2000 });
  });

  it('should render html', () => {
    expect(wrapper.find('[data-test="skill-experience"]').length).toBe(1);
  });

  describe('tooltip', () => {
    const selector = '[data-test="tooltip-name"]';

    it('should show tooltip', () => {
      expect(wrapper.find(selector).length).toBe(1);
    });

    describe('with startDate', () => {
      it('should show text', () => {
        const tooltip = wrapper.find('Tooltip').prop('title');
        const expectedText = `I have been working with <strong>${name}</strong> since 2000`;

        expect(tooltip).toBe(expectedText);
      });
    });

    describe('with endDate', () => {
      beforeEach(() => {
        wrapper = createWrapper({ startDate: 2000, endDate: 2010 });
      });

      it('should show text', () => {
        const tooltip = wrapper.find('Tooltip').prop('title');
        const expectedText = `I have been working with <strong>${name}</strong> from 2000 to 2010`;

        expect(tooltip).toBe(expectedText);
      });
    });
  });
});
