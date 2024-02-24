import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ wonders }) => {
  return (
    <ul className="menu">
      {wonders.map((wonder, index) => (
        <MenuItem key={index} wonder={wonder} />
      ))}
    </ul>
  );
};

export default Menu;
