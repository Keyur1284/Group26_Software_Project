import { useState, useEffect } from "react";
import { Hamburger4 } from "../components/Hamburger_4";
import { useSelector, useDispatch } from "react-redux";
import {
  getEmployees,
  sendInvite,
  reset,
} from "../features/invite/inviteSlice";
import mainbg from "../assets/project-dashboard/main-bg.jpg";
import { useParams } from "react-router-dom";
import { message } from "antd";

export const EmployeeSearch = () => {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const {
    employees,
    isSuccess,
    result,
    isLoading,
    isError,
    appErr,
    serverErr,
  } = useSelector((state) => state.invite);

  const [searchTerm, setSearchTerm] = useState("");
  const [matchingEmployees, setMatchingEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() !== "") {
      const filteredEmployees = employees.filter((employee) =>
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

    setSearchTerm("");
    setMatchingEmployees([]);
  };

  const handleInvite = () => {
    const employees = selectedEmployees;
    const values = { employees, projectId };

    dispatch(sendInvite(values));

    setSelectedEmployees([]);
  };

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess && result) {
      message.success(result);
    }

    if (isSuccess || isError) {
      dispatch(reset());
    }
  }, [isSuccess, isError]);


  if (isLoading && employees.length > 0) {
    return (
      <>
        <div
          className="px-3 py-3"
          style={{
            backgroundImage: `url(${mainbg})`,
            backgroundRepeat: "repeat",
            minHeight: "92vh",
          }}
        >
          <div className="row">
            <div className="col-3">
              <Hamburger4 />
            </div>
            <div className="col-9">
              <div className="d-flex flex-column">
              <h1 className="display-6 fw-medium">Invite Employees</h1>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search Employee"
                className="rounded border-1 my-2 p-2"
                style={{ width: "90%" }}
              />
            
            <div className="mt-2 d-flex justify-content-center align-items-center gap-3" style={{ width: "90%" }}>
              <div className="display-6 fw-normal">Sending Invitations</div>
              <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
              </div>
            </div>
          
          </div>

            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div
      className="px-3 py-3"
      style={{
        backgroundImage: `url(${mainbg})`,
        backgroundRepeat: "repeat",
        minHeight: "92vh",
      }}
    >
      <div className="row">
        <div className="col-3">
          <Hamburger4 />
        </div>
        <div className="col-9">
          <h1 className="display-6 fw-medium">Invite Employees</h1>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Employee"
            className="rounded border-1 my-2 p-2"
            style={{ width: "90%" }}
          />
          {matchingEmployees.length > 0 &&
            matchingEmployees.map((employee) => (
              <p
                key={employee.email}
                onClick={() => handleEmployeeClick(employee)}
                style={{ cursor: "pointer", width: "90%" }}
                className="rounded my-1 p-2 bg-light"
              >
                {employee.email}
              </p>
            ))}
          {matchingEmployees.length === 0 && searchTerm.trim() !== "" && (
            <p className="rounded my-1 p-2 bg-light" style={{ width: "90%" }}>
              No matching employees found
            </p>
          )}
          {selectedEmployees.length > 0 && (
            <div>
              <h1 className="display-6 mt-4 fw-medium">Selected Employees:</h1>
              {selectedEmployees.map((employee) => (
                <p
                  key={employee.email}
                  className="rounded bg-light my-1 p-2"
                  style={{ width: "90%" }}
                >
                  {employee.email}
                </p>
              ))}
              <button className="btn btn-primary my-4" onClick={handleInvite}>
                Invite
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
