import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Company from './Company';
import './career.css';

export default class Career extends Component {
  render() {
    return (
      <article className="career-container">
        {this.props.data &&
          <div className="career-title">
            <h1>Career</h1>
          </div>
        }

        <div className="career-content">
          {this.props.data && this.props.data.map(item =>
            (<Company
              data={item}
              key={item.company + item.year}
              handleClick={this.showRelatedProjects}
              addSelectedProjectCallback={this.props.addSelectedProjectCallback}
            />))}
        </div>
      </article>
    );
  }
}

Career.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string,
    company: PropTypes.string,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, top: PropTypes.bool, new: PropTypes.bool })),
    title: PropTypes.string,
    website: PropTypes.string,
    year: PropTypes.string,
  })),
  addSelectedProjectCallback: PropTypes.func,
};

Career.defaultProps = {
  data: [],
  addSelectedProjectCallback() { },
};

