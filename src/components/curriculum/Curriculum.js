import React, { Component } from 'react';
import Loading from '../status/Loading';

import Section from './Section';
import Career from './Career';
import Education from './Education';

import { getData } from '../../helpers';
import personalJson from './resources/personal.json';
import educationJson from './resources/education.json';
import careerJson from './resources/career.json';

import './curriculum.scss';

export default class Curriculum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: null,
      education: null,
      career: null,
      isLoading: true,
    };
  }

  componentDidMount() {

    getData(personalJson)
      .then(data => this.setState({ personal: data, isLoading: false }))
      .catch((error) => { this.setState({ isLoading: false }); console.error(error); });

    getData(educationJson)
      .then(data => this.setState({ education: data, isLoading: false }))
      .catch((error) => { this.setState({ isLoading: false }); console.error(error); });

    getData(careerJson)
      .then(data => this.setState({ career: data, isLoading: false }))
      .catch((error) => { this.setState({ isLoading: false }); console.error(error); });
  }

  render() {
    const { isLoading, personal, career, education } = this.state;
    const { addSelectedProjectCallback } = this.props;
    return (
      <div>
        <header
          className="big-header"
          style={{ marginBottom: '0', paddingBottom: '100px' }}
        >
          <div className="big-header-content">
            <h1 className="">CV</h1>
            <div className="subtitle">My Curriculum Vitae</div>
          </div>
          <div className="big-header-background" />
        </header>
        <div className="container" >
          {!isLoading && (personal || career || education) ? (
            <div className="curriculum-container">
              <Section data={personal} />
              <Career data={career} addSelectedProjectCallback={addSelectedProjectCallback} />
              <Education data={education} />
            </div>
          ) : (
              <Loading isLoading={isLoading} />
            )}
        </div>
      </div>
    );
  }
}
