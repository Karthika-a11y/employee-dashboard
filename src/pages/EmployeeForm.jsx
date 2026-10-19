import { useState } from "react";

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    location: "",
    salary: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Employee details entered successfully!");

    console.log("Employee Data:", formData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Employee Form</h4>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                  <label className="form-label">Name</label>

                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter employee name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Designation</label>

                  <input
                    type="text"
                    className="form-control"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Enter designation"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Location</label>

                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter location"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Salary</label>

                  <input
                    type="number"
                    className="form-control"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    placeholder="Enter salary"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Submit Employee
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeForm;