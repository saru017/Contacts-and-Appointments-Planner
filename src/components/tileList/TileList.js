import React from 'react';
import { Tile } from '../tile/Tile';

export const TileList = (props) => {
  const list = props.contacts;

  return (
    <div>
      {list.map((info, index) => (
        <Tile info={info} key={index} />
      ))}
    </div>
  );
};
