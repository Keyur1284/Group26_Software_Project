import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faCar,
  faUtensils,
  faShoppingCart,
  faEdit,
  faTrashAlt,
  faHotel,
  faWallet
} from "@fortawesome/free-solid-svg-icons";

export const ExpenseCard = (props) => {
  const categoryIcons = {
    Travel: faPlaneDeparture,
    Car: faCar,
    Food: faUtensils,
    Shopping: faShoppingCart,
    Accommodation: faHotel,
    Other: faWallet
  };

  const categoryIcon = categoryIcons[props.category] || null;

  const cardColors = ["#163763", "#3452B9", "#005483", "#8E8E8E", "#3C3C3C"];

  const newColor = cardColors[props.ind % cardColors.length];
  
  return (
    <div className="container-fluid justify-content-end text-white">
      <div className="row d-flex justify-content-end mt-3 mb-4" style={{ fontSize: "20px", height: "15vh"}}>
        <div className="col-md-1 d-flex align-items-center justify-content-center shadow" style={{ backgroundColor: newColor,borderRadius: "15px 0px 0px 15px"}}>
          {categoryIcon && <FontAwesomeIcon icon={categoryIcon} size="2xl" />}
        </div>
        <div className="col-md-3 d-flex flex-column align-items-center justify-content-center shadow" style={{ backgroundColor: newColor }}>
          <div>{props.description}</div>
          <div style={{ fontSize: "12px" }}>{props.date}</div>
        </div>
        <div
          className="col-md-3 d-flex align-items-center justify-content-center shadow"
          style={{ backgroundColor: newColor }}
        >
          Rs. {props.amount}
        </div>
        <div
          className="col-md-3 d-flex align-items-center justify-content-center shadow"
          style={{ backgroundColor: newColor }}
        >
          {props.status}
        </div>
        <div
          className="col-md-1 d-flex align-items-center justify-content-center shadow"
          style={{ backgroundColor: newColor }}
        >
          <button
            type="button"
            className="btn btn-dark rounded-5"
            style={{ fontSize: "18px" }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
        <div
          className="col-md-1 d-flex align-items-center justify-content-center shadow"
          style={{
            backgroundColor: newColor,
            borderRadius: "0px 15px 15px 0px",
          }}
        >
          <button
            type="button"
            className="btn btn-dark rounded-5"
            style={{ fontSize: "18px" }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
}