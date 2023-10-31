import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faListCheck,faUser } from '@fortawesome/free-solid-svg-icons';

const buttonStyle = {
  backgroundColor: '#3F76BF', 
  transition: 'background-color 0.1s, transform 0.4s',
};

const hoverStyle = {
  backgroundColor: 'black',
  transform: 'scale(1.07)',
};

export const Hamburger2 = () => {
  const [buttonStates, setButtonStates] = useState([
    { isHovered: false },
    { isHovered: false }
  ]);

  const handleButtonHover = (index, isHovered) => {
    const newButtonStates = [...buttonStates];
    newButtonStates[index].isHovered = isHovered;
    setButtonStates(newButtonStates);
  };

  const buttons = [
    { icon: faListCheck, text: 'My Project', link : `/projects` },
    { icon: faUser, text: 'Profile' , link : `/profile`},
  ];

  return (
    <div>
      {buttons.map((button, index) => (
        <Link to = {button.link} key={button.text} className='text-decoration-none' > <div  className="d-flex flex-column">
          <div
            className="btn btn-primary rounded-4 my-button mb-3 fs-4"
            style={buttonStates[index].isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
            onMouseEnter={() => handleButtonHover(index, true)}
            onMouseLeave={() => handleButtonHover(index, false)}
          >
            <FontAwesomeIcon icon={button.icon} size="lg" /> {button.text}
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

