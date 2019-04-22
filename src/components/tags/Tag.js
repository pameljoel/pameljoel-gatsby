import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

import './tag.scss';

export default class Tag extends Component {
  render() {
    const { name, top, new: newskill, handleClick } = this.props;

    return (
      <div className="tag" onClick={() => handleClick(name)}>
        {name}
        {top && (
          <Tooltip
            title={`<strong>${name}</strong> <small>is one of my strong skills</small>`} position="top" trigger="mouseenter">
            <span className="tag-label top">top</span>
          </Tooltip>
        )}
        {newskill && (
          <Tooltip title={`<small>I learned</small> <strong>${name}</strong> <small>during this work experience</small>`} position="top" trigger="mouseenter">
            <span className="tag-label new">new</span>
          </Tooltip>)}
      </div>
    );
  }
}

Tag.propTypes = {
  name: PropTypes.string,
  top: PropTypes.bool,
  new: PropTypes.bool,
  handleClick: PropTypes.func,
};

Tag.defaultProps = {
  name: null,
  top: null,
  new: null,
  handleClick() { return false; },
};
