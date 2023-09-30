import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faListCheck, faClipboard, faCircleCheck, faHouseCrack, faEdit } from '@fortawesome/free-solid-svg-icons';

export const HomeButton = () => {
    return (
      <div className="d-flex flex-column">
        <button
          variant="primary"
          className="rounded-4"
          style={{
            backgroundColor: '#3F76BF',
            height: '50px',                                                                                                                                                                                                                 
            marginBottom: '10px',
            fontSize:'20px',
            color: 'white'
          }}
        >
          <FontAwesomeIcon icon={faHome} />                  Home
        </button>
        </div>
    );
  };

  export const ProjectButton = () => {
    return (
      <div className="d-flex flex-column">
        <button
          variant="primary"
          className="rounded-4"
          style={{
            backgroundColor: '#3F76BF',
            height: '50px',
            marginBottom: '10px',
            fontSize:'20px',
            color: 'white'
          }}
        >
          <FontAwesomeIcon icon={faListCheck} />      My Projects
        </button>
        </div>
    );
  };

 export const ExpenseButton = () => {
    return (
      <div className="d-flex flex-column">
        <button
          variant="primary"
          className="rounded-4"
          style={{
            backgroundColor: '#3F76BF',
            height: '50px',
            fontSize:'20px',
            marginBottom: '10px',
            color: 'white'
          }}
        >
          <FontAwesomeIcon icon={faClipboard} />      Expenses
        </button>
        </div>
    );
  };

 export const AnalyticsButton = () => {
    return (
      <div className="d-flex flex-column">
        <button
          variant="primary"
          className="rounded-4"
          style={{
            backgroundColor: '#3F76BF',
            height: '50px',
            fontSize:'20px',
            marginBottom: '10px',
            color: 'white'
          }}
        >
          <FontAwesomeIcon icon={faCircleCheck} />      Analytics
        </button>
        </div>
    );
  };

 export const InsuranceButton = () => {
    return (
      <div className="d-flex flex-column">
        <button
          className="rounded-4"
          style={{
            backgroundColor: '#3F76BF',
            height: '50px',
            fontSize:'20px',
            marginBottom: '10px',
            color: 'white'
          }}
        >
          <FontAwesomeIcon icon={faHouseCrack} />     Insurance
        </button>
        </div>
    );
  };

 export const SettingButton = () => {
    return (
      <div className="d-flex flex-column">
        <button
          variant="primary"
          className="rounded-4"
          style={{
            backgroundColor: '#3F76BF',
            height: '50px',
            fontSize:'20px',
            marginBottom: '10px',
            color: 'white'
          }}
        >
          <FontAwesomeIcon icon={faEdit} />    My Settings
        </button>
        </div>
    );
  };
