import main_bg from "../assets/project-dashboard/main-bg.jpg";
import Profile_pic from "../assets/MyProfile-img/Profile.png";
import { Hamburger2 } from "../components/Hamburger_2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faUser,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Profile.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export const EditProfile = () => {
  const formSchema = Yup.object({
    firstName: Yup.string()
      .min(4, "Username must be at least 4 characters")
      .max(24, "Username must not exceed 24 characters")
      .matches(
        /^[A-z][A-z0-9\s-_]*$/,
        "Username must start with a letter and contain only letters, numbers, underscores, and hyphens"
      )
      .required("First Name is required"),
    lastName: Yup.string()
      .min(4, "Username must be at least 4 characters")
      .max(24, "Username must not exceed 24 characters")
      .matches(
        /^[A-z][A-z0-9\s-_]*$/,
        "Username must start with a letter and contain only letters, numbers, underscores, and hyphens"
      )
      .required("Last Name is required"),
    // email: Yup.string()
    //   .email("Invalid email format")
    //   .required("Email is required"),
    dob: Yup.date().required("Birth Date is required"),
    contactNo: Yup.string().required("Contact Number is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      contactNo: "",
      userType: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: formSchema,
  });

  return (
    <div
      className="container-fluid px-3 py-3"
      style={{ backgroundImage: `url(${main_bg})`, backgroundRepeat: "repeat" }}
    >
      <div className="row">
        <div className="col-md-3">
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
            <ul className="nav nav-underline rounded">
              <li className="nav-item mx-4">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  style={{ color: "blue", fontSize: "20px" }}
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
            </ul>

            <div className="m-4 d-flex flex-column">
              <img
                style={{ width: "200px", height: "200px", alignSelf: "center" }}
                src={Profile_pic}
              />
            </div>

            <div className="d-flex flex-column m-2 p-2">
              <form
                className="d-flex flex-column"
                onSubmit={formik.handleSubmit}
              >
                <div className="justify-content-evenly d-flex mb-2">
                    <div>
                  <input
                    className="col-md-3"
                    style={{
                      width: "460px",
                      height: "60px",
                      borderRadius: "15px",
                      background:
                        "linear-gradient(270deg, #FF9900 0%, rgba(0, 10.18, 254.52, 0.37) 100%)",
                      border: "none",
                    }}
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                  <div className="alert alert-danger text-center mt-2">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                )}
                  </div>
                  <div>
                  <input
                    className="col-md-3"
                    style={{
                      width: "460px",
                      height: "60px",
                      borderRadius: "15px",
                      background:
                        "linear-gradient(270deg, #FF9900 0%, rgba(0, 10.18, 254.52, 0.37) 100%)",
                      border: "none",
                    }}
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                  <div className="alert alert-danger text-center mt-2">
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
                )}
                </div>
                </div>

                <input
                  disabled
                  className="m-2"
                  style={{
                    height: "60px",
                    borderRadius: "15px",
                    background:
                      "linear-gradient(90deg, rgba(255, 153, 0, 0.50) 0%, rgba(0, 10.18, 254.52, 0.37) 100%)",
                    border: "none",
                  }}
                  type="text"
                  placeholder="Email "
                />

                <div className="justify-content-evenly d-flex mt-2">
                    <div>
                  <input
                    className="col-md-3"
                    style={{
                      width: "460px",
                      height: "60px",
                      borderRadius: "15px",
                      background:
                        "linear-gradient(270deg, #FF9900 0%, rgba(0, 10.18, 254.52, 0.37) 100%)",
                      border: "none",
                    }}
                    name="dob"
                    type="date"
                    placeholder="Birth Date"
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.dob && formik.errors.dob && (
                  <div className="alert alert-danger text-center mt-2">
                    {formik.touched.dob && formik.errors.dob}
                  </div>
                )}
                  </div>
                  <div>
                  <input
                    className="col-md-3"
                    style={{
                      width: "460px",
                      height: "60px",
                      borderRadius: "15px",
                      background:
                        "linear-gradient(270deg, #FF9900 0%, rgba(0, 10.18, 254.52, 0.37) 100%)",
                      border: "none",
                    }}
                    name="contactNo"
                    type="text"
                    placeholder="Contact No"
                    value={formik.values.contactNo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.contactNo && formik.errors.contactNo && (
                  <div className="alert alert-danger text-center mt-2">
                    {formik.touched.contactNo && formik.errors.contactNo}
                  </div>
                )}
                </div>
                </div>

                <div className="d-flex justify-content-end mt-2">
                  <button className="btn btn-danger rounded-4 my-button m-2 fs-4">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary rounded-4 my-button m-2 fs-4">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
