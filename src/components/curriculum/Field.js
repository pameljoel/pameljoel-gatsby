import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { openCrisp } from '../crisp/Crisp';
import './field.scss';

export default class Field extends Component {
  render() {
    const {
      field, value, linkType, isLink,
    } = this.props.data;
    // let icon = data.icon;
    return (
      <div className="field-container">
        <div className="field-question">{field}</div>

        {isLink ?
          (
            <span>
              {linkType === 'href' &&
                <div className="field-link">
                  <a name="visit link" href={value} className="field-answer"  target="_blank" rel="noopener noreferrer">visit link</a>
                </div>
              }
              {linkType === 'click' &&
                <div className="field-link">
                  <a name="visit link" href={value} className="field-answer"  target="_blank" rel="noopener noreferrer">visit link</a>
                </div>
              }

              {linkType === 'email' &&
                <div className="field-link">
                  <a name="visit link" href="#" className="field-answer" onClick={() => openCrisp()}>Instant chat</a>
                </div>
              }
            </span>

          ) : (
            <div className="field-answer">{value}</div>
          )}
      </div>
    );
  }
}

Field.propTypes = {
  data: PropTypes.shape({
    field: PropTypes.string,
    value: PropTypes.string,
    linkType: PropTypes.string,
    isLink: PropTypes.bool,
  }).isRequired,
};
