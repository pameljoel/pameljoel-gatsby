import Skills from '../skills/Skills';
import Tags from '../tags/Tags';
import React from 'react';
import PropTypes from 'prop-types';
import { section } from '../../types';
import { FadeIn } from '../utils/FadeIn';

const Section = (props: section) => {
  const { name, description, skills, tags } = props;

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

  const sectionTags = tags ? (
    <FadeIn small>
      <div data-test="section-tags">
        <h3>Other {name} skills:</h3>
        <div className="tags">
          <Tags data={tags} />
        </div>
      </div>
    </FadeIn>
  ) : null;

  return (
    <FadeIn>
      <div className="card">
        {sectionTitle}
        {sectionDescription}
        {sectionSkills}
      </div>
    </FadeIn>
  );
};

Section.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.array,
  tags: PropTypes.array,
};

export default Section;
