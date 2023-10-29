import { useFormik } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import main_bg from "../assets/project-dashboard/main-bg.jpg";
import Profile_pic from "../assets/MyProfile-img/Profile.png";

const inlineStyles1 = {
  backgroundColor: "#D9D9D9", // Replace 'red' with your desired background color
};
const inlineStyles2 = {
  backgroundColor: "#FFFFFF", // Replace 'red' with your desired background color
};
const textStyles = {
  textDecoration: "none", // Initial state without underline
  transition: "text-decoration 0.01s", // Smooth transition

  // Apply underline on hover
  ":hover": {
    textDecoration: "underline",
  },
};

export const MyProfile = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-3"
          style={{ backgroundImage: `url(${main_bg})` }}
        ></div>
        <div className="col-md-9">
          <div
            style={{
              marginTop: "20px",
              marginLeft: "10px",
              marginRight: "10px",
              marginBottom: "20px",
            }}
          >
            <div className="row">
              <div className="col-md-3 lead">
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#2D91E6",
                    cursor: "pointer",
                    // "& :hover": {
                    //   textDecoration: "underline"
                    // }
                  }}
                >
                  <p style={textStyles}>Profile</p>
                </span>
              </div>
              <div className="col-md-3 lead">
                <span
                  style={{
                    fontWeight: "bold",
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
              <div className="col-md-3 lead">
                <span
                  style={{
                    fontWeight: "bold",
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
              <div className="col-md-3 lead">
                <span
                  style={{
                    fontWeight: "bold",
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
              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <img
                  style={{ width: "200px", height: "200px" }}
                  src={Profile_pic}
                />
                <div className="col-md-6 lead d-flex align-items-center justify-content-center p-4" style={{fontWeight:"bold"}}>Employee</div>
              </div>
              <div className="col-md-6">
                <div className="mt-3 mr-4 ml-3 mb-3 pt-5">
                  <h2 className="p-2" style={inlineStyles1}>
                    First Name:
                  </h2>
                  <h2 className="p-2" style={inlineStyles2}>
                    Last Name:
                  </h2>
                  <h2 className="p-2" style={inlineStyles1}>
                    Gmail:
                  </h2>
                  <h2 className="p-2" style={inlineStyles2}>
                    Birth Date:
                  </h2>
                  <h2 className="p-2" style={inlineStyles1}>
                    Contact Number:
                  </h2>
                  <h2 className="p-2" style={inlineStyles2}>
                    Joining Date:
                  </h2>
                  <h2 className="p-2" style={inlineStyles1}>
                    Role:
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
