import main_bg from "../assets/project-dashboard/main-bg.jpg";
import Profile_pic from "../assets/MyProfile-img/Profile.png";
import { Hamburger2 } from "../components/Hamburger_2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faLock,faUser,faUserEdit} from "@fortawesome/free-solid-svg-icons";
import '../css/Profile.css';

const inlineStyles1 = {
  backgroundColor: "#D9D9D9",
  fontSize: "4vh",
  fontWeight: 400
};
const inlineStyles2 = {
  backgroundColor: "#FFFFFF", 
  fontSize: "4vh",
  fontWeight: 400
};

const textStyles = {
  fontSize: "4vh",
  fontWeight: 400
};

const divStyle = {
  borderRadius: '10px', 
  padding: '20px',     
  backgroundColor: 'lightgray',
};

export const MyProfile = () => {

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
            
            className="me-5"
            style={{
              marginTop: "20px",
              marginLeft: "10px",
              marginRight: "10px",
              marginBottom: "20px",
            }}
          >
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
            <div className="row">
              <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
                <img
                  style={{ width: "200px", height: "200px" }}
                  src={Profile_pic}
                />
                </div>
              <div className="col-md-8">
                <div className="mt-3 mr-4 ml-3 mb-3 pt-5 p-3">
                  <h2 className="p-3 rounded-pill" style={inlineStyles1}>
                    First Name :
                  </h2>
                  <h2 className="p-3 mt-3 rounded-pill" style={inlineStyles2}>
                    Last Name :
                  </h2>
                  <h2 className="p-3 mt-3 rounded-pill" style={inlineStyles1}>
                    Gmail :
                  </h2>
                  <h2 className="p-3 mt-3 rounded-pill" style={inlineStyles2}>
                    Birth Date :
                  </h2>
                  <h2 className="p-3 mt-3 rounded-pill" style={inlineStyles1}>
                    Contact No. :
                  </h2>
                  <h2 className="p-3 mt-3 rounded-pill" style={inlineStyles2}>
                    Joining Date :
                  </h2>
                  <h2 className="p-3 mt-3 rounded-pill " style={inlineStyles1}>
                    Role :
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
