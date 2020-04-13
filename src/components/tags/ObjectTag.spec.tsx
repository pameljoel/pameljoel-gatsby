import React from 'react';
import { shallow } from 'enzyme';
import ObjectTag from './ObjectTag';

describe('tag', () => {
  it('renders', () => {
    const tag = (
      <ObjectTag
        name="name"
        newSkill={false}
        topSkill={false}
        handleClick={() => 'string'}
      />
    );
    expect(shallow(tag)).toBeDefined();
  });
});
