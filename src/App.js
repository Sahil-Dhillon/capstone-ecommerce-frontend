import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Contact from './pages/Contact';
import Navbar from "./components/Header/Navbar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AuthLayout from "./layout/auth";
import MainLayout from "./layout/main";
import CategoriesPage from "./pages/Category";
import CustomCursor from "./components/Global/Cursor";
import ProductListPage from "./pages/ProductsList";
import ProductPage from "./pages/Product";
import CartPage from "./pages/Cart";
import Dashboard from "./pages/Admin/Dashboard";
import Category from "./pages/Admin/Category";
import Order from "./pages/Admin/Order";
import Product from "./pages/Admin/Product";
import SubCategory from "./pages/Admin/SubCategory";
import User from "./pages/Admin/User";
import AdminLayout from "./layout/admin";
// import Navbar from './components/Vendor/Navbar'
// import Sidebar from './components/Vendor/VendorSidebar';
// import Dashboard from './pages/Vendor/VendorDashboard';
import ProductManagement from "./pages/Vendor/ProductManagement";
import InventoryManagement from "./pages/Vendor/InventoryManagement";
import VendorLayout from "./layout/Vendor";
import UserProfilePage from "./pages/UserProfile/UserProfilePage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import WishlistPage from "./pages/WishlistPage";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/WishlistPage";
import ContactUs from "./pages/Contact";
import FAQPage from "./pages/FAQ";
import PricingPolicy from "./pages/PricingPolicy";
import FeaturesPage from "./pages/Features";
import BlogPage from "./pages/Blog";
import ProtectedRouteAdmin from "./routes/AdminRoute";
import ProtectedRouteVendor from "./routes/VendorRoute";
import ScrollToTop from "./utils/ScrollToTop";
import OrderFailurePage from "./pages/OrderFailurePage";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      {/* <Navbar /> */}
      {/* <CustomCursor/> */}
      <Routes>
        <Route
          path="/auth/*"
          element={
            <AuthLayout>
              <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Routes>
            </AuthLayout>
          }
        />
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="" element={<Home />} />
                <Route
                  path="/category/:categoryName"
                  element={<CategoriesPage />}
                />
                <Route
                  path="/products/:subCategoryName"
                  element={<ProductListPage />}
                />

<Route
                  path="/productSearch/:searchBy"
                  element={<ProductListPage />}
                />
                {/* <Route
                  path="/products/:subCategoryName"
                  element={<ProductListPage />}
                /> */}

                <Route path="/products" element={<ProductListPage />} />
                <Route path="/product/:productId" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/Contact" element={<ContactUs />} />
                <Route path="/UserProfile" element={<UserProfilePage />} />
                <Route path="/OrderSuccess" element={<OrderSuccessPage />} />
                <Route path="/Wishlist" element={<Wishlist />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/FAQ" element={<FAQPage />} />
                <Route path="/PricingPolicy" element={<PricingPolicy />} />
                <Route path="/Features" element={<FeaturesPage />} />
                <Route path="/Blog" element={<BlogPage />} />
                <Route path="/OrderFailure" element={<OrderFailurePage />} />
              </Routes>
            </MainLayout>
          }
        />
        <Route element={<ProtectedRouteAdmin />}>
          <Route
            path="/admin/*"
            element={
              <AdminLayout>
                <Routes>
                  {/* <Route path="" element={<Dashboard />} /> */}
                  <Route path="/categories" element={<Category />} />
                  <Route path="/orders" element={<Order />} />
                  <Route path="/products" element={<Product />} />
                  <Route path="/subcategories" element={<SubCategory />} />
                  <Route path="/users" element={<User />} />
                </Routes>
              </AdminLayout>
            }
          />
        </Route>
        <Route element={<ProtectedRouteVendor />}>
        <Route
          path="/vendor/*"
          element={
            <VendorLayout>
              <Routes>
                {/* <Route path="" element={<Dashboard />} /> */}
                {/* <Route path="" element={<VendorDashboard />} /> */}
                <Route path="/products" element={<ProductManagement />} />
                <Route path="/inventory" element={<InventoryManagement />} />
              </Routes>
            </VendorLayout>
          }
        />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
