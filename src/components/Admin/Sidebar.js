import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";
// import typo_logo from '../../assets/img/logos/2-removebg-preview.png'
import small_logo from '../../assets/img/logos/uw-logo-bg-white.png'

const Sidebar = () => {
  const location = useLocation();
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
        {/* <li>
          <NavLink to="/admin" end activeClassName="active-link">
            Dashboard
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/admin/categories" activeClassName="active-link" style={{color: location.pathname == '/admin/categories' ? '#fff':'#888'}}>
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/products" activeClassName="active-link" style={{color: location.pathname == '/admin/products' ? '#fff':'#888'}}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/subcategories" activeClassName="active-link" style={{color: location.pathname == '/admin/subcategories' ? '#fff':'#888'}}>
            Subcategories
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
