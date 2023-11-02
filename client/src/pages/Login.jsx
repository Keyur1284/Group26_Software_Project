import Background from "../assets/login-images/Background.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {message} from "antd";
import {useDispatch, useSelector} from "react-redux";
import "bootstrap-icons/font/bootstrap-icons.css";
import { loginEmployee, loginManager, reset } from "../features/auth/authSlice";
import { Loading } from "./Loading";

export const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      userType: "employee",
    },
    onSubmit: (values) => {
      if(values.userType === "employee")
        dispatch(loginEmployee(values));
      else if(values.userType === "manager")
        dispatch(loginManager(values));
    },
    validationSchema: formSchema,
  });



  const {isSuccess, isError, isLoading, appErr, serverErr, user} = useSelector(state => state.auth);

  useEffect(() => {

    if (isSuccess && user)
    {
      message.success("User Logged In Successfully!");
      navigate("/projects");
      dispatch(reset());
    }

    if (user)
    {
      navigate("/projects");
    }

    if(isError)
    {
      message.error(appErr||serverErr);
      dispatch(reset());
    }

  }, [dispatch, isSuccess, isError, appErr, serverErr, user])

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (isLoading)
  {
    return(<Loading />)
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Half: Image */}
        <div className="col-md-6 p-0">
          <img
            src={Background}
            className="img-fluid"
            alt="Background"
            style={{ height: "92vh", width: "100%" }}
          />
        </div>

        {/* Right Half: Login Form */}
        <div className="col-md-6 p-0 d-flex align-items-center">
          <div
            className="container text-white"
            style={{ backgroundColor: "rgb(93, 150, 241)" }}
          >
            <div
              className="row justify-content-center align-items-center"
              style={{ height: "92vh" }}
            >
              <div className="col-md-8 mt-5">
                <h2
                  className="text-start display-6"
                  style={{ fontWeight: "400" }}
                >
                  Welcome Back!
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
                      Sign In
                    </button>
                  </div>
                  <div
                    className="create-account text-center mt-3"
                    style={{ fontSize: "18px" }}
                  >
                    <p>
                      Not a user? {"   "}
                      <Link to="/register" className="text-white">
                        Create Account
                      </Link>{" "}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
