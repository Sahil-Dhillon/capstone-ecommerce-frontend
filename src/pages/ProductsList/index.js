import React, { useState } from "react";
import Sidebar from "../../components/Products/SideBar";
import ProductCard from "../../components/Products/ProductCard";
import './ProductListPage.css'
// import Sidebar from "./Sidebar";
// import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Nike Pegasus 41 PRM", price: 120, image: "https://via.placeholder.com/150", category: "Running" },
  { id: 2, name: "Nike Pegasus 41 PRM", price: 120, image: "https://via.placeholder.com/150", category: "Running" },
  { id: 3, name: "Nike Pegasus 41 PRM", price: 120, image: "https://via.placeholder.com/150", category: "Running" },
  { id: 3, name: "Nike Pegasus 41 PRM", price: 120, image: "https://via.placeholder.com/150", category: "Running" },
  { id: 3, name: "Nike Pegasus 41 PRM", price: 120, image: "https://via.placeholder.com/150", category: "Running" },
  { id: 3, name: "Nike Pegasus 41 PRM", price: 120, image: "https://via.placeholder.com/150", category: "Running" },
  { id: 3, name: "Nike Pegasus 41 PRM", price: 120, image: "https://via.placeholder.com/150", category: "Running" },
  { id: 3, name: "Nike Pegasus 41 PRM", price: 120, image: "https://via.placeholder.com/150", category: "Running" },
  { id: 3, name: "Nike Pegasus 41 PRM", price: 120, image: "https://via.placeholder.com/150", category: "Running" },
  { id: 3, name: "Nike Pegasus 41 PRM", price: 120, image: "https://via.placeholder.com/150", category: "Running" },
  { id: 3, name: "Nike Pegasus 41 PRM", price: 120, image: "https://via.placeholder.com/150", category: "Running" },
  { id: 3, name: "Nike Pegasus 41 PRM", price: 120, image: "https://via.placeholder.com/150", category: "Running" },
  { id: 3, name: "Nike Pegasus 41 PRM", price: 120, image: "https://via.placeholder.com/150", category: "Running" },
  { id: 3, name: "Nike Pegasus 41 PRM", price: 120, image: "https://via.placeholder.com/150", category: "Running" },
  { id: 3, name: "Nike Pegasus 41 PRM", price: 120, image: "https://via.placeholder.com/150", category: "Running" },
  { id: 3, name: "Nike Pegasus 41 PRM", price: 120, image: "https://via.placeholder.com/150", category: "Running" },
  { id: 3, name: "Nike Pegasus 41 PRM", price: 120, image: "https://via.placeholder.com/150", category: "Running" },
];

const ProductListPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  // Toggle Sidebar Visibility
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="container-fluid">
      {/* Top Bar */}
      <div className="row align-items-center py-3">
        <div className="col">
          <button
            className="btn btn-outline-primary"
            onClick={toggleSidebar}
          >
            {showSidebar ? "Hide Filters" : "Show Filters"}
          </button>
        </div>
        <div className="col-auto">
          <select className="form-select">
            <option value="price-asc">Sort By: Price Low to High</option>
            <option value="price-desc">Sort By: Price High to Low</option>
            <option value="popularity">Sort By: Popularity</option>
          </select>
        </div>
      </div>

      <div className="row">
        {/* Sidebar */}
        <div
          className={`col-12 col-md-2 sidebar-container ${showSidebar ? "show" : "hide"}`}
        >
          <Sidebar />
        </div>

        {/* Product Grid */}
        <div className="col">
          <div className="product-grid">
            {products.map((product) => (
            //   <div className="col-6 col-sm-4 col-lg-3 mb-4" key={product.id}>
                <ProductCard product={product} />
            //   </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
