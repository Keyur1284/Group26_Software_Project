import { useEffect, useState } from "react";
import mainbg from "../assets/email-verification-images/main-bg1.jpg";
import verifyIcon from "../assets/email-verification-images/verify-icon2.png";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmailEmployee, verifyEmailManager, reset } from "../features/auth/authSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { toast } from "react-toastify";

export const EmailVerification = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { verifyId } = useParams();
  const { isLoading, isSuccess, isError, appErr, serverErr } = useSelector(state => state.auth);

  const [otp, setOtp] = useState("");

  const formik = useFormik({
    initialValues: {
      otp: "",
      userType: "employee",
    },
    onSubmit: (values) => {
      
      values.verifyId = verifyId;

      if (values.userType === "employee") {
        dispatch(verifyEmailEmployee(values));
      }

      else if (values.userType === "manager") {
        dispatch(verifyEmailManager(values));
      }
    },
  });

  useEffect(() => {

    if (isSuccess) {
      toast.success("Email verified successfully");
      dispatch(reset());
      navigate("/login");
    }

    if (isError) {
      toast.error(appErr || serverErr);
      dispatch(reset());
    }

  }, [isSuccess, isError, appErr, dispatch, navigate]);

  if (isLoading)
  {
    return (
      <Loading />
    )
  }

  return (
    <div className="display-6">
      <div
        className="container-fluid px-3 py-3"
        style={{
          backgroundImage: `url(${mainbg})`,
          backgroundSize: "cover",
          minHeight: "98vh",
        }}
      >
        <div className="row mx=3 my-3 p-2 justify-content-center">
          <div className="col-md-4"></div>
          <div
            className="col-md-6 px-5 py-2 my-5 rounded rounded-3"
            style={{
              backgroundColor: "rgba(203,237,249, 0.60)",
              color: "white",
            }}
          >
            <div className="mt-2 mb-2 p-2 text-center">
              <img
                src={verifyIcon}
                alt="Verification Icon"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div className="mt-2 mb-2 p-3">
              <div className="fw-medium" style={{ fontSize: "3vh" }}>
                <h2 style={{ color: "white" }}>Verify Your Account</h2>
                <p>
                  We sent you the OTP to your mail. Enter the code below to
                  confirm your email address.
                </p>
                <form onSubmit={formik.handleSubmit}>
                <div className="mb-3 mt-3">
                  <label
                    className="form-label h6"
                    style={{ fontSize: "2vh", color: "white" }}
                  >
                    OTP
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="otp"
                      placeholder="Enter OTP"
                      className="form-control"
                      value={formik.values.otp}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setOtp(e.target.value);
                      }}
                      onBlur={formik.handleBlur}
                    />
                  </div>
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
                  <label htmlFor="employee" className="form-check-label" style={{ fontSize: "18px" }}>
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
                  <label htmlFor="manager" className="form-check-label" style={{ fontSize: "18px" }}>
                    Manager
                  </label>
                </div>
                </div>
                <div className="mt-3 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{
                      backgroundColor: "#243b75",
                      color: "white",
                      border: "none",
                    }}
                    disabled={!otp}
                  >
                    Verify
                  </button>
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
