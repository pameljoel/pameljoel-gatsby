import React, { Component } from 'react';
import ObjectTag from './ObjectTag';
import './tags.scss';
import { StringTag } from './StringTag';

export const isObject = (input) => typeof input === 'object';

const Tags = ({ data: tags, handleClick }) => {
  if (!tags) return null;

  return (
    <div className="tags">
      {tags.map((tag, i) => {
        const { name, topSkill, newSkill } = tag;
        return isObject(tag) ? (
          <ObjectTag
            name={name}
            topSkill={topSkill}
            newSkill={newSkill}
            key={`tag-${i}`}
            handleClick={handleClick}
          />
        ) : (
          <StringTag name={tag} key={`tag-${i}`} handleClick={handleClick} />
        );
      })}
    </div>
  );
};

export default Tags;
