import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
// import typo_logo from '../../assets/img/logos/2-removebg-preview.png'
import small_logo from '../../assets/img/logos/uw-logo-bg-white.png'

const Sidebar = () => {
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
          <NavLink to="/admin" end activeClassName="active-link">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/categories" activeClassName="active-link">
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/products" activeClassName="active-link">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/subcategories" activeClassName="active-link">
            Subcategories
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/orders" activeClassName="active-link">
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/users" activeClassName="active-link">
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
