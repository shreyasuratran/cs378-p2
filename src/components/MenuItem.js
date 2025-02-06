import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.

const MenuItem = ({ title, description, price, imageName }) => {
    return (
      <div className="menu-item">
        <img src={imageName} alt={title} className="menu-image" />
        <div className="menu-text-content">
          <h5 className="menu-title">{title}</h5>
          <p className="menu-description">{description}</p>
          <div className="menu-price-button-container">
            <span className="menu-price">${price.toFixed(2)}</span>
            <button className="menu-add-button">Add</button>
          </div>
        </div>
      </div>
    );
  };
export default MenuItem;
