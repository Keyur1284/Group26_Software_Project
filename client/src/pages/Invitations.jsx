import main_bg from "../assets/project-dashboard/main-bg.jpg";
import { Hamburger2 } from "../components/Hamburger_2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faLock,faUser,faUserEdit} from "@fortawesome/free-solid-svg-icons";
import '../css/Profile.css';
import {InviteCard} from '../components/InviteCard'

export const Invitations = () => {
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
                <div style={{height:"20px"}}>
                <div className="d-flex justify-content-evenly">
                  <div className="display-6">
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "3vh",
                        color: "#2D91E6",
                        cursor: "pointer",
                        "& :hover": {
                          backgroundColor: "underline"
                        }
                      }}
                    >
                      
                      <p  className="subNav">
                        <FontAwesomeIcon className="mx-2" icon={faUser} />
                      Profile</p>
                    </span>
                  </div>
                  <div className="display-6">
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "3vh",
                        color: "#2D91E6",
                        cursor: "pointer",
                      }}
                    >
                      
                      <p className="subNav">
                        <FontAwesomeIcon className="mx-2" icon={faUserEdit} />
                        Edit Profile</p>
                    </span>
                  </div>
                  <div className="display-6">
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "3vh",
                        color: "#2D91E6",
                        cursor: "pointer",
                      }}
                    >
                      
                      <p className="subNav">
                      <FontAwesomeIcon className="mx-2" icon={faLock} />
                      Reset Password</p>
                    </span>
                  </div>
                  <div className="display-6">
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "3vh",
                        color: "#2D91E6",
                        cursor: "pointer",
                      }}
                    >
                      
                      <p  className="subNav " >
                      <FontAwesomeIcon className="mx-2" icon={faEnvelopeOpenText} />
                      Invites</p>
                    </span>
                  </div>
                  </div>
                </div>
  
                <div>
              
                <InviteCard />
              
            </div>
              </div>
            </div>
          </div>
        </div>
      );
}
