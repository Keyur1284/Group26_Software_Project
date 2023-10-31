import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faListCheck, faClipboard, faCircleCheck, faUser } from '@fortawesome/free-solid-svg-icons';

const buttonStyle = {
  backgroundColor: '#3F76BF', 
  transition: 'background-color 0.1s, transform 0.4s',
};

const hoverStyle = {
  backgroundColor: 'black',
  transform: 'scale(1.07)',
};

export const Hamburger4 = () => {
  const [buttonStates, setButtonStates] = useState([
    { isHovered: false },
    { isHovered: false },
    { isHovered: false },
    { isHovered: false },
    { isHovered: false }
  ]);

  const handleButtonHover = (index, isHovered) => {
    const newButtonStates = [...buttonStates];
    newButtonStates[index].isHovered = isHovered;
    setButtonStates(newButtonStates);
  };

  const buttons = [
    { icon: faHome, text: 'Project Home' },
    { icon: faListCheck, text: 'My Project' },
    { icon: faClipboard, text: 'Expense' },
    { icon: faCircleCheck, text: 'Analytics' },
    { icon: faUser, text: 'Profile' },
  ];

  return (
    <div>
      {buttons.map((button, index) => (
        <div key={button.text} className="d-flex flex-column">
          <div
            className="btn btn-primary rounded-4 my-button mb-3 fs-4"
            style={buttonStates[index].isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
            onMouseEnter={() => handleButtonHover(index, true)}
            onMouseLeave={() => handleButtonHover(index, false)}
          >
            <FontAwesomeIcon icon={button.icon} size="lg" /> {button.text}
          </div>
        </div>
      ))}
    </div>
  );
};
