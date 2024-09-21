import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Par from "../../../assets/par.svg";
import Faboa from "../../../assets/faboa.svg";
import axios from "axios";
import { BASE_URL } from "../../../config/WebServices";
import Loading from "../../../components/Loading";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmit = async () => {
    setError("");

    if (!email || !pass) {
      setError("Email and Password are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(
        BASE_URL + "/admin/login-admin",
        {
          email: email,
          password: pass,
          type: 0,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        }
      );
      if (res?.data?.code === 200) {
         localStorage.setItem("adminData", JSON.stringify(res?.data));
         localStorage.setItem("ForceRestart", true);
        setIsLoading(false);
        navigate("/");
      } else {
        setError("Invalid email or password.");
        setIsLoading(false);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      setIsLoading(false);
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
            <h2 className="hello-heading">Hello Again!</h2>
            <p className="welcome-text">Welcome Back</p>

            <div className="form-group mb-3">
              <FaEnvelope className="form-control-icon" />
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                required
                onChange={(v) => setEmail(v.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <FaLock className="form-control-icon" />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                onChange={(v) => setPass(v.target.value)}
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="form-check mb-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-dark btn-block"
              onClick={() => {
                onSubmit();
              }}
            >
              Log In
            </button>

            <p className="mt-3 forgot-password-link">
              <Link to="/forgot" className="text-dark">
                Forgot Password
              </Link>
            </p>
          </div>
        </div>
      </div>

      {isLoading ? <Loading type={"bars"} /> : null}
    </div>
  );
};

export default LoginPage;
