import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faListCheck, faClipboard, faCircleCheck, faUser } from '@fortawesome/free-solid-svg-icons';
import DashboardIcon from '@mui/icons-material/Dashboard';

const buttonStyle = {
  backgroundColor: '#3F76BF', 
  transition: 'background-color 0.1s, transform 0.4s',
};

const hoverStyle = {
  backgroundColor: 'black',
  transform: 'scale(1.07)',
};

export const Hamburger4 = () => { 

  const { projectId } = useParams();
  const { user } = useSelector((state) => state.auth);
  
  const [buttonStates, setButtonStates] = useState([
    { isHovered: false },
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
    { icon: faListCheck, text: 'My Projects', link: `/projects` },
    { icon: faHome, text: 'Project Home', link: `/projects/${projectId}/announcements` },
    { icon: DashboardIcon, text: 'Project Dashboard', link: `/projects/${projectId}/dashboard` },
    { icon: faClipboard, text: 'Project Expenses', link: `/projects/${projectId}/expenses` },
    { icon: faUser, text: 'Profile', link: `/profile` },
  ];
  
  if (user?.role == 'manager') {
    buttons.splice(4, 0, { icon: faCircleCheck, text: 'Project Analytics', link: `/projects/${projectId}/analytics` });
  }
  
  return (
    <div>
      {buttons.map((button, index) => (
        <Link to={button.link} key={index} className='text-decoration-none'>
          <div className="d-flex flex-column">
            {index !== 2 && (
              <div
                className="btn btn-primary rounded-4 my-button mb-3 fs-4"
                style={buttonStates[index].isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
                onMouseEnter={() => handleButtonHover(index, true)}
                onMouseLeave={() => handleButtonHover(index, false)}
              >
                <FontAwesomeIcon icon={button.icon} size="lg" /> {button.text}
              </div>
            )}
            {index === 2 && (
              <div
                className="btn btn-primary rounded-4 my-button mb-3 fs-4"
                style={buttonStates[index].isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
                onMouseEnter={() => handleButtonHover(index, true)}
                onMouseLeave={() => handleButtonHover(index, false)}
              >
                <DashboardIcon sx={{ fontSize: 30 }} /> {button.text}
              </div>
            )}
          </div>
        </Link>
      ))}

    </div>
  );
};
