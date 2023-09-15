import { useState } from 'react';

function RadioButtons({ selectedOption, setSelectedOption}) {

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='d-flex justify-content-evenly mt-3 mb-1'>
      <label className='mang'>
        <input
          type="radio"
          value="Manager"
          checked={selectedOption === 'Manager'}
          onChange={handleOptionChange}
        />
        Manager       
      </label>

          
      <label className='emp'>
        <input
          type="radio"
          value="Employee"
          checked={selectedOption === 'Employee'}
          onChange={handleOptionChange}
        />
        Employee
      </label>
       
    </div>
  );
}

export default RadioButtons;