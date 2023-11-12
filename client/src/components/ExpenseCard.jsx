/* eslint-disable react/prop-types */
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../features/expense/expenseSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faUtensils,
  faEdit,
  faTrashAlt,
  faHotel,
  faWrench,
  faArchive,
  faGift,
  faBullhorn,
  faLaptop,
  faGlassMartini,
  faEllipsisH

} from "@fortawesome/free-solid-svg-icons";

export const ExpenseCard = (props) => {

  const { projectId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryIcons = {
    Travel: faPlaneDeparture,
    Food: faUtensils,
    Accommodation: faHotel,
    Utilities: faWrench,
    OfficeSupplies: faArchive,
    Gifts: faGift,
    Advertising: faBullhorn,
    Technology: faLaptop,
    Entertainment: faGlassMartini,
    Miscellaneous: faEllipsisH

  };

  const categoryIcon = categoryIcons[props.category] || null;

  const cardColors = ["#163763", "#3452B9", "#005483", "#8E8E8E", "#3C3C3C"];

  const newColor = cardColors[props.ind % cardColors.length];
  
  if(props.userType == "employee")
  {
    return (
      <div className="container-fluid text-white">
        <div className="row d-flex flex-row mt-3 mb-4" style={{ fontSize: "20px", height: "15vh"}}>
        <Link to={`/projects/${projectId}/expenses/${props.expenseId}`} className="text-decoration-none col-md-10 text-white p-0">
          <div className="d-flex col-md-12 p-0" style={{ fontSize: "20px", height: "15vh"}}>
            <div className="d-flex col-md-1 align-items-center justify-content-center shadow" style={{ backgroundColor: newColor,borderRadius: "15px 0px 0px 15px"}}>
              {categoryIcon && <FontAwesomeIcon icon={categoryIcon} size="2xl" />}
            </div>
            <div className="d-flex col-md-4 flex-column align-items-center justify-content-center shadow" style={{ backgroundColor: newColor }}>
              <div>{props.name}</div>
              <div style={{ fontSize: "12px" }}>{props.date}</div>
            </div>
            <div className="d-flex col-md-3 align-items-center justify-content-center shadow"
              style={{ backgroundColor: newColor }}
            >
              &#8377; {props.amount}
            </div>
            <div className="d-flex col-md-4 align-items-center justify-content-center shadow"
              style={{ backgroundColor: newColor }}
            >
              {props.status}
            </div>
          </div>
          </Link>
          <div className="d-flex col-md-2 p-0">
            <div className="col-md-6 d-flex align-items-center justify-content-center shadow"
              style={{ backgroundColor: newColor }}
            >
              <button
                type="button"
                className={`btn btn-dark ${props.status !== "Pending" && "disabled"} rounded-5`}
                style={{ fontSize: "18px" }}
                onClick={() => navigate(`/projects/${projectId}/expenses/${props.expenseId}/edit-expense`)}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center shadow"
              style={{
                backgroundColor: newColor,
                borderRadius: "0px 15px 15px 0px",
              }}
            >
            <button
                type="button"
                className={`btn btn-dark ${props.status !== "Pending" && "disabled"} rounded-5`}
                style={{ fontSize: "18px" }}
                onClick={() => dispatch(deleteExpense(props.expenseId))}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else
  {
    return (
      <Link to={`/projects/${projectId}/expenses/${props.expenseId}`} className="text-decoration-none" >
      <div className="container-fluid justify-content-end text-white">
        <div className="row d-flex justify-content-end mt-3 mb-4" style={{ fontSize: "20px", height: "15vh"}}>
          <div className="col-md-1 d-flex align-items-center justify-content-center shadow" style={{ backgroundColor: newColor,borderRadius: "15px 0px 0px 15px"}}>
            {categoryIcon && <FontAwesomeIcon icon={categoryIcon} size="2xl" />}
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center justify-content-center shadow" style={{ backgroundColor: newColor }}>
            <div>{props.name}</div>
            <div style={{ fontSize: "12px" }}>{props.date}</div>
          </div>
          <div
            className="col-md-2 d-flex align-items-center justify-content-center shadow"
            style={{ backgroundColor: newColor }}
          >
            &#8377; {props.amount}
          </div>
          <div
            className="col-md-3 d-flex align-items-center justify-content-center shadow"
            style={{ backgroundColor: newColor }}
          >
            {props.addedBy}
          </div>
          <div
            className="col-md-2 d-flex align-items-center justify-content-center shadow"
            style={{ backgroundColor: newColor,
              borderRadius: "0px 15px 15px 0px",
            }}
          >
            {props.status}
          </div>
        </div>
      </div>
      </Link>
    );
  }
  
}