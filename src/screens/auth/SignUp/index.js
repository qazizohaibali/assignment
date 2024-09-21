import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import Par from "../../../assets/par.svg";
import Faboa from "../../../assets/faboa.svg";
import axios from "axios";
import { BASE_URL } from "../../../config/WebServices";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";

const SignUpPage = () => {
  const getUserData = JSON.parse(localStorage.getItem("adminData"));
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name) alert("Full name is required.");
    if (!formData.last_name) alert("Last name is required.");
    if (!formData.email) alert("Email is required.");
    else if (!/\S+@\S+\.\S+/.test(formData.email)) alert("Email is invalid.");
    if (!formData.password) alert("Password is required.");
    else if (formData.password.length < 6)
      alert("Password must be at least 6 characters long.");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await axios.post(
          BASE_URL + "/admin/add", // Replace with your API endpoint
          formData,
          {
            headers: {
              "x-sh-auth": getUserData?.token,
            },
          }
        );
        setSuccess("Admin added successfully!");
        setTimeout(() => {
          navigate("/dashboard");
          setLoading(false);
        }, 2000);
      } catch (error) {
        setErrors({ form: "Failed to add admin. Try again." });
        alert(error?.response?.data?.message);
        setLoading(false);
      }
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex">
      <div className="row flex-grow-1">
        {/* Left side branding section */}
        <div className="col-md-7 d-flex flex-column justify-content-center align-items-center text-center rightSideCls text-light">
          <img
            src={Par}
            alt="Faboa Logo"
            className="mb-4"
            style={{ width: "119px" }}
          />
          <img
            src={Faboa}
            alt="Faboa Logo"
            className="mb-4"
            style={{ width: "22em" }}
          />
          <p className=" subHead">The Most Iconic Travel Club</p>
          <button className="btn btnCls btn-success mt-4">Read More</button>
        </div>

        {/* Right side form section */}
        <div className="col-md-5 d-flex flex-column justify-content-center align-items-center bg-light">
          <div className="w-75">
            <h2 className="mb-4 hello-heading">
              Hello! {getUserData?.user?.email?.split("@")[0]}
            </h2>
            <p className="text-muted mb-4">Add Admin</p>
            {success && <p className="text-success">{success}</p>}
            {errors.form && <p className="text-danger">{errors.form}</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <FaUser className="form-control-icon" />
                <input
                  type="text"
                  name="first_name"
                  className={`form-control ${
                    errors.first_name ? "is-invalid" : ""
                  }`}
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
                {errors.first_name && (
                  <div className="invalid-feedback">{errors.first_name}</div>
                )}
              </div>

              <div className="form-group mb-3">
                <FaUser className="form-control-icon" />
                <input
                  type="text"
                  name="last_name"
                  className={`form-control ${
                    errors.last_name ? "is-invalid" : ""
                  }`}
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
                {errors.last_name && (
                  <div className="invalid-feedback">{errors.last_name}</div>
                )}
              </div>
              <div className="form-group mb-3">
                <FaEnvelope className="form-control-icon" />
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="form-group mb-3">
                <FaLock className="form-control-icon" />
                <input
                  type="password"
                  name="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <button type="submit" className="btn btn-dark btn-block">
                Add Admin
              </button>
            </form>
          </div>
        </div>
      </div>
      {isLoading ? <Loading type={"bars"} /> : null}
    </div>
  );
};

export default SignUpPage;
