import { useNavigate } from "react-router-dom";
import mainbg from "../assets/project-dashboard/main-bg.jpg";
import { Hamburger2 } from "../components/Hamburger_2";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { getProjectsManager, getProjectsEmployee, reset } from "../features/project/projectSlice";

export const Project = () => {

  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, appErr, serverErr, projects} = useSelector(state => state.project);
  const { user } = useSelector(state => state.auth);

  const navigate = useNavigate();
  const colors = ["#163763", "#3452B9", "#005483", "#8E8E8E", "#3C3C3C"];

  useEffect(() => {
  
    if (user.role == "manager")
      dispatch(getProjectsManager());

    else
      dispatch(getProjectsEmployee());

  }, [dispatch]);

  useEffect(() => {
    
    if (isSuccess || isError)
    {
      dispatch(reset());
    }

  }, [isSuccess, isError, appErr, serverErr]);

  if (isLoading && projects.length == 0)
  {
    return (
      <div
      className="px-3 py-3"
      style={{
        backgroundImage: `url(${mainbg})`,
        backgroundRepeat: "repeat",
        minHeight: "92vh"
      }}
    >
      <div className="row">
        <div className="col-3">
          <Hamburger2 />
        </div>
        <div className="col-9" style={{marginTop: "-1vh"}}>
          <div style={{ minHeight: "85vh" }}>
            <div className="row">
              <Typography component="div" variant="h1" style={{marginTop: "2vh"}}>
                <Skeleton variant="rounded" animation="wave" width="100%" height="15vh" />
              </Typography>
              <Typography component="div" variant="h1" style={{marginTop: "2vh"}}>
                <Skeleton variant="rounded" animation="wave" width="100%" height="15vh" />
              </Typography>
              <Typography component="div" variant="h1" style={{marginTop: "2vh"}}>
                <Skeleton variant="rounded" animation="wave" width="100%" height="15vh" />
              </Typography>
              <Typography component="div" variant="h1" style={{marginTop: "2vh"}}>
                <Skeleton variant="rounded" animation="wave" width="100%" height="15vh" />
              </Typography>
              <Typography component="div" variant="h1" style={{marginTop: "2vh"}}>
                <Skeleton variant="rounded" animation="wave" width="100%" height="15vh" />
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div
      className="px-3 py-3"
      style={{
        backgroundImage: `url(${mainbg})`,
        backgroundRepeat: "repeat",
        minHeight: "92vh"
      }}
    >
      <div className="row">
        <div className="col-3">
          <Hamburger2 />
        </div>
        <div className="col-9 px-4" style={{marginTop: "-1vh"}}>
          <div>
            <div className="row">
              {projects.map((project, index) => (
                <button
                  key={index}
                  style={{
                    marginTop: index == 0 ? "0.5%" : "3vh",
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

                  onClick={() => navigate(`/projects/${project._id}/announcements`)}
                >
                  <div style={{ fontSize: "32px" }}>{project.name}</div>
                  <div style={{ fontSize: "20px" }}>{project.managerName}</div>
                </button>
              ))}

              {
                isSuccess && projects.length == 0 && <div className="display-1 mx-5">No projects found!</div>
              }

              {user.role == "manager" && <button
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
