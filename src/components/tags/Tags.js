import React, { Component } from 'react';

import Tag from './Tag';
import './tags.scss';

export default class Tags extends Component {
  render() {
    const { data: tags, handleClick } = this.props;
    return (
      <div className="tags">
        {tags && tags.map((tag, i) => {
          if (tag.name) {
            return <Tag
              name={tag.name}
              top={tag.top}
              new={tag.new}
              key={`tag-${i}`}
              handleClick={handleClick}
            />;
          }
          return <Tag
            name={tag}
            key={`tag-${i}`}
            handleClick={handleClick}
          />;
        })}
      </div>
    );
  }
}
