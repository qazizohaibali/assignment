import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Forgot from "../../../assets/forgot.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../config/WebServices";
import Loading from "../../../components/Loading";

const ForgotPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmit = async () => {
    setError("");

    setIsLoading(true);

    try {
      const res = await axios.post(BASE_URL + "/admin/forget-password", {
        email: email,
      });

      console.log("res............", res.data);

      if (res?.data?.message) {
        setIsLoading(false);

        navigate("/resetPassword", {
          state: {
            data: email,
          },
        });
      } else {
        setError("Invalid email or password.");
        setIsLoading(false);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      alert(error?.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex">
      <div className="row flex-grow-1">
        {/* Left side branding section */}
        <div className="col-md-1  bg-light">
          <div className="rightSideClsDev">
            <img src={Forgot} alt="Faboa Logo" className="mb-4" />
          </div>
        </div>

        {/* Right side form section */}
        <div className="col-md-11 d-flex flex-column justify-content-center align-items-center bg-light">
          <div className="">
            <h2 className="hello-heading">Forgot Password</h2>
            <p className="welcome-text limitedWidth">
              Please enter email address linked with your account.
            </p>

            <div className="form-group mb-3 ">
              <FaEnvelope className="form-control-icon" />
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                required
                onChange={(v) => setEmail(v.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-dark btn-block "
              onClick={() => {
                onSubmit();
              }}
            >
              Submit
            </button>

            {/* <p className="mt-3 forgot-password-link">
              <a href="#" className="text-dark">
                Login
              </a>
            </p> */}
          </div>
        </div>
      </div>
      {isLoading ? <Loading type={"bars"} /> : null}
    </div>
  );
};

export default ForgotPage;
