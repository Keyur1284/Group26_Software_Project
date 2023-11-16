import ForgetPassImg3 from "../assets/ForgetPassword-images/ForgetPassImg3.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordEmployee, resetPasswordManager, reset } from "../features/auth/authSlice";

export const ResetPassword = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { resetId } = useParams();
  const { isLoading, isSuccess, isError, appErr, serverErr } = useSelector(state => state.auth);

  const formSchema = Yup.object({
    password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(24, "Password must not exceed 24 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,24}$/,
      "Password must include uppercase and lowercase letters, a number, and a special character (!@#$%^&*)"
      )
    .required("Password is required")
    .trim(),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required")
    .trim(),
    otp: Yup.string().min(8, "OTP must contain 8 characters").max(8, "OTP must contain 8 characters").required("OTP is required").trim(),

  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
      otp: "",
      userType: "employee",
    },
    onSubmit: (values) => {
        
      values.resetId = resetId;
      
      if (values.userType === "employee") {
        dispatch(resetPasswordEmployee(values));
      }

      else if (values.userType === "manager") {
        dispatch(resetPasswordManager(values));
      }
    },
    validationSchema: formSchema,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {

    if (isSuccess)
    {
      toast.success("Password has been reset successfully!");
      dispatch(reset());
      navigate("/login");
    }

    if (isError)
    {
      toast.error(appErr || serverErr);
      dispatch(reset());
    }

  }, [isSuccess, isError, appErr, serverErr, dispatch, navigate]);

  if (isLoading)
  {
    return (
      <Loading />
    )
  }

  return (
    <div
      className="container-fluid px-3 py-3"
      style={{ backgroundImage: `url(${ForgetPassImg3})`, minHeight: "92vh" }}
    >
      <div className="row m-4 p-4 justify-content-end" style={{ minHeight: "50vh" }}>
        <div className="col-md-6 p-3 rounded rounded-3 bg-light justify-content-end" style={{marginTop:"120px",marginRight:"-25px"}}>
          <div
            className="mt-2 mb-2 p-4 justify-content-end"
          >
            <form onSubmit={formik.handleSubmit}>
            <div className="mb-3 mt-2">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label text-dark h6"
                  style={{ fontSize: "18px" }}
                >
                  OTP
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    className="form-control"
                    width="10%"
                    value={formik.values.otp}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                {formik.touched.otp && formik.errors.otp && (
                  <div className="alert alert-danger text-center mt-2">
                    {formik.touched.otp && formik.errors.otp}
                  </div>
                )}
              </div>
            <div className="mb-3 mt-2">
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
                    className="btn btn-outline-white text-dark"
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
                    className="btn btn-outline-white text-dark"
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
              <div className="mt-3 d-flex justify-content-evenly">
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
              <button
                  type="submit"
                  className="btn btn-warning p-2 mt-3"
                  disabled={!formik.isValid}
                >
                  Reset Password
                </button>
            </form>
          </div>
        </div>
        <div className='col-md-1'>

        </div>
      </div>
    </div>
  );
};
