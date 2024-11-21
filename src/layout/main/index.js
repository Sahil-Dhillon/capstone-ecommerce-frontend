import Footer from "../../components/Footer";
import Navbar from "../../components/Header/Navbar";

const MainLayout = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
        <Footer/>
      </div>
    );
  };

export default MainLayout;