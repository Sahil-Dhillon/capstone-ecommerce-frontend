import React from "react";
import Sidebar from "../../../components/Admin/Sidebar";
import Header from "../../../components/Admin/Header";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-container">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
