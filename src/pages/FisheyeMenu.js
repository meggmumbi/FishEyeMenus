// Import React and Material UI components
import React, { useState, useEffect, useRef } from "react";


// Import D3 and React Fisheye
import * as d3 from "d3";
import "../pages/styles.css";
import petra from "../images/petra.jpg";
import wall from "../images/wall.jpg";
import pyramid from "../images/pyramid.jpg";
import christ from "../images/christ.jpg";

// Define the menu items as objects with name, image, and description properties
const menuItems = [
  {
    name: "Pyramid",
    image: pyramid,
    description: "The Great Pyramid of Giza in Egypt",
  },
  {
    name: "Wall",
    image: wall,
    description: "The Great Wall of China",
  },
  {
    name: "Petra",
    image: petra,
    description: "The ancient city of Petra in Jordan",
  },
  {
    name: "Christ",
    image: christ,
    description: "The Christ the Redeemer statue in Brazil",
  },


];

const MenuItem = ({ item, active, onClick }) => {
    // Use inline styles to change the size and opacity based on the active state
    const style = {
      width: active ? "300px" : "150px",
      height: active ? "300px" : "150px",
      opacity: active ? 1 : 0.5
    };
  
    return (
      // Use a div element with a background image and a text overlay
      <div
        className="menu-item"
        style={style}
        onClick={() => onClick(item.name)}
      >
        <div className="menu-item-image" style={{ backgroundImage: `url(${item.image})` }} />
        <div className="menu-item-text">{active ? item.text : item.name}</div>
      </div>
    );
  };
  
  // Define the main component for the menu
  const FisheyeMenu = () => {
    // Use a state variable to keep track of the active menu item
    const [activeItem, setActiveItem] = useState(null);
  
    // Define a handler function to change the active item
    const handleItemClick = (name) => {
      // If the clicked item is already active, set it to null
      // Otherwise, set it to the clicked item name
      setActiveItem(activeItem === name ? null : name);
    };
  
    return (
      // Use a div element with a flex layout to display the menu items
      <div className="menu">
        {menuItems.map((item) => (
          // Use the custom component for each item and pass the props
          <MenuItem
            key={item.name}
            item={item}
            active={item.name === activeItem}
            onClick={handleItemClick}
          />
        ))}
      </div>
    );
  };
  
  export default FisheyeMenu;