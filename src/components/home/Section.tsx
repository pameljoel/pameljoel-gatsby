import Skills from '../skills/Skills';
import React from 'react';
import { SectionType } from '../../types';
import { FadeIn } from '../utils/FadeIn';

const Section: React.FC<SectionType> = ({ name, description, skills }) => {
  const sectionTitle = name ? (
    <FadeIn small>
      <h2 className="title" data-test="section-title">
        {name}
      </h2>
    </FadeIn>
  ) : null;

  const sectionDescription = description ? (
    <FadeIn small>
      <div className="description" data-test="section-description">
        {description}
      </div>
    </FadeIn>
  ) : null;

  const sectionSkills = skills ? (
    <div data-test="section-skills">
      <Skills list={skills} />
    </div>
  ) : null;

  return (
    <FadeIn>
      <div className="card" data-test="section">
        {sectionTitle}
        {sectionDescription}
        {sectionSkills}
      </div>
    </FadeIn>
  );
};

export default Section;
