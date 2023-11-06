import ForgetPassImg3 from "../assets/ForgetPassword-images/ForgetPassImg3.jpg";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";

export const ForgetPass2 = () => {
  const formSchema = Yup.object({
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
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
        console.log(values);
    //   if (values.userType === "employee") dispatch(registerEmployee(values));
    //   else if (values.userType === "manager") dispatch(registerManager(values));
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

  return (
    <div
      className="container-fluid px-3 py-3"
      style={{ backgroundImage: `url(${ForgetPassImg3})`, minHeight: "92vh" }}
    >
      <div className="row m-4 p-4 justify-content-end" style={{ minHeight: "50vh" }}>
        <div className="col-md-6 p-3 rounded rounded-3 bg-light justify-content-end" style={{marginTop:"180px",marginRight:"-25px"}}>
          <div
            className="mt-2 mb-2 p-4 justify-content-end"
            style={{ fontWeight: "bold" }}
          >
            Forgot Your Password?
            <form onSubmit={formik.handleSubmit}>
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

              <div className="mb-3 pt-4">
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
              <button
                  type="submit"
                  className="btn btn-outline-warning p-2 mt-3"
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
