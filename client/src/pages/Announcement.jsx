import { useParams, Link } from "react-router-dom";
import ig from "../assets/announcement-images/announcementbg.png";
import mainbg from '../assets/project-dashboard/main-bg.jpg'
import { Hamburger4 } from "../components/Hamburger_4";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { createAnnouncement, getAnnouncements, reset, clearAnnouncements } from "../features/announcement/announcementSlice"; 


export const Announcement = () => {  
  
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const { announcements, isLoading, isSuccess, isError, appErr, serverErr, projectName, managerName } = useSelector(state => state.announcement);
  const { user } = useSelector(state => state.auth);

  const formSchema = Yup.object({
    message: Yup.string()
  });  

  const formik = useFormik({
    initialValues: {
      message: "",
    },  
    onSubmit: (values) => {
      
      const announcement = {
        message: values.message,
        projectId,
        name: user.firstName + " " + user.lastName,
      }  

      dispatch(createAnnouncement(announcement));

      formik.resetForm();
      dispatch(reset());
    },  
    validationSchema: formSchema,
  });  

  useEffect(() => {
    dispatch(clearAnnouncements());
    dispatch(getAnnouncements(projectId));
  }, [dispatch, projectId]);

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
                  <h3 className="card-title mt-auto mb-2">{projectName}</h3>
                  <h5>{managerName}</h5>
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
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control"
                  placeholder="Type your announcement here"
                />
                <div className="input-group-append px-2">
                  <button
                    type = "submit"
                    style={{
                      height: "8vh",
                    }}
                    className="btn btn-primary"
                    onClick={formik.handleSubmit}
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
                  {announcements.map((announcement, index) => (
                    <div key={index} className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">{announcement.message}</h5>
                        <p className="card-text">
                          <small className="text-muted">
                            {announcement.name} | {new Date(announcement.createdAt).toLocaleString()}
                          </small>
                        </p>
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