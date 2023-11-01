import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { message } from "antd";
import "../css/Homepage.css";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isError, isLoading, appErr, serverErr, user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    
    try {
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

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark p-2"
      style={{ fontSize: "18px" }}
    >
      <div className="container-fluid">
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
                Menu
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Notifications
              </Link>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link text-secondary link-light dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/">
                    User Guide
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Articles
                  </Link>
                </li>
              </ul>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>

          {user ? (
            <div className="d-flex align-items-center">
              <Link to='/notifications'><NotificationsActiveIcon sx={{fontSize: 30}} className="text-light"/></Link>
              <Link to='/profile' className="text-decoration-none"> <div className="text-light mx-3" style={{ fontSize: "18px" }}>
                {user.firstName} {user.lastName}
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
