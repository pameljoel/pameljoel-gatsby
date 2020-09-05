import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

import './section.scss';

const Section = ({ data }) => {
  const container = data && (
    <div className="fields-container">
      {data.map((item, i) => (
        <Field {...item} key={`field-container-${i}`} />
      ))}
    </div>
  );

  return <article className="cv-section">{container}</article>;
};

export default Section;

Section.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      value: PropTypes.string,
      linkType: PropTypes.string,
      isLink: PropTypes.bool,
    })
  ),
};

Section.defaultProps = {
  data: [{}],
};
