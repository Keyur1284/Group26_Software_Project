import { useState } from 'react';
import { Hamburger4 } from '../components/Hamburger_4';
import mainbg from '../assets/project-dashboard/main-bg.jpg';

export const EmployeeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [matchingEmployees, setMatchingEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const employees = [
    { email: 'employee1@example.com' },
    { email: 'employee2@example.com' },
    { email: 'employee3@example.com' },
    { email: 'employee4@example.com' },
    { email: 'employee5@example.com' },
    { email: 'employee6@example.com' },
    { email: 'employee7@example.com' },
  ];

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() !== '') {
      const filteredEmployees = employees.filter(employee =>
        employee.email.toLowerCase().includes(term.toLowerCase())
      );
      setMatchingEmployees(filteredEmployees);
    } else {
      setMatchingEmployees([]);
    }
  };

  const handleEmployeeClick = (employee) => {
    const isAlreadySelected = selectedEmployees.some(
      (selectedEmployee) => selectedEmployee.email === employee.email
    );

    if (!isAlreadySelected) {
      setSelectedEmployees([...selectedEmployees, employee]);
    }

    setSearchTerm('');
    setMatchingEmployees([]);
  };

  return (
    <div className="px-3 py-3" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "repeat", minHeight: '92vh' }}>
      <div className="row">
        <div className="col-3">
          <Hamburger4 />
        </div>
        <div className='col-9'>
          <h1 className='display-6'>Invite Employees</h1>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Employee"
            className='rounded border-1 my-2 p-2'
            style={{ width: '90%' }}
          />
          {matchingEmployees.length > 0 && (
            matchingEmployees.map(employee => (
              <p key={employee.email} onClick={() => handleEmployeeClick(employee)} style={{ cursor: "pointer", width: '90%' }} className='rounded my-1 p-2 bg-light'>
                {employee.email}
              </p>
            ))
          )}
          {selectedEmployees.length > 0 && (
            <div>
              <h1 className='display-6 mt-4'>Selected Employees:</h1>
              {selectedEmployees.map(employee => (
                <p key={employee.email} className='rounded bg-light my-1 p-2' style={{ width: '90%' }}>
                  {employee.email}
                </p>
              ))}
              <div className="btn btn-primary my-4">Invite</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
