/* eslint-disable react/jsx-no-target-blank */
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { logout } from "../features/auth/authSlice";
import { clearAnnouncements } from "../features/announcement/announcementSlice";
import { clearEmployeesAndInvitations } from "../features/invite/inviteSlice";
import { clearProjects } from "../features/project/projectSlice";
import { clearTeam } from "../features/team/teamSlice";
import { clearExpenses } from "../features/expense/expenseSlice";
import { clearNotification, getEmployeeNotifications, getManagerNotifications } from "../features/notification/notificationSlice";
import { clearStatistics } from "../features/statistic/statisticSlice";
import { message } from "antd";
import "../css/Homepage.css";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isError, isLoading, appErr, serverErr, user } = useSelector((state) => state.auth);
  const { isLoading: isLoadingAnnouncement} = useSelector((state) => state.announcement)
  const { isLoading: isLoadingExpense} = useSelector((state) => state.expense)
  const { isLoading: isLoadingInvite} = useSelector((state) => state.invite)
  const { notifications } = useSelector((state) => state.notification)
  const { isLoading: isLoadingProject} = useSelector((state) => state.project)
  const { isLoading: isLoadingStatistic} = useSelector((state) => state.statistic)
  const { isLoading: isLoadingTeam} = useSelector((state) => state.team)

  const handleLogout = async () => {
    
    try {
      dispatch(clearAnnouncements())
      dispatch(clearEmployeesAndInvitations())
      dispatch(clearProjects())
      dispatch(clearTeam())
      dispatch(clearExpenses())
      dispatch(clearNotification())
      dispatch(clearStatistics())
      await dispatch(logout())
      message.success("User Logged Out Successfully!")
      navigate('/login')
    }

    catch (error)
    {
      console.error("Logout error: ", error)
      message.error("Logout failed")
    }

  }

  useEffect(() => {

    if (user?.role == "manager")
      dispatch(getManagerNotifications())
    
    else if (user?.role == "employee")
      dispatch(getEmployeeNotifications())
    
  }, [
    user,
    isLoading,
    isLoadingAnnouncement,
    isLoadingExpense,
    isLoadingInvite,
    isLoadingProject,
    isLoadingStatistic,
    isLoadingTeam
  ])

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark p-2"
      style={{ fontSize: "18px" }}
    >
      <div className="container-fluid">
        <a
            href="https://github.com/Keyur1284/Group26_Software_Project"
            target="_blank"
            className="navbar-brand"
        >        
              <img
                src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-1-600x600.jpg"
                alt="logo"
                className="rounded-circle"
                style={{ height: "35px", width: "35px" }}
              />
        </a>
        <Link className="navbar-brand" to="/">
          Xpense Tracker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/projects">
                Track Expenses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>

          {user ? (
            <div className="d-flex align-items-center">
              {notifications?.length > 0 ? (
                <Link to='/notifications' className="text-decoration-none">
                  <NotificationsActiveIcon className="text-light mx-2" style={{ fontSize: "30px" }} />
                </Link>
              ) : (
                <Link to='/notifications' className="text-decoration-none">
                  <NotificationsIcon className="text-light mx-2" style={{ fontSize: "30px" }} />
                </Link>
              )}
              <Link to='/profile' className="text-decoration-none"> <div className="text-light mx-3" style={{ fontSize: "18px" }}>
                {user?.firstName} {user?.lastName}
              </div> </Link>
              <button
                className="btn btn-danger"
                onClick={handleLogout}
                style={{ fontSize: "18px" }}
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          ) : (
            <div className="d-flex">
              <Link to="/login">
                <button
                  className="btn btn-success mx-3"
                  type="submit"
                  style={{ fontSize: "18px" }}
                >
                  <FaSignInAlt /> Login
                </button>
              </Link>
              <Link to="/register">
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ fontSize: "18px" }}
                >
                  <FaUser /> Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
