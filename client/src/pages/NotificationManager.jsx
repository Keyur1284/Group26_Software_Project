import "bootstrap/dist/css/bootstrap.css";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import mainbg from "../assets/project-dashboard/main-bg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getManagerNotifications, deleteNotificationManager, reset } from "../features/notification/notificationSlice";

export const NotificationManager = () => {

  const dispatch = useDispatch();
  const { notifications, isLoading, isSuccess, isError, appErr, serverErr } = useSelector((state) => state.notification);

  useEffect(() => {

    dispatch(getManagerNotifications());

  }, [dispatch]);

  useEffect(() => {

    if (isSuccess || isError) {
      dispatch(reset());
    }

  }, [dispatch, isSuccess, isError]);

  return (
    <div
      className="px-3 py-3"
      style={{
        backgroundImage: `url(${mainbg})`,
        backgroundRepeat: "repeat",
        minHeight: "92vh",
      }}
    >
      <h1 className="px-4 py-4" style={{ color: "#013E8F" }}>Notifications</h1>

      <div className="col-md-12 ">
        {notifications.map((notification, index) => (
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
                  <strong style={{ color: "black" }}>{notification.employee}</strong>
                  {" "}{notification.message}{" "}
                  <strong style={{ color: "black" }}>{notification.project_id.name}</strong>
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
              <h5><strong>{new Date(notification.createdAt).toLocaleString}</strong></h5>
            </div>
            <div className="d-flex justify-content-between">
              <div style={{ position: "relative", bottom: "17px", left: "80px", display: 'inline-block' }}>
                <div
                  className="card px-4"
                  style={{
                    backgroundColor: "#4E79B2",
                    color: "#fff",
                    borderRadius: "25px",
                  }}
                >
                  <h3> {notification.expense_id.name}</h3>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: "17px", right: "20px" }}>
              <button className="btn text-white" style={{ borderRadius: "25px", backgroundColor: "#013E8F" }}
              onClick={() => dispatch(deleteNotificationManager(notification._id))}
              ><h5>Mark as read</h5></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
