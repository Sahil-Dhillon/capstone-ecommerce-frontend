// src/pages/vendor/VendorLayout.js
import React from 'react';
import VendorSidebar from '../../components/Vendor/Sidebar';

const VendorLayout = ({children}) => {
  return (
    <div className="dashboard">
        {/* <Header /> */}
        <div className="dashboard-container">
          <VendorSidebar />
          <div className="dashboard-content">
            <h1>Welcome to Vendor Dashboard</h1>
            <div className="stats">
              <div className="stat-card">Total Categories: 10</div>
              <div className="stat-card">Total Products: 120</div>
              <div className="stat-card">Total Users: 500</div>
              <div className="stat-card">Total Orders: 45</div>
            </div>
        {children}
        </div>
      </div>
    </div>
  );
};

export default VendorLayout;
