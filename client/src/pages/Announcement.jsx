import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ig from "../assets/announcement-images/projectbg.jpg";
import mainbg from '../assets/project-dashboard/main-bg.jpg'
import { Hamburger4 } from "../components/Hamburger_4";

export const Announcement = () => {

  const { projectId } = useParams();

  const [announcement, setAnnouncement] = useState("");
  const [announcements, setAnnouncements] = useState([]);

  const handleAnnouncementChange = (e) => {
    setAnnouncement(e.target.value);
  };

  const handleAnnouncementSubmit = () => {
    setAnnouncements([...announcements, announcement]);
    setAnnouncement("");
  };

  return (
    <div className="px-3 py-3" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "repeat", minHeight: "92vh" }}>
    <div className="row">
      <div className="col-3">
        <Hamburger4 />
      </div>
      <div className="col-9 px-4">
        <ul className="nav nav-underline rounded">
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              style={{ color: "blue" }}
              to={`/projects/${projectId}/announcements`}
            >
              Stream
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" style={{ color: "black" }} to={`/projects/${projectId}/dashboard`}>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "black" }} href="#">
              Team Members
            </a>
          </li>
        </ul>
        <div className="row mt-4">
          <div className="col-md-12">
            <div
              className="card bg-primary"
              style={{
                height: "35vh",
                // backgroundImage: `url(${ig})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="card-body d-flex flex-column text-white">
                <h3 className="card-title mt-auto mb-2">Project_Name</h3>
                <h5>Manger_Name</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div
              className="input-group"
              style={{
                height: "7vh",
              }}
            >
              <textarea
                value={announcement}
                onChange={handleAnnouncementChange}
                className="form-control"
                placeholder="Type your announcement here"
              />
              <div className="input-group-append px-2">
                <button
                  style={{
                    height: "8vh",
                  }}
                  onClick={handleAnnouncementSubmit}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-4" style={{ color: "blue" }}>
                  Announcements
                </h4>
                {announcements
                  .slice()
                  .reverse()
                  .map((announcement, index) => (
                    <div className="card mb-2" key={index}>
                      <div
                        className="card-body py-2"
                        style={{ fontSize: "17px" }}
                      >
                        {announcement.split("\n").map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
