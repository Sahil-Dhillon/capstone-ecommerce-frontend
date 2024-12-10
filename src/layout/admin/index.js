import Header from "../../components/Admin/Header";
import Sidebar from "../../components/Admin/Sidebar";
import React, { useState, useEffect } from "react";




const AdminLayout = ({ children }) => {
    const [counts, setCounts] = useState({
      orderCount: 0,
      categoryCount: 0,
      userCount: 0,
      productCount: 0,
    });
  
    useEffect(() => {
      const fetchCounts = async () => {
        try {
          const response = await fetch("/users/counts");
          if (response.ok) {
            const data = await response.json();
            setCounts(data);
          } else {
            console.error("Failed to fetch dashboard counts");
          }
        } catch (error) {
          console.error("Error fetching dashboard counts:", error);
        }
      };
  
      fetchCounts();
    }, []);
    return (
        <div className="dashboard">
        {/* <Header /> */}
        <div className="dashboard-container">
          <Sidebar />
          <div className="dashboard-content">
            <h1>Welcome to Admin Dashboard</h1>
            <div className="stats">
            <div className="stat-card">Total Categories: {counts.categoryCount}</div>
            <div className="stat-card">Total Products: {counts.productCount}</div>
            <div className="stat-card">Total Users: {counts.userCount}</div>
            <div className="stat-card">Total Orders: {counts.orderCount}</div>
            </div>
        {children}
        </div>
      </div>
    </div>
    );
  };

export default AdminLayout;