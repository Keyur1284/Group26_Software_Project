import { useParams, Link } from "react-router-dom";
import mainbg from "../assets/project-dashboard/main-bg.jpg";
import { Hamburger4 } from "../components/Hamburger_4";
import { FaUser } from "react-icons/fa";

const members = [
  { name: "John Doe" },
  { name: "Jane Doe" },
  { name: "Jack Doe" },
  { name: "Jill Doe" },
];
export const TeamMembers = () => {

  const { projectId } = useParams();

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
                className="nav-link"
                style={{ color: "black" ,fontSize: "20px" }}
                to={`/projects/${projectId}/dashboard`}
              >
                Dashboard
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
            <div className="col-md-12" border-radius="20px">
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
                    <h4 className="card-title px-1 py-3 text-white font-weight-bold">
                      <FaUser /> Manager_name
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12" border-radius="20px">
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
                    {members.map((member, index) => (
                      <h4 className="card-title px-1 py-3 text-white font-weight-bold">
                        <FaUser /> {member.name}
                      </h4>
                    ))}
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
