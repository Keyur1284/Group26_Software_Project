import { useNavigate } from "react-router-dom";
import mainbg from "../assets/project-dashboard/main-bg.jpg";
import { Hamburger2 } from "../components/Hamburger_2";

const projects = [
  { name: "Project 1", managerName: "Manager 1"},
  { name: "Project 2", managerName: "Manager 2"},
  { name: "Project 3", managerName: "Manager 3"},
  { name: "Project 4", managerName: "Manager 4"},
  { name: "Project 5", managerName: "Manager 5"},
]

export const Project = () => {

  const navigate = useNavigate();
  const colors = ["#163763", "#3452B9", "#005483", "#8E8E8E", "#3C3C3C"];

  const role = "manager";

  return (
    <div
      className="px-3 py-3"
      style={{
        backgroundImage: `url(${mainbg})`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="row">
        <div className="col-3">
          <Hamburger2 />
        </div>
        <div className="col-9 px-4" style={{marginTop: "-1vh"}}>
          <div style={{ minHeight: "85vh" }}>
            <div className="row">
              {projects.map((project, index) => (
                <button
                  key={index}
                  style={{
                    margin: "0.5%",
                    padding: "2.5%",
                    backgroundColor:  colors[index % colors.length],
                    color: "#fff",
                    border: "none",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    textAlign: "left",
                    boxShadow: "0px 4px 8px rgba(5, 5, 5, 5)",
                  }}
                >
                  <div style={{ fontSize: "32px" }}>{project.name}</div>
                  <div style={{ fontSize: "20px" }}>{project.managerName}</div>
                </button>
              ))}
              {role == "manager" && <button
                style={{
                  position: "absolute",
                  bottom: "25px",
                  right: "10px",
                  width: "50px",
                  height: "50px",
                  fontSize: "24px",
                  border: "none",
                  borderRadius: "50%",
                  backgroundColor: "blue",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/add-project")}
              >
                +
              </button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
