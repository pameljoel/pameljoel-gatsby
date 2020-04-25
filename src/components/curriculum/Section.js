import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

import './section.scss';

export default class Section extends Component {
  render() {
    const { data } = this.props;

    const container = data && (
      <div className="fields-container">
        {data.map((item, i) => (
          <Field data={item} key={`field-container-${i}`} />
        ))}
      </div>
    );

    return <article className="cv-section">{container}</article>;
  }
}

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
