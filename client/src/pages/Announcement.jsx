import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ig from "../assets/announcement-images/announcementbg.png";
import mainbg from '../assets/project-dashboard/main-bg.jpg'
import { Hamburger4 } from "../components/Hamburger_4";

const announcement_data = [
  "Announcement 1",
  "Announcement 2 Line 1\n Announcement 2 Line 2",
  "Announcement 3",
];

export const Announcement = () => {

  const { projectId } = useParams();


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
              style={{ color: "blue",fontSize: "20px"  }}
              to={`/projects/${projectId}/announcements`}
            >
              Stream
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" style={{ color: "black",fontSize: "20px"  }} to={`/projects/${projectId}/dashboard`}>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
          <Link
                className="nav-link"
                style={{ color: "black" ,fontSize: "20px" }}
                to={`/projects/${projectId}/team-members`}
              >
                Team Members
              </Link>
          </li>
        </ul>
        <div className="row mt-4">
            <div className="col-md-12">
              <div
                className="card bg-primary"
                style={{
                  height: "35vh",
                  backgroundImage: `url(${ig})`,
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
                  className="form-control"
                  placeholder="Type your announcement here"
                />
                <div className="input-group-append px-2">
                  <button
                    style={{
                      height: "8vh",
                    }}
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
              <div className="card mb-3">
                <div className="card-body">
                  <h4 className="card-title mb-4" style={{ color: "blue" }}>
                    Announcements
                  </h4>
                  {announcement_data.map((announcement, index) => (
                    <div class="card mb-2">
                      <div
                        class="card-body py-2 mb-2"
                        key={index}
                        style={{ fontSize: "18px" }}
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