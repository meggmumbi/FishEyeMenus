// contexts/MenuContext.js

import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <MenuContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </MenuContext.Provider>
  );
};
