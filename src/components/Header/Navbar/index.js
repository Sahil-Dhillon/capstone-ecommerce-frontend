import React from 'react';
import typo_logo from '../../../assets/img/logos/2-removebg-preview.png'
import small_logo from '../../../assets/img/logos/uw-logo-no-bg-black.png'
import { useLocation } from "react-router-dom";
const Navbar = () => {
    const location = useLocation(); // Get current route
  const isHomePage = location.pathname === "/";
    return (
        <header 
        style={{
            backgroundColor: isHomePage ? "transparent" : "#fff",
            color: isHomePage ? "#fff" : "#000",
            padding: "10px 20px",
            position: isHomePage ? "absolute":"static",
            width: "100%",
            zIndex: 1000,
          }}
        >
            {/* Top Bar */}
            <div className="d-flex justify-content-between align-items-center p-3">
                <div>
                    {/* Logo */}
                    <a href="/" className="navbar-brand">
                        <img src={small_logo} alt="Logo" style={{ width: '60px' }} />
                        <img src={typo_logo} alt="Logo" style={{ height: '50px' }} />
                    </a>
                </div>

                {/* Search Bar */}
                <div className="d-none d-md-block">
                    <form className="d-flex">
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Search for products..."
                        />
                        <button className="btn btn-outline-secondary" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}

        </header>
    );
};

export default Navbar;
