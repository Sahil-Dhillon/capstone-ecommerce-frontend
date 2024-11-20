import Navbar from "../../components/Header/Navbar";

const MainLayout = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
      </div>
    );
  };

export default MainLayout;