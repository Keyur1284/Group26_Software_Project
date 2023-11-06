import main_bg from "../assets/project-dashboard/main-bg.jpg";
import { Hamburger2 } from "../components/Hamburger_2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { faEnvelopeOpenText , faUser, faUserEdit} from "@fortawesome/free-solid-svg-icons";
import '../css/Profile.css';
import {InviteCard} from '../components/InviteCard'

export const Invitations = () => {

    const { user } = useSelector((state) => state.auth);

    return (
        <div className="container-fluid px-3 py-3" style={{ backgroundImage: `url(${main_bg})`, backgroundRepeat: "repeat" }}>
          <div className="row">
            <div
              className="col-md-3"
            >
              <Hamburger2 />
            </div>
            <div className="col-md-8 mx-5 rounded rounded-3 bg-light">
              <div
                
                className=""
                style={{
                  marginTop: "20px",
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginBottom: "20px",
                }}
              >

            <ul className="nav nav-underline rounded">
              <li className="nav-item mx-4">
                <Link
                  className="nav-link"
                  style={{ color: "black", fontSize: "20px" }}
                  to="/profile"
                >
                  <FontAwesomeIcon className="mx-2" icon={faUser} />
                  Profile
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link"
                  style={{ color: "black", fontSize: "20px" }}
                  to="/profile"
                >
                  <FontAwesomeIcon className="mx-2" icon={faUserEdit} />
                  Edit Profile
                </Link>
              </li>
              {user?.role == "employee" && (
                <li className="nav-item mx-3">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    style={{ color: "blue", fontSize: "20px" }}
                    to="/invites"
                  >
                    <FontAwesomeIcon
                      className="mx-2"
                      icon={faEnvelopeOpenText}
                    />
                    Invites
                  </Link>
                </li>
              )}
            </ul>
  
                <div>
              
                <InviteCard />
              
            </div>
              </div>
            </div>
          </div>
        </div>
      );
}
