import main_bg from "../assets/project-dashboard/main-bg.jpg";
import Profile_pic from "../assets/MyProfile-img/Profile.png";
import { Hamburger4 } from "../components/Hamburger_4";

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

  ":hover": {
    backgroundColor:"#D9D9D9",
  },
};

const divStyle = {
  borderRadius: '10px', // Adjust the value for the desired border radius
  padding: '20px',     // Add any other styles you need
  backgroundColor: 'lightgray',
};

export const MyProfile = () => {

  return (
    <div className="container-fluid px-3 py-3" style={{ backgroundImage: `url(${main_bg})`, backgroundRepeat: "repeat" }}>
      <div className="row">
        <div
          className="col-md-3"
        >
          <Hamburger4 />
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
                  <p style={textStyles}>Profile</p>
                </span>
              </div>
              <div className="display-6">
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "3vh",
                    color: "#2D91E6",
                    cursor: "pointer",

                    // ":hover": {
                    //   textDecoration: "underline"
                    // }
                  }}
                >
                  <p style={textStyles}>Edit Profile</p>
                </span>
              </div>
              <div className="display-6">
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "3vh",
                    color: "#2D91E6",
                    cursor: "pointer",
                    // "& :hover": {
                    //   textDecoration: "underline"
                    // }
                  }}
                >
                  <p style={textStyles}>Reset Password</p>
                </span>
              </div>
              <div className="display-6">
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "3vh",
                    color: "#2D91E6",
                    cursor: "pointer",
                    // "& :hover": {
                    //   textDecoration: "underline"
                    // }
                  }}
                >
                  <p style={textStyles}>Invites</p>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
                <img
                  style={{ width: "200px", height: "200px" }}
                  src={Profile_pic}
                />
                <div className="col-md-6 lead d-flex align-items-center justify-content-center p-4" style={{fontWeight:"bold"}}>Employee</div>
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
