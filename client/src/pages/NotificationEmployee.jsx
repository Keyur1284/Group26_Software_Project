import "bootstrap/dist/css/bootstrap.css";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import Skeleton from "@mui/material/Skeleton";
import mainbg from "../assets/project-dashboard/main-bg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getEmployeeNotifications, deleteNotificationEmployee, reset } from "../features/notification/notificationSlice";
import { toast } from "react-toastify";

export const NotificationEmployee = () => {
  const dispatch = useDispatch();
  const { notifications, isLoading, isSuccess, isError, appErr, serverErr } = useSelector((state) => state.notification);

  useEffect(() => {
    dispatch(getEmployeeNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) 
    {
      dispatch(reset());
    }

    if (isError)
    {
      toast.error(appErr || serverErr);
      dispatch(reset());
    }

  }, [dispatch, isSuccess, isError, appErr, serverErr]);

  if (isLoading && notifications?.length == 0) {
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
          <h1 className="px-4 py-4" style={{ color: "#013E8F" }}>
            Notifications
          </h1>

          <div className="col-md-12">
            <Skeleton
              sx={{ marginLeft: 3 }}
              variant="rounded"
              animation="wave"
              width="98%"
              height="15vh"
            />
            <Skeleton
              sx={{ marginLeft: 3, marginTop: 2 }}
              variant="rounded"
              animation="wave"
              width="98%"
              height="15vh"
            />
            <Skeleton
              sx={{ marginLeft: 3, marginTop: 2 }}
              variant="rounded"
              animation="wave"
              width="98%"
              height="15vh"
            />
            <Skeleton
              sx={{ marginLeft: 3, marginTop: 2 }}
              variant="rounded"
              animation="wave"
              width="98%"
              height="15vh"
            />
            <Skeleton
              sx={{ marginLeft: 3, marginTop: 2 }}
              variant="rounded"
              animation="wave"
              width="98%"
              height="15vh"
            />
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
      <h1 className="px-4 py-4" style={{ color: "#013E8F" }}>
        Notifications
      </h1>

      <div className="col-md-12 ">
        {notifications?.map((notification, index) => (
          <div
            key={index}
            className="card"
            style={{
              margin: "10px",
              height: "17vh",
              borderRadius: "20px",
              background:
                "linear-gradient(180deg, #5B89C8 0%, rgba(255, 255, 255, 0.00) 70%)",
              position: "relative",
            }}
          >
            <div className="card-body">
              <h3
                className="card-title px-4"
              >
                <CircleRoundedIcon sx={{ color: "#013E8F" }} />
                <span style={{ marginLeft: 17 }}>{notification?.message}</span>
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
              <h5>
                <strong>
                  {new Date(notification?.createdAt).toLocaleString()}
                </strong>
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <div
                style={{
                  position: "relative",
                  bottom: "17px",
                  left: "80px",
                  display: "inline-block",
                }}
              >
                {notification?.expense_id?.name && (
                  <Link
                    to={`/projects/${notification?.project_id?._id}/expenses/${notification?.expense_id?._id}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button
                      className="btn text-white"
                      style={{
                        borderRadius: "25px",
                        backgroundColor: "#013E8F",
                      }}
                    >
                      <h5>{notification?.expense_id?.name}</h5>
                    </button>
                  </Link>
                )}
                {notification?.invite_id && (
                  <Link
                    to="/invites"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button
                      className="btn text-white"
                      style={{
                        borderRadius: "25px",
                        backgroundColor: "#013E8F",
                      }}
                    >
                      <h5>View Invitation</h5>
                    </button>
                  </Link>
                )}
              </div>
            </div>
            <div
              style={{ position: "absolute", bottom: "17px", right: "20px" }}
            >
              <button
                className="btn text-white"
                style={{ borderRadius: "25px", backgroundColor: "#013E8F" }}
                onClick={() =>
                  dispatch(deleteNotificationEmployee(notification?._id))
                }
              >
                <h5>Mark as read</h5>
              </button>
            </div>
          </div>
        ))}
        {notifications?.length == 0 && (
          <div className="display-5 mx-4">
            You&apos;ve no new notifications!
          </div>
        )}
      </div>
    </div>
  );
};
