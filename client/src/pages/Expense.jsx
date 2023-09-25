import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory, faPlus } from '@fortawesome/free-solid-svg-icons'; // Import the plus icon
import { DisplayExpense } from "../components/DisplayExpense";

export const Expense = () => {

  return (
    <div>
      <div>
        <div className="container-fluid justify-content-end">
          <div className="row d-flex justify-content-end mt-2 mb-2" style={{ fontSize: "80px", height: "30vh" }}>
            <div className="col-md-6">
              <div className="d-flex text-start display-6" style={{ fontSize:"80px", fontWeight: "700" }}>
                Expense
              </div>
              <div style={{ fontSize: "30px" }}>
                <FontAwesomeIcon icon={faHistory} style={{ marginRight: "10px" }} /> Expense History
              </div>
            </div>

            <div className="col-md-3 ">
              <div className="align-items-center justify-content-center">
                <button
                  type="button"
                  className="btn btn-dark btn-rounded"
                  style={{ fontSize: "20px" }}>
                  <FontAwesomeIcon icon={faPlus} style={{ marginRight: "5px" }} /> Add Expense
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid justify-content-end text-white">
          <div className="row d-flex justify-content-end mt-2 mb-2" style={{ fontSize: "25px", height: "10vh", fontWeight: "bold" }}>

            <div className="col-md-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C", borderRadius: "15px 0px 0px 15px" }}>
              Description
            </div>

            <div className="col-md-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C" }}>
              Amount
            </div>

            <div className="col-md-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C" }}>
              Status
            </div>

            <div className="col-md-1 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C" }}>
              Edit
            </div>

            <div className="col-md-1 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C", borderRadius: "0px 15px 15px 0px" }}>
              Delete
            </div>

          </div>
        </div>
      </div>
      <DisplayExpense />
    </div>
  );
}