import { useState } from 'react';

function RadioButtons() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='radio'>
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