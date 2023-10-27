import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory, faPlus, faFilter } from '@fortawesome/free-solid-svg-icons';
import { DisplayExpense } from "../components/DisplayExpense";
import { Hamburger } from "../components/Hamburger";
import mainbg from "../assets/project-dashboard/main-bg.jpg";
import { useState } from "react";

export const Expense = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  // const filterExpenses = (filterOption) => {
  // };

  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    setSelectedFilter(newFilter);
    // filterExpenses(newFilter);
  };

  const user = "employee";

  if(user === "employee")
  {
    return (
      <div className="px-3 py-3" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "repeat" }}>
        <div className="row">
          <div className="col-md-3">
            <Hamburger />
          </div>
          <div className="col-md-9">
            <div className="row d-flex align-items-center mb-3" style={{ marginTop: "-2.5vh" }}>
              <div className="col-md-9">
                <div className="d-flex text-start display-6" style={{ fontSize: "80px", fontWeight: "600" }}>
                  Expense
                </div>
                <div style={{ fontSize: "30px" }}>
                  <FontAwesomeIcon icon={faHistory} style={{ marginRight: "10px" }} /> Expense History
                </div>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end">
                <div className="mr-3">
                  <button
                    type="button"
                    className="btn btn-dark btn-rounded"
                    style={{ fontSize: "20px" }}
                  >
                    <FontAwesomeIcon icon={faPlus} style={{ marginRight: "5px" }} /> Add Expense
                  </button>
                </div>
              </div>
            </div>
            <div className="row d-flex align-items-center mb-3">
              <div className="col-md-3"></div>
              <div className="col-md-9 d-flex align-items-center justify-content-end">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faFilter} size="2xl" />
                  <select
                    value={selectedFilter}
                    onChange={handleFilterChange}
                    className="form-select form-select-lg rounded-pill"
                    style={{
                      backgroundColor: "white", 
                      color: "#000000", 
                      cursor: "pointer",
                    }}
                  > 
                    <option>None</option>
                    <option>Date</option>
                    <option>Category</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="text-white d-flex justify-content-end mt-2 mb-2" style={{ fontSize: "22px", height: "10vh", fontWeight: "bold" }}>
              <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C", borderRadius: "15px 0px 0px 15px" }}>
                Description
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C" }}>
                Amount
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C" }}>
                Status
              </div>
              <div className="col-md-1 d-flex align-items-center" style={{ backgroundColor: "#0C438C" }}>
                Edit
              </div>
              <div className="col-md-1 d-flex align-items-center" style={{ backgroundColor: "#0C438C", borderRadius: "0px 15px 15px 0px" }}>
                Delete
              </div>
            </div>
            <DisplayExpense
              userType={user} />
          </div>
        </div>
      </div>
    );
  }
  else
  {
    return (
      <div className="px-3 py-3" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "repeat" }}>
        <div className="row">
          <div className="col-md-3">
            <Hamburger />
          </div>
          <div className="col-md-9">
            <div className="row d-flex align-items-center mb-3" style={{ marginTop: "-2.5vh" }}>
              <div className="col-md-9">
                <div className="d-flex text-start display-6" style={{ fontSize: "80px", fontWeight: "600" }}>
                  Expense
                </div>
                <div style={{ fontSize: "30px" }}>
                  <FontAwesomeIcon icon={faHistory} style={{ marginRight: "10px" }} /> Expense History
                </div>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end">
                <div className="mr-3">
                  <button
                    type="button"
                    className="btn btn-dark btn-rounded"
                    style={{ fontSize: "20px" }}
                  >
                    <FontAwesomeIcon icon={faPlus} style={{ marginRight: "5px" }} /> Add Expense
                  </button>
                </div>
              </div>
            </div>
            <div className="row d-flex align-items-center mb-3">
              <div className="col-md-3"></div>
              <div className="col-md-9 d-flex align-items-center justify-content-end">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faFilter} size="2xl" />
                  <select
                    value={selectedFilter}
                    onChange={handleFilterChange}
                    className="form-select form-select-lg rounded-pill"
                    style={{
                      backgroundColor: "white", 
                      color: "#000000", 
                      cursor: "pointer",
                    }}
                  > 
                    <option>None</option>
                    <option>Date</option>
                    <option>Category</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="text-white d-flex justify-content-end mt-2 mb-2" style={{ fontSize: "22px", height: "10vh", fontWeight: "bold" }}>
              <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C", borderRadius: "15px 0px 0px 15px" }}>
                Description
              </div>
              <div className="col-md-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C" }}>
                Amount
              </div>
              <div className="col-md-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C" }}>
                Added by
              </div>
              <div className="col-md-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C" }}>
                Status
              </div>
              <div className="col-md-1 d-flex align-items-center" style={{ backgroundColor: "#0C438C" }}>
                Edit
              </div>
              <div className="col-md-1 d-flex align-items-center" style={{ backgroundColor: "#0C438C", borderRadius: "0px 15px 15px 0px" }}>
                Delete
              </div>
            </div>
            <DisplayExpense
              userType={user} />
          </div>
        </div>
      </div>
    );
  }
  
};
