import React, { Component } from 'react';

import Tags from './../tags/Tags';

import './school.css';
import './../card.css';

export default class School extends Component {
  render() {
    return (
      <article className="card school-container">
        <header className="school-role">
          <h1>{this.props.data.degree}</h1>
        </header>
        <div className="school-data-container">

          <span className="school-degree-type">
            <span className="prefix">type</span>
            <span className="text">
              {this.props.data.degreeType}
            </span>
          </span>

          <span className="school-name">
            <span className="prefix">at</span>
            <span className="text">
              {this.props.data.school}
            </span>
          </span>

          <span className="school-city">
            <span className="prefix">in</span>
            <span className="text">
              {this.props.data.city}
            </span>
          </span>

          <span className="school-year">
            <span className="prefix">year</span>
            <span className="text">
              {this.props.data.year}
            </span>
          </span>
        </div>

        <div className="school-skills-container">
          <Tags data={this.props.data.subjects} />
        </div>
        <div className="school-projects" />
      </article>
    );
  }
}
