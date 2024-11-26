import Header from "../../components/Admin/Header";
import Sidebar from "../../components/Admin/Sidebar";

const AdminLayout = ({ children }) => {
    return (
        <div className="dashboard">
        {/* <Header /> */}
        <div className="dashboard-container">
          <Sidebar />
          <div className="dashboard-content">
            <h1>Welcome to Admin Dashboard</h1>
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

export default AdminLayout;