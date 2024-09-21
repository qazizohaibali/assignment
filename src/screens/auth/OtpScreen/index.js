// src/OtpScreen.js
import React, { useState } from "react";
import Forgot from "../../../assets/forgot.svg";
import { FaLock } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../config/WebServices";

import axios from "axios";
import Loading from "../../../components/Loading";

const OtpScreen = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isValid, setIsValid] = useState(true);
  const [isResetPass, setIsResetPass] = useState(false);
  const [isResetPassAfter, setIsResetPassAfter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === "") {
      const newOtp = otp.slice();
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }

      validateOtp(newOtp);
    }
  };

  const validateOtp = (otpArray) => {
    const allDigitsEntered = otpArray.every((digit) => digit !== "");
    setIsValid(allDigitsEntered);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid) {
      // alert(`OTP Submitted: ${otp.join("")}`);

      // Add your submission logic here
      setIsLoading(true);
      try {
        const res = await axios.post(BASE_URL + "/admin/verify-otp", {
          email: state?.data,
          otp: otp.join(""),
        });

        console.log("res............", res.data);

        if (res?.data?.message) {
          setIsLoading(false);
          setIsResetPass(!isResetPass);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        alert(error?.response?.data?.message);
        setIsLoading(false);
      }
    } else {
      alert("Please enter a valid OTP");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex">
      <div className="row flex-grow-1">
        <div className="col-md-1  bg-light">
          <div className="rightSideClsDev">
            <img src={Forgot} alt="Faboa Logo" className="mb-4" />
          </div>
        </div>
        <div className="col-md-11 d-flex flex-column justify-content-center align-items-center bg-light">
          {isResetPassAfter ? (
            <div>
              <h2 className="hello-heading marL">Password Changed</h2>
              <p className="welcome-text paraStyle">
                Your password has been successfully
                <br /> changed
              </p>
              <button
                type="submit"
                className="btn btn-dark btn-block"
                onClick={() => {
                  navigate("/login");
                }}
                disabled={!isValid}
              >
                Back to Log In
              </button>
            </div>
          ) : (
            <div className="w-20">
              <h2 className="hello-heading marL">
                {isResetPass ? "Set a new Password" : "Forgot Password"}
              </h2>
              <p className="welcome-text paraStyle">
                Please enter the 4 digit code sent to
                <br /> <span>{state?.data}</span>
              </p>
              {!isResetPass ? (
                <form onSubmit={handleSubmit}>
                  <div className="otp-fields">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-input-${index}`}
                        type="text"
                        maxLength="1"
                        value={digit}
                        placeholder="-"
                        onChange={(e) => handleChange(e, index)}
                        className={`otp-input form-control addWidth ${
                          !isValid && digit === "" ? "invalid" : ""
                        }`}
                        autoFocus={index === 0}
                      />
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark btn-block "
                    onClick={() => {}}
                    disabled={!isValid}
                  >
                    Confirm
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <FaLock className="form-control-icon" />
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New Password"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <FaLock className="form-control-icon" />
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Repeat New Password"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark btn-block"
                    onClick={() => {
                      setIsResetPassAfter(!isResetPassAfter);
                    }}
                    disabled={!isValid}
                  >
                    Confirm
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
      {isLoading ? <Loading type={"bars"} /> : null}
    </div>
  );
};

export default OtpScreen;
