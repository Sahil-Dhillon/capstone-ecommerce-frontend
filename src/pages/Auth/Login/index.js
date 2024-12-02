import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation, useSearchParams } from "react-router-dom";
import axios from "axios"; // For API requests
import big_logo from '../../../assets/img/logos/uw-logo-bg-full.png';
import { AppContext } from "../../../context/AppContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation(); // To get the referrer page
  const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:8085";
  const {updateUserData } = useContext(AppContext);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await axios.post(`/auth/login`, payload);
      alert("Login successful!");
      console.log(response.data);

      // Store token or user info in localStorage or context (as per your app structure)
      localStorage.setItem("authToken", response.data.token);
      updateUserData()

      // Redirect to the referring page or home\
      const redirectPath = searchParams.get("redirect") || "/";
      navigate(redirectPath.startsWith('/') ? redirectPath : `/${redirectPath}`);
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed! Please check your credentials.");
    }
  };

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
        <div className="p-4" style={{ flex: 1 }}>
          <h2 className="mb-4" style={{ fontWeight: "bold" }}>
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Your Password"
                required
              />
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
              Login
            </button>
          </form>
          {/* Link to Register */}
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/auth/register" style={{ color: "#D83F87", cursor: "pointer" }}>
              Sign up
            </Link>
          </p>
        </div>

        {/* Right Column - Illustration */}
        <div
          style={{
            flex: 1,
            background: `linear-gradient(45deg, #44318D, #2A1B3D)`,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <img
            src={big_logo} // Replace with your logo path
            alt="Logo"
            style={{ width: "150px", marginBottom: "20px" }}
          />
          <h3>Welcome Back!</h3>
          <p>Login to access your account.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
