import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory, faPlus } from '@fortawesome/free-solid-svg-icons';
import { DisplayExpense } from "../components/DisplayExpense";
import { Hamburger } from "../components/Hamburger";
import mainbg from "../assets/project-dashboard/main-bg.jpg"

export const Expense = () => {
  return (
    <div className="px-3 py-3" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "repeat" }}>
      <div className="row">
        <div className="col-md-3">
          <Hamburger />
        </div>
        <div className="col-md-9">

          <div className="row d-flex align-items-center mb-3" style={{marginTop: "-2.5vh"}}>
          <div className="col-md-9">
              <div className="d-flex text-start display-6" style={{ fontSize:"80px", fontWeight: "600" }}>
                 Expense
               </div>
               <div style={{ fontSize: "30px" }}>
                 <FontAwesomeIcon icon={faHistory} style={{ marginRight: "10px" }} /> Expense History
               </div>
             </div>

             <div className="col-md-3 ">
                 <button
                   type="button"
                   className="btn btn-dark btn-rounded"
                   style={{ fontSize: "20px" }}>
                   <FontAwesomeIcon icon={faPlus} style={{ marginRight: "5px" }} /> Add Expense
                 </button>
             </div>

          </div>

            <div className="text-white d-flex justify-content-end mt-2 mb-2" style={{ fontSize: "25px", height: "10vh", fontWeight: "bold" }}>
              
              <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#0C438C", borderRadius: "15px 0px 0px 15px" }}>
                Description
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
            </div>
          <DisplayExpense />
        </div>
      </div>
    </div>
  );
}
