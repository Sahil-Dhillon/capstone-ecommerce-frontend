// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
// const Login = () => {
//     return (
//       <div
//         style={{
//           background: 'linear-gradient(to right, #44318D, #2A1B3D)',
//           color: 'white',
//           minHeight: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <div
//           className="card p-4"
//           style={{
//             backgroundColor: '#2A1B3D',
//             width: '350px',
//             borderRadius: '10px',
//             boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.6)',
//             color:'white'
//           }}
//         >
//           <h2 className="text-center mb-4" style={{ color: '#fff' }}>
//             Login
//           </h2>
//           <form>
//             <div className="mb-3">
//               <label className="form-label">Email</label>
//               <input type="email" className="form-control" placeholder="Enter your email" />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <input type="password" className="form-control" placeholder="Enter your password" />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Login as</label>
//               <select className="form-select">
//                 <option value="customer">Customer</option>
//                 <option value="vendor">Vendor</option>
//               </select>
//             </div>
//             <button
//               type="submit"
//               className="btn w-100"
//               style={{ backgroundColor: '#D83F87', color: 'white' }}
//             >
//               Login
//             </button>
//           </form>
//           <p className="text-center mt-3">
//             Don't have an account? <Link to="/register" style={{ color: '#D83F87' }}>Register</Link>
//           </p>
//         </div>
//       </div>
//     );
//   };
  
//   export default Login;

import React from "react";
import { Link } from "react-router-dom";
import big_logo from '../../../assets/img/logos/uw-logo-bg-full.png'

const Login = () => {
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
          <form>
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="login-email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="login-email"
                placeholder="Your Email"
              />
            </div>
            {/* Password */}
            <div className="mb-3">
              <label htmlFor="login-password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="login-password"
                placeholder="Your Password"
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
            <Link to="/register" style={{ color: "#D83F87", cursor: "pointer" }}>
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
            flexDirection:'column',
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
