import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PieChart from 'react-minimal-pie-chart';

import AdditionalInfo from './AdditionalInfo';

export default class GraphSkill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdditionalInfo: false,
    };

    this.toggleAdditionalInfo = this.toggleAdditionalInfo.bind(this);
  }

  toggleAdditionalInfo() {
    this.setState(prevState => ({ showAdditionalInfo: !prevState.showAdditionalInfo }));
  }

  showSkillLevel(percentage) {
    let skillLevel;

    if (percentage >= 90) {
      skillLevel = 'Expert';
      return skillLevel;
    }

    if (percentage >= 75) {
      skillLevel = 'Proficient';
      return skillLevel;
    }

    if (percentage >= 50) {
      skillLevel = 'Competent';
      return skillLevel;
    }

    if (percentage >= 25) {
      skillLevel = 'Learning';
      return skillLevel;
    }

    return skillLevel;
  }

  render() {
    const chartObject = [{
      value: this.props.percentage,
      color: this.props.color,
    }];
    return (
      <div className={`skill-graph ${this.props.pro ? 'clickable' : ''}`} >
        <div className="skill-graph-image">
          <div className="skill-level-container">
            <div className="skill-level-label">Proficiency: </div>
            <div className="skill-level">{this.showSkillLevel(this.props.percentage)}</div>
          </div>
            <PieChart
              className="graph-item"
              data={chartObject}
              lineWidth={20}
              rounded
              totalValue={100}
              animate
              animationDuration={5000}
              animationEasing="ease-in-out"
            />
        </div>
        <article className="skill-graph-text">
          <header className="skill-graph-title" onClick={this.toggleAdditionalInfo}>
            <h1>{this.props.name}</h1>
          </header>
          <div className="skill-graph-description">{this.props.description}</div>

          {this.state.showAdditionalInfo && this.props.pro &&
            <AdditionalInfo show={this.state.showAdditionalInfo} description={this.props.pro} />
          }
        </article>
      </div>
    );
  }
}

GraphSkill.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pro: PropTypes.string,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string,
};

GraphSkill.defaultProps = {
  pro: '',
  color: '#E38627',
};
