import React, { useState } from "react";
import mainbg from "../assets/email-verification-images/main-bg1.jpg";
import verifyIcon from "../assets/email-verification-images/verify-icon2.png";
import { useFormik } from "formik";

export const EmailVerification = () => {
  const [otp, setOtp] = useState("");

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    onSubmit: (values) => {
      // OTP verification
      console.log("Verifying OTP:", values.otp);
    },
  });

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
