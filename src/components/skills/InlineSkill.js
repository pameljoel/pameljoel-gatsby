import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InlineSkill extends Component {
    render() {
        const { name, percentage } = this.props;

        let divStyle = {
            width: percentage + "%"
        };
        return (
            <div className="skill-inline">
                <div className="skill-name-container">
                    <div className="skill-name">{name}</div>
                </div>
                <div className="skill-percentage-container">
                    <div className="skill-percentage">
                        <div className="skill-percentage-fill" style={divStyle}></div>
                    </div>
                </div>
            </div>
        )
    }
}

InlineSkill.propTypes = {
    name: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
};