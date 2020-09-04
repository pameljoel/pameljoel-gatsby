import React from 'react';
import { shallow } from 'enzyme';
import AdditionalInfo from './AdditionalInfo';

type Props = {
  showAdditionalInfo: boolean;
  hint?: string;
  title: string;
};

const createWrapper = ({ title, hint, showAdditionalInfo }: Props) => {
  return shallow(
    <AdditionalInfo title={title} showAdditionalInfo={showAdditionalInfo} hint={hint} />
  );
};

describe('Hint', () => {
  let wrapper: any;
  const title = 'title';
  const hint = 'hint';
  const showAdditionalInfo = true;

  it('renders', () => {
    wrapper = createWrapper({ showAdditionalInfo, hint, title });
    const selector = '[data-test="skill-additional-info"]';
    expect(wrapper.find(selector).length).toBe(1);
  });

  it('has no hint', () => {
    wrapper = createWrapper({ showAdditionalInfo, hint: undefined, title });
    const selector = '[data-test="skill-additional-info"]';
    expect(wrapper.find(selector).length).toBe(0);
  });

  it('renders hints', () => {
    const selector = '[data-test="skill-additional-info"]';
    wrapper = createWrapper({ showAdditionalInfo: true, title, hint });
    expect(wrapper.find(selector).length).toBe(1);
  });
});
