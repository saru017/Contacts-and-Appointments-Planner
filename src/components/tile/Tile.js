import React from 'react';

export const Tile = (props) => {
  const item = props.info;
  const values = Object.values(item);

  const tiles = values.map((value, index) => {
    let className;
    if (index === 0) {
      className = 'tile-title';
    } else {
      className = 'tile';
    }
    return (
      <p className={className} key={index}>
        {value}
      </p>
    );
  });

  return <div className="tile-container">{tiles}</div>;
};
