import { useParams, Link, useNavigate } from "react-router-dom";
import ig from "../assets/announcement-images/announcementbg.png";
import mainbg from '../assets/project-dashboard/main-bg.jpg'
import { Hamburger4 } from "../components/Hamburger_4";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import Skeleton from '@mui/material/Skeleton';
import { toast } from "react-toastify";
import { createAnnouncement, getAnnouncements, reset } from "../features/announcement/announcementSlice"; 


export const Announcement = () => {  
  
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { announcements, result, isLoading, isSuccess, isError, appErr, serverErr, projectName, managerName } = useSelector(state => state.announcement);
  const { user } = useSelector(state => state.auth);

  const formSchema = Yup.object({
    message: Yup.string().min(1).trim(),
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
    },  
    validationSchema: formSchema,
  });  

  useEffect(() => {
    
    dispatch(getAnnouncements(projectId));
  }, [dispatch, projectId]);

  useEffect(() => {

    if (isSuccess)
    {
      dispatch(reset());
    }

    if (isSuccess && result) 
    {
      toast.success(result);
    }

    if (isError)
    {
      toast.error(appErr || serverErr);
      dispatch(reset());
    }

  }, [dispatch, isSuccess, isError, appErr, serverErr]);

  if (isLoading && !managerName) {
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
                  <div className="card-body d-flex justify-content-end flex-column text-white">
                  <Typography component="div" variant="h1" style={{marginTop: "20vh"}}>
                      <Skeleton variant="rounded" animation="wave" width="35%" height="5vh" />
                    </Typography>
                    <Typography component="div" variant="h1" style={{marginTop: "2vh"}}>
                      <Skeleton variant="rounded" animation="wave" width="35%" height="5vh" />
                    </Typography>
                    {user?.role == "manager" && <div 
                      className="edit-button m-2 d-flex rounded"
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        fontWeight: "bold",
                        color: "blue",
                        border: "none",
                        width: "13vw"
                      }}
                    >
                      
                      <Skeleton variant="rounded" animation="wave" width="100%" height="5vh" />

                    </div>}
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
                    className="form-control rounded"
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
                      disabled={!formik.isValid}
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
                    
                    <Typography component="div" variant="h1" style={{marginTop: "2vh"}}>
                      <Skeleton variant="rounded" animation="wave" width="68vw" height="13vh" />
                    </Typography>
                    <Typography component="div" variant="h1" style={{marginTop: "2vh"}}>
                      <Skeleton variant="rounded" animation="wave" width="68vw" height="13vh" />
                    </Typography>
                    <Typography component="div" variant="h1" style={{marginTop: "2vh"}}>
                      <Skeleton variant="rounded" animation="wave" width="68vw" height="13vh" />
                    </Typography>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
        {user?.role == "manager" && <button 
          className="edit-button m-2 btn d-flex rounded"
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            backgroundColor: "white",
            fontWeight: "bold",
            color: "blue",
            border: "none",
          }}
          onClick={() => navigate(`/projects/${projectId}/edit-project`)}
        >
          <EditIcon sx={{marginRight: 1}} />  
        Edit Project
        </button>}
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
                  className="form-control rounded"
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
                    disabled={!formik.isValid}
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
                  {announcements?.map((announcement, index) => (
                    <div key={index} className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">{announcement?.message}</h5>
                        <p className="card-text">
                          <small className="text-muted">
                            {announcement?.name} | {
                            
                            new Date(announcement?.createdAt).toLocaleString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                            })
                            }
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