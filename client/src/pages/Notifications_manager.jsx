import "bootstrap/dist/css/bootstrap.css";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import mainbg from "../assets/project-dashboard/main-bg.jpg";

export const Notifications_manager = () => {
  const notification_data = [
    {
      employeeName: "John Doe",
      text: " has added a new expense in ",
      projectName: "Project A",
      time:"9:30 am",
      expName: "Expense 1",
    },
    {
      employeeName: "Jane Doe",
      text: " has added a new expense in ",
      projectName: "Project B",
      time:"9:30 am",
      expName: "Expense 2",
    },
    {
      employeeName: "Jill Doe",
      text: " has added a new expense in ",
      projectName: "Project C",
      time:"9:30 am",
      expName: "Expense 3",
    },
  ];

  return (
    <div
      className="px-3 py-3"
      style={{
        backgroundImage: `url(${mainbg})`,
        backgroundRepeat: "repeat",
        minHeight: "92vh",
      }}
    >
        <h1 className="px-4 py-4" style={{color:"#013E8F"}}>Notifications</h1>

    <div className="col-md-12 ">
      {notification_data.map((card, index) => (
        <div
          key={index}
          className="card"
          style={{
            margin: "10px",
            height: "17vh",
            borderRadius: "20px",
            background: "linear-gradient(180deg, #5B89C8 0%, rgba(255, 255, 255, 0.00) 70%)",
            position: "relative",
          }}
        >
          <div className="card-body">
            <h3 className="card-title px-4" style={{ color: "#00000066" }}>
              <CircleRoundedIcon sx={{ color: "#013E8F" }} />
              <span style={{ marginLeft: 17 }}>
                <strong style={{ color: "black" }}>{card.employeeName}</strong>
                {card.text}
                <strong style={{ color: "black" }}>{card.projectName}</strong>
              </span>
            </h3>
          </div>
          <div
            style={{
              position: "absolute",
              top: "27px",
              right: "47px",
              color: "#00000080",
            }}
          >
    <h5><strong>{card.time}</strong></h5>
          </div>
      <div className="d-flex justify-content-between">
          <div style={{ position: "relative", bottom: "17px", left: "80px" ,display: 'inline-block'}}>
            <div
              className="card px-4"
              style={{
                backgroundColor: "#4E79B2",
                color: "#fff",
                borderRadius: "25px",
              }}
            >
              <h3> {card.expName}</h3>
            </div>
          </div>
          </div>
          <div style={{ position: "absolute", bottom: "17px", right: "20px" }}>
        <button className="btn text-white" style={{ borderRadius: "25px" ,backgroundColor:"#013E8F"}}><h5>Mark as read</h5></button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};
