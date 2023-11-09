import p_1 from "../assets/registration-images/p_1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { registerEmployee, registerManager, reset } from "../features/auth/authSlice";
import { Loading } from "../components/Loading";

export const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSchema = Yup.object({
    firstName: Yup.string()
      .min(4, "Username must be at least 4 characters")
      .max(24, "Username must not exceed 24 characters")
      .matches(
        /^[A-z][A-z0-9\s-_]*$/,
        "Username must start with a letter and contain only letters, numbers, underscores, and hyphens"
      )
      .required("First Name is required").trim(),
      lastName: Yup.string()
      .min(4, "Username must be at least 4 characters")
      .max(24, "Username must not exceed 24 characters")
      .matches(
        /^[A-z][A-z0-9\s-_]*$/,
        "Username must start with a letter and contain only letters, numbers, underscores, and hyphens"
      )
      .required("Last Name is required").trim(),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required")
      .trim(),
    dob:Yup.date().required("Birth Date is required"),
    contactNo: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Contact Number must be 10 digits long and start with 9,8,7,6 only")
      .required("Contact Number is required")
      .trim(),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(24, "Password must not exceed 24 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,24}$/,
        "Password must include uppercase and lowercase letters, a number, and a special character"
      )
      .required("Password is required")
      .trim(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required")
      .trim(),

  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName:"",
      email: "",
      dob: "",
      contactNo: "",
      password: "",
      confirmPassword: "",
      userType: "employee"
    },
    onSubmit: (values) => { 

      if(values.userType === "employee")   
        dispatch(registerEmployee(values));
      else if(values.userType === "manager")
        dispatch(registerManager(values));
    },
    validationSchema: formSchema,
  });


  const { isSuccess, isError, isLoading, appErr, serverErr, user } = useSelector(state => state.auth);

  useEffect(() => {
    
    const handleBeforeUnload = (e) => {
        const confirmationMessage = "Are you sure you want to leave? Your changes may not be saved.";
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };

  }, []);

  useEffect(() => {
  
      if(user){
        navigate("/");
      }

      if (isSuccess) {
        message.success("User Registered Successfully!");
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
      <Loading />
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
            style={{ minHeight: "120vh", width: "100%" }}
          />
        </div>

        {/* Right Half: Registration Form */}
        <div
          className="col-md-6 p-0 m-0 d-flex container text-white row justify-content-center align-items-center"
          style={{ minHeight: "120vh" }}
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
                  First Name
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="alert alert-danger text-center mt-2">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-dark h6"
                  style={{ fontSize: "18px" }}
                >
                  Last Name
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="alert alert-danger text-center mt-2">
                    {formik.touched.lastName && formik.errors.lastName}
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
                  htmlFor="exampleInputEmail1"
                  className="form-label text-dark h6"
                  style={{ fontSize: "18px" }}
                >
                  Birth Date
                </label>
                <div className="input-group">
                  <input
                    type="date"
                    name="dob"
                    placeholder="Birth Date"
                    className="form-control"
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                {formik.touched.dob && formik.errors.dob && (
                  <div className="alert alert-danger text-center mt-2">
                    {formik.touched.dob && formik.errors.dob}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-dark h6"
                  style={{ fontSize: "18px" }}
                >
                  Contact Number
                </label>
                <div className="input-group">
                  <input
                    type="tel"
                    name="contactNo"
                    placeholder="999XXXXXXX"
                    className="form-control"
                    value={formik.values.contactNo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                {formik.touched.contactNo && formik.errors.contactNo && (
                  <div className="alert alert-danger text-center mt-2">
                    {formik.touched.contactNo && formik.errors.contactNo}
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
