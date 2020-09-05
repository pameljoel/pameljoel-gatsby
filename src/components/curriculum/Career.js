import React from 'react';
import PropTypes from 'prop-types';
import Company from './Company';
import './career.scss';

const Career = ({ data, setSelectedProject }) => {
  const title = data && (
    <div className="career-title">
      <h1>My Career</h1>
    </div>
  );

  const company = (item) => {
    const { year, company } = item;
    return (
      <Company
        data={item}
        key={company + year}
        setSelectedProject={setSelectedProject}
      />
    );
  };

  const content = data && data.map((item) => company(item));

  return (
    <article className="career-container">
      {title}
      <div className="career-content">{content}</div>
    </article>
  );
};

export default Career;

Career.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string,
      company: PropTypes.string,
      description: PropTypes.string,
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          topSkill: PropTypes.bool,
          newSkill: PropTypes.bool,
        })
      ),
      title: PropTypes.string,
      website: PropTypes.string,
      year: PropTypes.string,
    })
  ),
  setSelectedProject: PropTypes.func,
};

Career.defaultProps = {
  data: [],
  setSelectedProject: null,
};
