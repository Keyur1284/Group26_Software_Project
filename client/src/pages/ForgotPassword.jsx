import ForgetPassImg3 from "../assets/ForgetPassword-images/ForgetPassImg3.jpg";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Loading } from "../components/Loading";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { forgotPasswordEmployee, forgotPasswordManager, reset } from "../features/auth/authSlice";

export const ForgotPassword = () => {

  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, appErr, serverErr } = useSelector(state => state.auth);

  const formSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required")
      .trim(),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      userType: "employee",
    },
    onSubmit: (values) => {
      
      if (values.userType === "employee") {
        dispatch(forgotPasswordEmployee(values));
      }
      
      else if (values.userType === "manager") {
        dispatch(forgotPasswordManager(values));
      }

    },
    validationSchema: formSchema,
  });

  useEffect(() => {
    
    if (isSuccess) 
    {
      toast.success("Reset link has been sent to your email address. Please wait for a while!");
      dispatch(reset());
    }

    if (isError) 
    {
      toast.error(appErr || serverErr);
      dispatch(reset());
    }

  }, [isSuccess, isError, appErr, serverErr, dispatch]);

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
      <div
        className="row m-4 p-4 justify-content-end"
        style={{ minHeight: "50vh" }}
      >
        <div
          className="col-md-6 p-3 rounded rounded-3 bg-light justify-content-end"
          style={{ marginTop: "180px", marginRight: "-25px" }}
        >
          <div
            className="mt-2 mb-2 p-4 justify-content-end"
          >
            <div className="fw-medium" style={{fontSize: "3vh"}}> Forgot Your Password? </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3 pt-4">
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
                    placeholder="Enter you email address"
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
                  Request Reset Link
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};
