import React from 'react';

type props = {
  name: string;
};

export const StringTag = (props: props) => {
  const { name } = props;
  return (
    <div className="tag">
      <span className="tag__name">{name}</span>
    </div>
  );
};
