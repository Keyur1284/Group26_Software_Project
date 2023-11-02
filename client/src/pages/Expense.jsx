import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory, faPlus, faFilter } from "@fortawesome/free-solid-svg-icons";
import { DisplayExpense } from "../components/DisplayExpense";
import { Hamburger4 } from "../components/Hamburger_4";
import mainbg from "../assets/project-dashboard/main-bg.jpg";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

export const Expense = () => {

  const { projectId } = useParams();

  const [selectedDateOption, setSelectedDateOption] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDateOptionChange = (event) => {
    const newDateOption = event.target.value;
    setSelectedDateOption(newDateOption);
  };

  const handleStartDateChange = (event) => {
    const newStartDate = event.target.value;
    setStartDate(newStartDate);
  };

  const handleEndDateChange = (event) => {
    const newEndDate = event.target.value;
    setEndDate(newEndDate);
  };

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
  };

  const { user } = useSelector((state) => state.auth);
  const { expenses, isSuccess, isLoading } = useSelector((state) => state.expense);
  const role = user.role;

  if (isLoading && expenses.length == 0)
  {
    return (
      <>
        <div className="px-3 py-3" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "repeat", minHeight:"92vh" }}>
        <div className="row">
          <div className="col-md-3">
            <Hamburger4 />
          </div>
          <div className="col-md-9">
            <div className="row d-flex align-items-center mb-3" style={{ marginTop: "-2.5vh" }}>
              <div className="col-md-9">
                <div className="d-flex text-start display-6" style={{ fontSize: "80px", fontWeight: "600" }}>
                  Expenses
                </div>
                <div style={{ fontSize: "30px" }}>
                  <FontAwesomeIcon icon={faHistory} style={{ marginRight: "10px" }} /> Expense History
                </div>
              </div>
                <div className="col-md-3 d-flex align-items-center justify-content-end">
                  <div className="mr-3">
                    <Link to={`/projects/${projectId}/add-expense`} className="btn btn-dark btn-rounded rounded-pill shadow-lg" style={{ fontSize: "25px" }}>
                      <FontAwesomeIcon icon={faPlus} style={{ marginRight: "5px" }} /> Add Expense
                    </Link>
                  </div>
                </div>
            </div>
            <Typography component="div" variant="h1" style={{marginTop: "2vh"}}>
                <Skeleton variant="rounded" width="100%" height="15vh" />
              </Typography>
              <Typography component="div" variant="h1" style={{marginTop: "2vh"}}>
                <Skeleton variant="rounded" width="100%" height="15vh" />
              </Typography>
              <Typography component="div" variant="h1" style={{marginTop: "2vh"}}>
                <Skeleton variant="rounded" width="100%" height="15vh" />
              </Typography>
              <Typography component="div" variant="h1" style={{marginTop: "2vh"}}>
                <Skeleton variant="rounded" width="100%" height="15vh" />
              </Typography>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  if (role == "employee")
  {
    return (
      <div className="px-3 py-3" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "repeat", minHeight:"92vh" }}>
        <div className="row">
          <div className="col-md-3">
            <Hamburger4 />
          </div>
          <div className="col-md-9">
            <div className="row d-flex align-items-center mb-3" style={{ marginTop: "-2.5vh" }}>
              <div className="col-md-9">
                <div className="d-flex text-start display-6" style={{ fontSize: "80px", fontWeight: "600" }}>
                  Expenses
                </div>
                <div style={{ fontSize: "30px" }}>
                  <FontAwesomeIcon icon={faHistory} style={{ marginRight: "10px" }} /> Expense History
                </div>
              </div>
                <div className="col-md-3 d-flex align-items-center justify-content-end">
                  <div className="mr-3">
                    <Link to={`/projects/${projectId}/add-expense`} className="btn btn-dark btn-rounded rounded-pill shadow-lg" style={{ fontSize: "25px" }}>
                      <FontAwesomeIcon icon={faPlus} style={{ marginRight: "5px" }} /> Add Expense
                    </Link>
                  </div>
                </div>
            </div>
            <div className="row d-flex align-items-center mb-3">
            {expenses.length > 0 && <div className="col-md-12 d-flex align-items-center justify-content-end">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faFilter} size="2xl" style={{ marginRight: "10px" }} />
                  <select
                    value={selectedDateOption}
                    onChange={handleDateOptionChange}
                    className="form-select form-select-lg rounded-pill"
                    style={{
                      backgroundColor: "white",
                      color: "#000000",
                      cursor: "pointer",
                      marginRight: "10px"
                    }}
                  >
                    <option value="">None</option>
                    <option value="days">Last 7 days</option>
                    <option value="month">Last 1 month</option>
                    <option value="custom_date">Custom Date</option>
                  </select>
                </div>
                {selectedDateOption === "custom_date" && (
                  <div className="d-flex align-items-center" style={{ marginRight: "10px" }}>
                    <label style={{ marginRight: "5px" }}>From</label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={handleStartDateChange}
                      className="form-control rounded-pill"
                      style={{
                        backgroundColor: "white",
                        color: "#000000",
                        cursor: "pointer",
                      }}
                    />
                    <label style={{ marginRight: "5px", marginLeft: "5px"}}>To</label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={handleEndDateChange}
                      className="form-control rounded-pill"
                      style={{
                        backgroundColor: "white",
                        color: "#000000",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                )}
                <div className="d-flex align-items-center" style={{ marginLeft: "10px" }}>
                  <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="form-select form-select-lg rounded-pill"
                    style={{
                      backgroundColor: "white",
                      color: "#000000",
                      cursor: "pointer",
                    }}>

                    <option value="">None</option>
                    <option value="travel">Travel</option>
                    <option value="food">Food</option>
                    <option value="accommodation">Accommodation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {selectedCategory === "category" && (
                  <div className="d-flex align-items-center">
                    <input
                      type="text"
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                      className="form-control rounded-pill"
                      placeholder="Category"
                      style={{
                        backgroundColor: "white",
                        color: "#000000",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                )}
              </div>}
            </div>
            {expenses.length > 0 && <div className="text-white d-flex justify-content-end mt-2 mb-2" style={{ fontSize: "22px", height: "10vh", fontWeight: "bold" }}>
              <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C", borderRadius: "15px 0px 0px 15px" }}>
                Name
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C" }}>
                Amount
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C" }}>
                  Status
                </div>
              <div className="col-md-1 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C" }}>
                Edit
              </div>
              <div className="col-md-1 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C", borderRadius: "0px 15px 15px 0px" }}>
                Delete
              </div>
            </div>}
            
            {
                expenses.length == 0 && <div className="display-1">No expenses found!</div>
            }
            <DisplayExpense />
          </div>
        </div>
      </div>
    );
  }
  else
  {
    return (
      <div className="px-3 py-3" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "repeat", minHeight: "92vh" }}>
        <div className="row">
          <div className="col-md-3">
            <Hamburger4 />
          </div>
          <div className="col-md-9">
            <div className="row d-flex align-items-center mb-3" style={{ marginTop: "-2.5vh" }}>
              <div className="col-md-9">
                <div className="d-flex text-start display-6" style={{ fontSize: "80px", fontWeight: "600" }}>
                  Expenses
                </div>
                <div style={{ fontSize: "30px" }}>
                  <FontAwesomeIcon icon={faHistory} style={{ marginRight: "10px" }} /> Expense History
                </div>
              </div>
            </div>
            <div className="row d-flex align-items-center mb-3">
            {expenses.length > 0 && <div className="col-md-12 d-flex align-items-center justify-content-end">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faFilter} size="2xl" style={{ marginRight: "10px" }} />
                  <select
                    value={selectedDateOption}
                    onChange={handleDateOptionChange}
                    className="form-select form-select-lg rounded-pill"
                    style={{
                      backgroundColor: "white",
                      color: "#000000",
                      cursor: "pointer",
                      marginRight: "10px"
                    }}
                  >
                    <option value="">None</option>
                    <option value="days">Last 7 days</option>
                    <option value="month">Last 1 month</option>
                    <option value="custom_date">Custom Date</option>
                  </select>
                </div>
                {selectedDateOption === "custom_date" && (
                  <div className="d-flex align-items-center" style={{ marginRight: "10px" }}>
                    <label style={{ marginRight: "5px" }}>From</label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={handleStartDateChange}
                      className="form-control rounded-pill"
                      style={{
                        backgroundColor: "white",
                        color: "#000000",
                        cursor: "pointer",
                      }}
                    />
                    <label style={{ marginRight: "5px", marginLeft: "5px"}}>To</label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={handleEndDateChange}
                      className="form-control rounded-pill"
                      style={{
                        backgroundColor: "white",
                        color: "#000000",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                )}
                <div className="d-flex align-items-center" style={{ marginLeft: "10px" }}>
                  <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="form-select form-select-lg rounded-pill"
                    style={{
                      backgroundColor: "white",
                      color: "#000000",
                      cursor: "pointer",
                    }}>

                    <option value="">None</option>
                    <option value="travel">Travel</option>
                    <option value="food">Food</option>
                    <option value="accommodation">Accommodation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {selectedCategory === "category" && (
                  <div className="d-flex align-items-center">
                    <input
                      type="text"
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                      className="form-control rounded-pill"
                      placeholder="Category"
                      style={{
                        backgroundColor: "white",
                        color: "#000000",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                )}
              </div>}
            </div>
            {expenses.length > 0 && <div className="text-white d-flex justify-content-end mt-2 mb-2" style={{ fontSize: "22px", height: "10vh", fontWeight: "bold" }}>
              <div className="col-md-5 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C", borderRadius: "15px 0px 0px 15px" }}>
                Name
              </div>
              <div className="col-md-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C" }}>
                Amount
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C" }}>
                Added by
              </div>
              {/* <div className="col-md-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C" }}>
                Status
              </div>
              <div className="col-md-1 d-flex align-items-center" style={{ backgroundColor: "#0C438C" }}>
                Edit
              </div> */}
              <div className="col-md-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#0C438C", borderRadius: "0px 15px 15px 0px" }}>
                Status
              </div>
            </div>}
            
            {
              expenses.length == 0 && <div className="display-1">No expenses found!</div>
            }
            <DisplayExpense />
          </div>
        </div>
      </div>
    );
  }
};
