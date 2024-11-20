import React from "react";
import { Link } from "react-router-dom";
import big_logo from '../../../assets/img/logos/uw-logo-bg-full.png'
const Register = () => {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="container d-flex"
        style={{
          maxWidth: "900px",
          background: "white",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* Left Column - Form */}
        <div className="p-3" style={{ flex: 1 }}>
          <h2 className="mb-2" style={{ fontWeight: "bold" }}>
            Sign Up
          </h2>
          <form>
            {/* First Name & Last Name */}
            <div className="row mb-1">
              <div className="col">
                <label htmlFor="first-name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="first-name"
                  placeholder=""
                />
              </div>
              <div className="col">
                <label htmlFor="last-name" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="last-name"
                  placeholder=""
                />
              </div>
            </div>
            {/* Email */}
            <div className="mb-1">
              <label htmlFor="register-email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="register-email"
                placeholder="Your Email"
              />
            </div>
            {/* Password */}
            <div className="mb-1">
              <label htmlFor="register-password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="register-password"
                placeholder="Your Password"
              />
            </div>
            {/* Phone Number */}
            <div className="mb-1">
              <label htmlFor="phone-number" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phone-number"
                placeholder="1234567890"
              />
            </div>
            {/* Register As */}
            <div className="mb-3">
              <label htmlFor="register-as" className="form-label">
                Register As
              </label>
              <select className="form-select" id="register-as">
                <option value="customer">Customer</option>
                <option value="vendor">Vendor</option>
              </select>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: "#44318D",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Register
            </button>
          </form>
          {/* Link to Login */}
          <p className="text-center mt-3">
            Already a member?{" "}
            <Link to="/login" style={{ color: "#D83F87", cursor: "pointer" }}>
              Login
            </Link>
          </p>
        </div>

        {/* Right Column - Illustration */}
        <div
          style={{
            flex: 1,
            background: `linear-gradient(45deg, #44318D, #2A1B3D)`,
            display: "flex",
            flexDirection:'column',
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            padding: "20px",
          }}
        >
            <img
            src= {big_logo}// Replace with your logo path
            alt="Logo"
            style={{ width: "250px", marginBottom: "20px" }}
          />
          <h3>Join Us Today!</h3>
          <p>Create an account to get started.</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
