import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

import './tag.css';

export default class Tag extends Component {
  render() {
    const { name } = this.props;
    const { top } = this.props;
    const newskill = this.props.new;

    return (
      <div className="tag" onClick={() => this.props.handleClick(name)}>
        {name}
        {top && <Tooltip title={`<strong>${name}</strong> <small>is one of my strong skills</small>`} position="top" trigger="mouseenter"><span className="tag-label top">top</span></Tooltip>}
        {newskill && <Tooltip title={`<small>I learned</small> <strong>${name}</strong> <small>during this work experience</small>`} position="top" trigger="mouseenter"><span className="tag-label new">new</span></Tooltip>}
      </div>
    );
  }
}

Tag.propTypes = {
  name: PropTypes.string,
  top: PropTypes.bool,
  handleClick: PropTypes.func,
};

Tag.defaultProps = {
  name: null,
  top: null,
  handleClick() { return false; },
};
