import ForgetPassImg3 from "../assets/ForgetPassword-images/ForgetPassImg3.jpg";
import * as Yup from "yup";
import { useFormik } from "formik";

export const ForgetPass1 = () => {
  const formSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: formSchema,
  });

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
            style={{ fontWeight: "bold" }}
          >
            Forgot Your Password?
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3 pt-4">
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
                <button
                  type="submit"
                  className="btn btn-outline-warning p-2 mt-3"
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
