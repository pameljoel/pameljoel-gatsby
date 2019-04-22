import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Context from '../../Context';
import Company from './Company';
import './career.scss';

export default class Career extends Component {

  render() {
    const { data } = this.props;
    return (
      <article className="career-container">
        {data &&
          <div className="career-title">
            <h1>Career</h1>
          </div>
        }
        <div className="career-content">
          {data && data.map(item => {
            const { year, company } = item;
            return (<Company
              data={item}
              key={company + year}
              handleClick={this.showRelatedProjects}
            />)
          }
          )}
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
};

Career.defaultProps = {
  data: [],
};
