import { useFormik } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import mainbg from "../assets/project-dashboard/main-bg.jpg";
import projectImage from "../assets/addProject-images/AddProject-pic.png"; // Import the local image

export const AddProject = () => {
  const formSchema = Yup.object({
    projectName: Yup.string().required("Project Name is required"),
    projectAmount: Yup.number().required("Project Amount is required"),
    areaLimit: Yup.string().required("Area Limit is required"),
  });

  const ref = useRef();

  const reset = () => {
    ref.current.value = "";
  };

  const formik = useFormik({
    initialValues: {
      projectName: "",
      projectAmount: "",
      areaLimit: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: formSchema,
  });

  return (
    <div className="container-fluid">
      <div className="row" style={{minHeight: "92vh"}}>
        <div
          className="col-md-6 p-0"
          style={{ backgroundImage: `url(${mainbg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
          <div className="d-flex flex-column align-items-center justify-content-center"
            style={{ display: "flex", alignItems: "center", height: "100%"}}>
            <img
              src={projectImage}
              alt="Project"
              style={{ maxWidth: "80%", maxHeight: "100%",borderRadius: "5%"}}
            />
          </div>
        </div>

        <div className="col-md-6 d-flex align-items-center" style={{ backgroundColor: "rgb(93, 150, 245)" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 mt-5 mb-5">
                <p className="text-center text-white display-6" style={{ fontWeight: "400" }}>
                  Create New Project
                </p>
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3 mt-4">
                    <label className="form-label text-dark" style={{ fontSize: "20px" }}>
                      Project Name
                    </label>
                    <input
                      type="text"
                      name="projectName"
                      placeholder="Project Name"
                      className="form-control"
                      value={formik.values.projectName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.projectName && formik.errors.projectName && (
                      <div className="alert alert-danger text-center mt-2">
                        {formik.touched.projectName && formik.errors.projectName}
                      </div>
                    )}
                  </div>

                  <div className="mb-3 mt-4">
                    <label className="form-label text-dark" style={{ fontSize: "20px" }}>
                      Budget Amount
                    </label>
                    <input
                      type="number"
                      name="projectAmount"
                      placeholder="Budget Amount"
                      className="form-control"
                      value={formik.values.projectAmount}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.projectAmount && formik.errors.projectAmount && (
                      <div className="alert alert-danger text-center mt-2">
                        {formik.touched.projectAmount && formik.errors.projectAmount}
                      </div>
                    )}
                  </div>

                  <div className="mb-3 mt-4">
                    <label className="form-label text-dark" style={{ fontSize: "20px" }}>
                      Area Limit
                    </label>
                    <input
                      type="text"
                      name="areaLimit"
                      placeholder="Area Limit"
                      className="form-control"
                      value={formik.values.areaLimit}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.areaLimit && formik.errors.areaLimit && (
                      <div className="alert alert-danger text-center mt-2">
                        {formik.touched.areaLimit && formik.errors.areaLimit}
                      </div>
                    )}
                  </div>

                  <div className="mb-3 mt-4">
                    <label className="form-label text-dark" style={{ fontSize: "20px" }}>
                      Project Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      placeholder="Description"
                      className="form-control"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>

                  <div className="d-flex gap-5 mt-4">
                    <button
                      type="submit"
                      className="btn btn-dark"
                      style={{ fontSize: "22px" }}
                      disabled={!formik.isValid}
                    >
                      Create Project
                    </button>

                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => formik.resetForm()}
                      style={{ fontSize: "22px" }}
                    >
                      Clear
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
