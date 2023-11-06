import { useFormik } from "formik";
import * as Yup from "yup";
import mainbg from "../assets/project-dashboard/main-bg.jpg";
import ep from "../assets/edit-project/ep.jpg";


export const EditProject = () => {

  const formSchema = Yup.object({
    name: Yup.string().required("Project Name is required").max(30, "Project Name must not exceed 30 characters"),
    budget: Yup.number().required("Project Amount is required"),
    alertLimit: Yup.number().required("Alert Limit is required"),
    description: Yup.string().max(400, "Project Description must not exceed 400 characters")
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      budget: "",
      alertLimit: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: formSchema,
  });

  return (
    <div className="px-3 py-3" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: "repeat" }}>
    <div className="row" style={{ backgroundImage: `url(${mainbg})` }}>
        <div className="col-md-3"></div>

        <div
          className="col-md-9 mt-3 mb-3 rounded-4"
          style={{backgroundImage: `url(${ep})`,backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
        >
          <div className="row px-5">
            <div
              className="col-md-7 mt-4 mb-4 px-4 rounded rounded-4 d-flex flex-column justify-content-center"
              style={{
                backgroundColor: "#ffffff",
              }}
            >
              <div className="mt-3 mb-3">
                <h3
                  className="text-center display-6"
                  style={{ fontWeight: "600", color: "#2D91E6" }}
                >
                  Edit Project
                </h3>
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3 mt-4">
                    <label
                      className="form-label text-dark"
                      style={{ fontSize: "25px",fontWeight:"bold" }}
                    >
                      Project Name
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="form-control"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{
                          fontSize: "25px",
                          background:
                            "linear-gradient(-90deg, rgb(45, 145, 230) 0%, rgba(81.53, 129.63, 193.46, 0) 90%)",
                        }}
                      />
                    </div>
                    {formik.touched.name && formik.errors.name && (
                      <div className="alert alert-danger text-center mt-2">
                        {formik.touched.name && formik.errors.name}
                      </div>
                    )}
                  </div>

                  <div className="mb-3 mt-4">
                    <label
                      className="form-label text-dark"
                      style={{ fontSize: "25px",fontWeight:"bold" }}
                    >
                      Budget
                    </label>
                    <div className="input-group">
                      <input
                        type="number"
                        name="budget"
                        placeholder="Budget"
                        className="form-control"
                        value={formik.values.budget}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{
                          fontSize: "25px",
                          background:
                            "linear-gradient(90deg, rgb(45, 145, 230) 0%, rgba(81.53, 129.63, 193.46, 0) 90%)",
                        }}
                      />
                    </div>
                    {formik.touched.budget && formik.errors.budget && (
                      <div className="alert alert-danger text-center mt-2">
                        {formik.touched.budget && formik.errors.budget}
                      </div>
                    )}
                  </div>

                  <div className="mb-3 mt-4">
                    <label
                      className="form-label text-dark"
                      style={{ fontSize: "25px",fontWeight:"bold" }}
                    >
                      Alert Limit
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="alertLimit"
                        placeholder="Alert Limit in %"
                        className="form-control"
                        value={formik.values.alertLimit}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{
                          fontSize: "25px",
                          background:
                            "linear-gradient(-90deg, rgb(45, 145, 230) 0%, rgba(81.53, 129.63, 193.46, 0) 90%)",
                        }}
                      />
                    </div>
                    {formik.touched.alertLimit && formik.errors.alertLimit && (
                      <div className="alert alert-danger text-center mt-2">
                        {formik.touched.alertLimit && formik.errors.alertLimit}
                      </div>
                    )}
                  </div>

                  <div className="mb-3 mt-4">
                    <label
                      className="form-label text-dark font"
                      style={{ fontSize: "25px",fontWeight:"bold" }}
                    >
                      Description
                    </label>
                    <div className="input-group">
                      <textarea
                        type="text"
                        name="description"
                        placeholder="Description"
                        className="form-control"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{
                          minHeight: "200px",
                          fontSize: "25px",
                          background:
                            "linear-gradient(90deg, rgb(45, 145, 230) 0%, rgba(81.53, 129.63, 193.46, 0) 90%)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center m-3 p-2 gap-3 ">
                    <button
                      type="button"
                      className="btn col-3 btn-danger rounded-pill shadow-lg"
                      onClick={() => formik.resetForm()}
                      style={{ fontSize: "25px" }}
                    >
                      Clear
                    </button>

                    <button
                      type="submit"
                      className="btn col-3 btn-primary rounded-pill shadow-lg"
                      style={{ fontSize: "25px"}}
                      disabled={!formik.isValid}
                    >
                      Save
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
