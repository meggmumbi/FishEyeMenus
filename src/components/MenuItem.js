// components/MenuItem.js

import React, { useContext } from 'react';
import { MenuContext } from '../contexts/MenuContext';

const MenuItem = ({ wonder }) => {
  const { selectedItem, setSelectedItem } = useContext(MenuContext);

  const handleItemClick = () => {
    setSelectedItem(wonder === selectedItem ? null : wonder);
  };

  return (
    <li
      className={`menu-item ${selectedItem === wonder ? 'selected' : ''}`}
      onClick={handleItemClick}
    >
      <img
        src={process.env.PUBLIC_URL + wonder.image}
        alt={wonder.name}
        className="wonder-image"
      />
      <div className="wonder-details">
        <h3>{wonder.name}</h3>
        {selectedItem === wonder && (
          <>
           
            <p>{wonder.details}</p>
          </>
        )}
      </div>
    </li>
  );
};

export default MenuItem;
