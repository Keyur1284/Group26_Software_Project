import { useFormik } from "formik";
import { useRef } from "react";
import * as Yup from "yup";

export const AddExpense = () => {
  const formSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    category: Yup.string().required("Category is required"),
    amount: Yup.number().required("Amount is required"),
    Date: Yup.date().required("Date is required"),
  });

  const ref = useRef();

  const reset = () => {
    ref.current.value = "";
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      description: "",
      amount: "",
      Date: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: formSchema,
  });

  const categoryOptions = ["Travel", "Food", "Accommodation", "Other"];

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-6 p-0 img-fluid"
          style={{
            backgroundColor: "black",
            height: "auto",
            minHeight: "100vh",
          }}
        >
          <div className="h-100 d-flex flex-column align-items-center justify-content-center">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label
                  className="form-label"
                  htmlFor="customFile"
                  style={{ color: "white", fontSize: "22px" }}
                >
                  Attach your file here
                </label>
                <div className="input-group">
                  <input
                    type="file"
                    name="file"
                    ref={ref}
                    placeholder="No file chosen"
                    className="form-control"
                    value={formik.values.file}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={reset}
                  style={{ fontSize: "22px" }}
                >
                  Clear Attachment
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          className="col-md-6 d-flex flex-column align-items-center justify-content-center"
          style={{
            backgroundColor: "rgb(93, 150, 245)",
            minHeight: "92vh",
          }}
        >
          <div className="col-md-10 mt-5 mb-5">
            <p className="text-center text-white display-6" style={{ fontWeight: "400" }}>
              Add your Expense
            </p>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3 mt-5">
                <label
                  className="form-label text-dark"
                  style={{ fontSize: "22px" }}
                >
                  Name
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
                  />
                </div>
                {formik.touched.name && formik.errors.name && (
                  <div className="alert alert-danger text-center mt-2">
                    {formik.touched.name && formik.errors.name}
                  </div>
                )}
              </div>

              <div className="mb-3 mt-5">
                <label
                  htmlFor="date"
                  className="form-label text-dark"
                  style={{ fontSize: "22px" }}
                >
                  Date
                </label>
                <div className="input-group">
                  <input
                    type="date"
                    name="Date"
                    className="form-control"
                    value={formik.values.Date}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.Date && formik.errors.Date && (
                  <div className="alert alert-danger text-center mt-2">
                    {formik.touched.Date && formik.errors.Date}
                  </div>
                )}
              </div>

              <div className="mb-3 mt-5">
                <label
                  className="form-label text-dark"
                  style={{ fontSize: "22px" }}
                >
                  Category
                </label>
                <div className="input-group">
                  <select
                    name="category"
                    className="form-select"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {categoryOptions.map((categoryOption) => (
                      <option key={categoryOption} value={categoryOption}>
                        {categoryOption}
                      </option>
                    ))}
                  </select>
                </div>
                {formik.touched.category && formik.errors.category && (
                  <div className="alert alert-danger text-center mt-2">
                    {formik.touched.category && formik.errors.category}
                  </div>
                )}
              </div>

              <div className="mb-3 mt-5">
                <label
                  className="form-label text-dark"
                  style={{ fontSize: "22px" }}
                >
                  Amount
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    className="form-control"
                    value={formik.values.amount}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.amount && formik.errors.amount && (
                  <div className="alert alert-danger text-center mt-2">
                    {formik.touched.amount && formik.errors.amount}
                  </div>
                )}
              </div>

              <div className="mb-3 mt-5">
                <label
                  className="form-label text-dark"
                  style={{ fontSize: "22px" }}
                >
                  Description
                </label>
                <div className="input-group">
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
              </div>

              <div className="d-flex gap-5 mt-5">
                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{ fontSize: "22px" }}
                  disabled={!formik.isValid}
                >
                  Save and close
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
  );
};
