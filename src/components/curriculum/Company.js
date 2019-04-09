import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Tags from './../tags/Tags';
import RelatedProjects from './../carousel/RelatedProjects';

import { getData } from '../../helpers';
import projectsJSON from './resources/projects.json';

import './company.scss';
import './../card.scss';

export default class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      selectedTag: null,
      filteredProjects: [],
    };
    this.showRelatedProjectsCarousel = this.showRelatedProjectsCarousel.bind(this);
    this.emptyFilteredProjects = this.emptyFilteredProjects.bind(this);
  }

  componentDidMount() {
    getData(projectsJSON)
      .then(data => this.setState({ projects: data }));
  }

  emptyFilteredProjects() {
    this.setState({ selectedTag: null });
  }

  showRelatedProjectsCarousel(name) {
    const filteredProjects = [];
    this.setState({ selectedTag: name });
    this.state.projects.map(item => item.tags.reduce((prev, tag) => tag === name && filteredProjects.push(item), []));
    this.setState({ filteredProjects });
  }

  render() {
    return (
      <article className="card company-container">
        {this.props.data.title && (
          <header className="company-role">
            <h1>{this.props.data.title}</h1>
          </header>
        )}

        <div className="company-data-container">
          {this.props.data.company && (
            <span className="company-name">
              <span className="prefix">@</span>
              <span className="text">{this.props.data.company}</span>
            </span>
          )}

          {this.props.data.contract && (
            <span className="company-contract">
              <span className="prefix">as</span>
              <span className="text">{this.props.data.contract}</span>
            </span>
          )}

          {this.props.data.city && (
            <span className="company-city">
              <span className="prefix">in</span>
              <span className="text">{this.props.data.city}</span>
            </span>
          )}

          {this.props.data.year && (
            <span className="company-year">
              <span className="prefix">in</span>
              <span className="text">{this.props.data.year}</span>
            </span>
          )}
        </div>

        <div className="company-content-container">
          <div className="company-description-container">
            <div className="company-description">
              {this.props.data.description}
            </div>
            {this.props.data.website &&
              <div className="company-website">
                <a name="visit website" href={this.props.data.website} target="_blank" rel="noopener noreferrer">visit website</a>
              </div>
            }
          </div>

          <div className="company-skills-container">
            <Tags
              data={this.props.data.skills}
              handleClick={this.showRelatedProjectsCarousel}
            />
          </div>
        </div>

        <div className="company-projects-container">
          <RelatedProjects
            projects={this.state.filteredProjects}
            emptyFilteredProjects={this.emptyFilteredProjects}
            selected={this.state.selectedTag}
            addSelectedProjectCallback={this.props.addSelectedProjectCallback}
          />
        </div>
      </article>
    );
  }
}


Company.propTypes = {
  data: PropTypes.object,
  addSelectedProjectCallback: PropTypes.func,
};

Company.defaultProps = {
  data: [],
  addSelectedProjectCallback: null,
};
