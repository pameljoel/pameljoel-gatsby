import Fade from 'react-reveal';
import GraphSkills from '../skills/GraphSkills';
import Tags from '../tags/Tags';
import React from 'react';
import PropTypes from 'prop-types';
import { section } from '../../types';

const Section = (props: section) => {
  const { name, description, skills, tags } = props;
  return (
    <Fade big cascade key={name} data-test="section">
      <div className="card">
        <h2 className="title" data-test="section-title">
          {name}
        </h2>
        <div className="description" data-test="section-description">
          {description}
        </div>
        <GraphSkills skills={skills} />
        <h3>Other {name} skills:</h3>
        <div className="tags">
          <Tags data={tags} />
        </div>
      </div>
    </Fade>
  );
};

Section.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.array,
  tags: PropTypes.array,
};

export default Section;
