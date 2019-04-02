import React, { Component } from 'react';
import PropTypes from 'prop-types';

import School from './School';
import './education.scss';

export default class Education extends Component {
  render() {
    return (
      <article className="education-container">
        {this.props.data &&
          <div className="education-title">
            <h1>Education</h1>
          </div>

        }
        {this.props.data &&
          <div className="education-content">
            {this.props.data.map(item => <School data={item} key={item.school + item.year} />)}
          </div>
        }
      </article>
    );
  }
}

Education.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string,
    degree: PropTypes.string,
    degreeType: PropTypes.string,
    school: PropTypes.string,
    subjects: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.string,
  })),
};

Education.defaultProps = {
  data: [],
};

