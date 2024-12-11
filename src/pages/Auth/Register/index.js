import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import big_logo from "../../../assets/img/logos/uw-logo-bg-full.png";
import { AppContext } from "../../../context/AppContext";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    roles: "USER", // Default role
    confirmPassword : ""
  });
  const { updateUserData } = useContext(AppContext);
  const [isRegistering, setIsRegistering] = useState(false); // For popup control
  const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:8085";
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const from = location.state?.from || "/"; // Default to home if no previous page

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      mobile: formData.mobile,
      password: formData.password,
      userAddresses: [],
      roles: formData.roles.toUpperCase(),
    };
    if(!/^\d{10}$/.test(formData.mobile)) {
      alert("Phone number must be exactly 10 digits.");
      return
      };
    if(formData.password !== formData.confirmPassword){
      alert("Confirm password should match your password.")
    }
      try {
        const response = await axios.post(`/auth/signup`, payload);
        setIsRegistering(true); // Show popup
        console.log("Registration successful:", response.data);

        // Automatically log in the user
        // const loginPayload = {
        //   email: formData.email,
        //   password: formData.password,
        // };

        setTimeout(async () => {
          // try {
          //   const loginResponse = await axios.post(`/auth/login`, loginPayload);
          //   console.log("Login successful:", loginResponse.data);
          //   localStorage.setItem("authToken", loginResponse.data.token);
          //   updateUserData()
          //   alert("Login successful!");
          //   const redirectPath = searchParams.get("redirect") || "/";
          //   navigate(redirectPath.startsWith('/') ? redirectPath : `/${redirectPath}`);
          // } catch (loginError) {
          //   console.error("Error during login:", loginError);
          //   alert("Login failed! Please try logging in manually.");
          //   navigate("/auth/login"); // Redirect to login page
          // }
          navigate("/auth/login");
        }, 1000); // Wait 2 seconds before logging in
      } catch (error) {
        console.error("Error during registration:", error);
        alert("Registration failed! Please try again.");
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
            padding:0
          }}
        >
          {/* Left Column - Form */}
          <div className="p-3" style={{ flex: 1 }}>
            <h2 className="mb-2" style={{ fontWeight: "bold" }}>
              Sign Up
            </h2>
            <form onSubmit={handleSubmit}>
              {/* First Name & Last Name */}
              <div className="row mb-1">
                <div className="col">
                  <label htmlFor="firstName" className="form-label mt-2 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control-signup form-control"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="lastName" className="form-label mt-2 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control-signup form-control"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />
                </div>
              </div>
              {/* Email */}
              <div className="mb-1">
                <label htmlFor="email" className="form-label mt-2 mb-1 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control-signup form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              {/* Password */}
              <div className="mb-1">
                <label htmlFor="password" className="form-label mt-2 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control-signup form-control"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Your Password"
                  pattern = "(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}"
                  required
                />
              {/* </div> */}
              {/* Password */}
              {/* <div className="mb-1"> */}
                <label htmlFor="confirmPassword" className="form-label mt-2 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control-signup form-control"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                />
              </div>
              {/* Phone Number */}
              <div className="mb-1">
                <label htmlFor="mobile" className="form-label mt-2 mb-1">
                  Phone Number
                </label>
                <input
                  type="number"
                  minLength={10}
                  className="form-control-signup form-control"
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter a 10 digit phone number."
                  required
                />

              </div>
              {/* Register As */}
              <div className="mb-3">
                <label htmlFor="roles" className="form-label mt-2 mb-1">
                  Register As
                </label>
                <select
                  className="form-select"
                  id="roles"
                  value={formData.roles}
                  onChange={handleChange}
                >
                  <option value="USER">Customer</option>
                  <option value="VENDOR">Vendor</option>
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
            <p className="text-center mt-1">
              Already a member?{" "}
              <Link to="/auth/login" style={{ color: "#D83F87", cursor: "pointer" }}>
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
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <img
              src={big_logo}
              alt="Logo"
              style={{ width: "250px", marginBottom: "20px" }}
            />
            <h3>Join Us Today!</h3>
            <p>Create an account to get started.</p>
          </div>
        </div>

        {/* Registration Popup */}
        {isRegistering && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h3>User Registered Successfully!</h3>
              <p>Logging in...</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default Register;
