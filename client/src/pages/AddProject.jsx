import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import mainbg from "../assets/project-dashboard/main-bg.jpg";
import projectImage from "../assets/addProject-images/AddProject-pic.png"; 
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProject, reset } from "../features/project/projectSlice";

export const AddProject = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSchema = Yup.object({
    name: Yup.string().required("Project Name is required"),
    budget: Yup.number().required("Project Amount is required"),
    // areaLimit: Yup.string().required("Area Limit is required"),
    description: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      budget: "",
      // areaLimit: "",
      description: "",
    },
    onSubmit: (values) => {
      dispatch(createProject(values));
    },
    validationSchema: formSchema,
  });

  const {isSuccess, isError, isLoading, appErr, serverErr} = useSelector(state => state.project);

  useEffect(() => {

    if (isSuccess)
    {
      message.success("Project Created Successfully!");
      dispatch(reset());
      navigate('/project')
    }

    if (isError)
    {
      message.error(appErr||serverErr);
      dispatch(reset())
    }

  }, [dispatch, isSuccess, isError, appErr, serverErr]);

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
                <p className="text-center text-white display-6" style={{ fontWeight: "400", textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}>
                  Create New Project
                </p>
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3 mt-4">
                    <label className="form-label text-dark" style={{ fontSize: "20px" }}>
                      Project Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Project Name"
                      className="form-control"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="alert alert-danger text-center mt-2">
                        {formik.touched.name && formik.errors.name}
                      </div>
                    )}
                  </div>

                  <div className="mb-3 mt-4">
                    <label className="form-label text-dark" style={{ fontSize: "20px" }}>
                      Budget Amount
                    </label>
                    <input
                      type="number"
                      name="budget"
                      placeholder="Budget Amount"
                      className="form-control"
                      value={formik.values.budget}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.budget && formik.errors.budget && (
                      <div className="alert alert-danger text-center mt-2">
                        {formik.touched.budget && formik.errors.budget}
                      </div>
                    )}
                  </div>

                  {/* <div className="mb-3 mt-4">
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
                  </div> */}

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
                      className="btn btn-dark rounded-pill shadow-lg"
                      style={{ fontSize: "22px" }}
                      disabled={!formik.isValid}
                    >
                      Create Project
                    </button>

                    <button
                      type="button"
                      className="btn btn-dark rounded-pill shadow-lg"
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
