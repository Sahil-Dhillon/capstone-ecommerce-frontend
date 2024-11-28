import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
// import typo_logo from '../../assets/img/logos/2-removebg-preview.png'
import small_logo from '../../../assets/img/logos/uw-logo-bg-white.png'

const VendorSidebar = () => {
  return (
    <div className="sidebar">
      <div>
                    {/* Logo */}
                    <Link to="/" className="navbar-brand">
                        <img src={small_logo} alt="Logo" style={{ width: '100px' }} />
                        {/* <img src={typo_logo} alt="Logo" style={{ height: '50px' }} /> */}
                    </Link>
                </div>
      <ul>
        <li>
          <NavLink to="/vendor/" end activeClassName="active-link">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/vendor/products" activeClassName="active-link">
            Add Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/vendor/inventory" activeClassName="active-link">
            Inventory
          </NavLink>
        </li>
        
        
      </ul>
    </div>
  );
};

export default VendorSidebar;
