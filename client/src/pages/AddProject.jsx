import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import mainbg from "../assets/project-dashboard/main-bg.jpg";
import projectImage from "../assets/addProject-images/AddProject-pic.png"; 
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProject, reset } from "../features/project/projectSlice";
import { Loading } from "../components/Loading";

export const AddProject = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSchema = Yup.object({
    name: Yup.string().required("Project Name is required").max(100, "Project Name must not exceed 100 characters").min(1).trim(),
    budget: Yup.number().required("Project Amount is required"),
    alertLimit: Yup.number().required("Alert Limit is required"),
    description: Yup.string().max(400, "Project Description must not exceed 400 characters").min(1).trim(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      budget: "",
      alertLimit: "",
      description: "",
    },
    onSubmit: (values) => {
      dispatch(createProject(values));
    },
    validationSchema: formSchema,
  });

  const {isSuccess, isError, isLoading, appErr, serverErr} = useSelector(state => state.project);

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

    if (isSuccess)
    {
      toast.success("Project Created Successfully!");
      dispatch(reset());
      navigate('/projects')
    }

    if (isError)
    {
      toast.error(appErr||serverErr);
      dispatch(reset())
    }

  }, [dispatch, isSuccess, isError, appErr, serverErr]);

  if (isLoading)
  {
    return (
      <Loading />
    )
  }

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
                    <label className="form-label text-dark" style={{ fontSize: "20px", fontWeight:"600" }}>
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
                    <label className="form-label text-dark" style={{ fontSize: "20px", fontWeight:"600" }}>
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

                  <div className="mb-3 mt-4">
                    <label className="form-label text-dark" style={{ fontSize: "20px", fontWeight:"600" }}>
                      Alert Limit
                    </label>
                    <input
                      type="number"
                      name="alertLimit"
                      placeholder="Alert Limit in %"
                      className="form-control"
                      value={formik.values.alertLimit}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.alertLimit && formik.errors.alertLimit && (
                      <div className="alert alert-danger text-center mt-2">
                        {formik.touched.alertLimit && formik.errors.alertLimit}
                      </div>
                    )}
                  </div>

                  <div className="mb-3 mt-4">
                    <label className="form-label text-dark" style={{ fontSize: "20px", fontWeight:"600" }}>
                      Project Description
                    </label>
                    <textarea
                      type="text"
                      name="description"
                      placeholder="Description"
                      className="form-control"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    
                    {formik.touched.description && formik.errors.description && (
                      <div className="alert alert-danger text-center mt-2">
                        {formik.touched.description && formik.errors.description}
                      </div>
                    )}

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
                      onClick={() => navigate('/projects')}
                      style={{ fontSize: "22px" }}
                    >
                      Cancel
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
