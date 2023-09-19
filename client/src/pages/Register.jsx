import p_1 from "../assets/registration-images/p_1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { registerEmployee, reset } from "../features/auth/authSlice";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSchema = Yup.object({
    name: Yup.string()
      .min(4, "Username must be at least 4 characters")
      .max(24, "Username must not exceed 24 characters")
      .matches(
        /^[A-z][A-z0-9\s-_]*$/,
        "Username must start with a letter and contain only letters, numbers, underscores, and hyphens"
      )
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(24, "Password must not exceed 24 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,24}$/,
        "Password must include uppercase and lowercase letters, a number, and a special character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: "employee"
    },
    onSubmit: (values) => {      
      dispatch(registerEmployee(values));
    },
    validationSchema: formSchema,
  });

  const { isSuccess, isError, isLoading, appErr, serverErr, user } = useSelector(state => state.auth);

  useEffect(() => {
      
      if (user) {
        navigate("/");
      }
  
      if (isSuccess) {
        message.success("Registration Successful");
        dispatch(reset());
        navigate("/login");
      }
  
      if (isError) {
        message.error(appErr || serverErr);
        dispatch(reset());
      }
  }, [dispatch, isSuccess, isError, appErr, serverErr, user])

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  if (isLoading)
  {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "rgb(93, 150, 241)" }}
    >
      <div className="row">
        {/* Left Half: Image */}
        <div className="col-md-6 p-0">
          <img
            src={p_1}
            className="img-fluid"
            alt="Background"
            style={{ minHeight: "92vh", width: "100%" }}
          />
        </div>

        {/* Right Half: Registration Form */}
        <div
          className="col-md-6 p-0 m-0 d-flex container text-white row justify-content-center align-items-center"
          style={{ minHeight: "92vh" }}
        >
          <div className="col-md-8 mt-5">
            <h2 className="text-start display-6" style={{ fontWeight: "400" }}>
              Create New Account
            </h2>
            <p className="text-start h6" style={{ fontSize: "18px" }}>
              Track Your Expenses with Xpense Tracker
            </p>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3 mt-4">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-dark h6"
                  style={{ fontSize: "18px" }}
                >
                  Username
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="User1234"
                    className="form-control"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                {formik.touched.name && formik.errors.name && (
                  <div className="alert alert-danger text-center mt-2">
                    {formik.touched.name && formik.errors.name}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-dark h6"
                  style={{ fontSize: "18px" }}
                >
                  Email address
                </label>
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="form-control"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                {formik.touched.email && formik.errors.email && (
                  <div className="alert alert-danger text-center mt-2">
                    {formik.touched.email && formik.errors.email}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label text-dark h6"
                  style={{ fontSize: "18px" }}
                >
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="•••••••••••"
                    className="form-control"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-white bg-white text-dark"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <i className="bi bi-eye-slash-fill"></i>
                    ) : (
                      <i className="bi bi-eye-fill"></i>
                    )}
                  </button>
                </div>

                {formik.touched.password && formik.errors.password && (
                  <div className="alert alert-danger text-center mt-2">
                    {formik.touched.password && formik.errors.password}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label text-dark h6"
                  style={{ fontSize: "18px" }}
                >
                  Confirm Password
                </label>
                <div className="input-group">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="•••••••••••"
                    className="form-control"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-white bg-white text-dark"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? (
                      <i className="bi bi-eye-slash-fill"></i>
                    ) : (
                      <i className="bi bi-eye-fill"></i>
                    )}
                  </button>
                </div>

                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <div className="alert alert-danger text-center mt-2">
                      {formik.touched.confirmPassword &&
                        formik.errors.confirmPassword}
                    </div>
                  )}
              </div>

              <div className="mb-3 d-flex justify-content-evenly">
                <div className="form-check">
                  <input
                    type="radio"
                    id="employee"
                    name="userType"
                    value="employee"
                    className="form-check-input"
                    checked={formik.values.userType === "employee"}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="employee" className="form-check-label text-dark h6" style={{ fontSize: "18px" }}>
                    Employee
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="manager"
                    name="userType"
                    value="manager"
                    className="form-check-input"
                    checked={formik.values.userType === "manager"}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="manager" className="form-check-label text-dark h6" style={{ fontSize: "18px" }}>
                    Manager
                  </label>
                </div>
                </div>

              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-dark h6"
                  style={{ fontSize: "18px" }}
                  disabled={!formik.isValid}
                >
                  Sign Up
                </button>
              </div>
              <div
                className="create-account text-center mt-3"
                style={{ fontSize: "18px" }}
              >
                <p>
                  Already Registered? {"   "}
                  <Link to="/login" className="text-white">
                    Sign In
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
