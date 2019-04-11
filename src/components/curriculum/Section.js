import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

import './section.scss';

export default class Section extends Component {
  render() {
    const { data } = this.props;
    return (
      <article className="cv-section">
        {data &&
          <div className="fields-container">
            {data.map((item, i) => <Field data={item} key={`field-container-${i}`} />)}
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
