import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

import './section.css';

export default class Section extends Component {
  render() {
    return (
      <article className="cv-section">
        {this.props.data &&
          <div className="fields-container">
            {this.props.data.map((item, i) => <Field data={item} key={`field-container-${i}`} />)}
          </div>
        }
      </article>
    );
  }
}

Section.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string,
    value: PropTypes.string,
    linkType: PropTypes.string,
    isLink: PropTypes.bool,
  })),
};

Section.defaultProps = {
  data: [{}],
};
