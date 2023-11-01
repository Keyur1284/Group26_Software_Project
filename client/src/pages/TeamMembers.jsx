import { useParams, Link } from "react-router-dom";
import mainbg from "../assets/project-dashboard/main-bg.jpg";
import { Hamburger4 } from "../components/Hamburger_4";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { FaUser } from "react-icons/fa";
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMembers } from "../features/team/teamSlice";

export const TeamMembers = () => {

  const { projectId } = useParams();
  const dispatch = useDispatch();

  const { manager, employees, isLoading, isSuccess, isError, appErr, serverErr } = useSelector((state) => state.team);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMembers(projectId));
  }, [dispatch, projectId]);

  if (isLoading) {
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
        <div className="col-9 px-4">
          <ul className="nav nav-underline rounded">
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "black",fontSize: "20px"  }}
                to={`/projects/${projectId}/announcements`}
              >
                Stream
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                style={{ color: "blue",fontSize: "20px"  }}
                to={`/projects/${projectId}/team-members`}
              >
                Team Members
              </Link>
            </li>
          </ul>
          <div className="row mt-4">
            <div className="col-md-12">
              <div
                className="card"
                style={{
                  height: "28vh",
                  background: "#163763",
                }}
              >
                <div className="card-body d-flex flex-column">
                  <div className="card py-1" style={{ background: "#5C91D8" }}>
                    <h3 className="card-title px-3 text-white font-weight-bold">
                      Manager
                    </h3>
                  </div>
                  <div>
                  <Typography component="div" variant="h1" style={{marginTop: "2vh", backgroundColor: "white", opacity: 0.15}}>
                    <Skeleton variant="rounded" width="100%" height="15vh" />
                  </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <div
                className="card"
                style={{
                  background: "#163763",
                }}
              >
                <div className="card-body d-flex flex-column">
                  <div className="card py-1" style={{ background: "#5C91D8" }}>
                    <h3 className="card-title px-3 text-white font-weight-bold">
                      Team Members
                    </h3>
                  </div>
                  <div className="members">
                  <Typography component="div" variant="h1" style={{marginTop: "2vh", backgroundColor: "white", opacity: 0.15}}>
                    <Skeleton variant="rounded" width="100%" height="6vh" />
                  </Typography>
                  <Typography component="div" variant="h1" style={{marginTop: "2vh", backgroundColor: "white", opacity: 0.15}}>
                    <Skeleton variant="rounded" width="100%" height="6vh" />
                  </Typography>
                  <Typography component="div" variant="h1" style={{marginTop: "2vh", backgroundColor: "white", opacity: 0.15}}>
                    <Skeleton variant="rounded" width="100%" height="6vh" />
                  </Typography>
                  </div>
                </div>
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
        <div className="col-9 px-4">
          <ul className="nav nav-underline rounded">
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "black",fontSize: "20px"  }}
                to={`/projects/${projectId}/announcements`}
              >
                Stream
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                style={{ color: "blue",fontSize: "20px"  }}
                to={`/projects/${projectId}/team-members`}
              >
                Team Members
              </Link>
            </li>
          </ul>
          <div className="row mt-4">
            <div className="col-md-12">
              <div
                className="card"
                style={{
                  height: "28vh",
                  background: "#163763",
                }}
              >
                <div className="card-body d-flex flex-column">
                  <div className="card py-1" style={{ background: "#5C91D8" }}>
                    <h3 className="card-title px-3 text-white font-weight-bold">
                      Manager
                    </h3>
                  </div>
                  <div>
                    <h4 className="card-title px-1 py-3 align-items-center d-flex text-white font-weight-bold">
                      <ManageAccountsIcon sx={{fontSize: 40, marginRight: "1vh"}} /> {manager.firstName} {manager.lastName}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <div
                className="card"
                style={{
                  background: "#163763",
                }}
              >
                <div className="card-body d-flex flex-column">
                  <div className="card py-1" style={{ background: "#5C91D8" }}>
                    <div className="d-flex justify-content-between align-items-center">
                    <h3 className="card-title px-3 text-white font-weight-bold">
                      Team Members
                    </h3>
                    {user.role == "manager" && <Link to={ `/projects/${projectId}/invite-employee`} className="text-decoration-none"><h3 className="card-title px-3 mt-2 text-white font-weight-bold">
                      <PersonAddIcon sx={{fontSize: 40}}/> Invite Members
                    </h3></Link>}
                    </div>
                  </div>
                  <div className="members">
                    {employees.map((employee, index) => (
                      <h4
                        className="card-title px-1 py-3 text-white font-weight-bold"
                        key={index}
                      >
                        <FaUser /> {" "} {employee.firstName || employee.name} {employee.lastName}
                      </h4>
                    ))}

                    {employees.length === 0 && (
                      <h4
                        className="card-title px-1 py-3 text-white font-weight-bold"
                      >
                        No employees have been added to this project yet.
                      </h4>
                    )}


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
