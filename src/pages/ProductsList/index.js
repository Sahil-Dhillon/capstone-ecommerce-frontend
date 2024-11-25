import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Products/SideBar";
import ProductCard from "../../components/Products/ProductCard";
import './ProductListPage.css'
import { useParams } from "react-router-dom";
import axios from "axios";
import CategoriesBar from "../../components/Header/CategoriesBar";
// import Sidebar from "./Sidebar";
// import ProductCard from "./ProductCard";


const ProductListPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
    const { subCategoryName } = useParams(); // Extract subCategoryName from URL
    console.log(subCategoryName)
    const [products, setProducts] = useState([]);
    const [subcategory, setSubcategory] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState({});
  
    useEffect(() => {
      axios.get(`http://localhost:8085/subcategory/name/${subCategoryName}`).then((res)=>{
        setSubcategory(res.data)
        axios.get(`http://localhost:8085/product/findBySubCategory/${res.data.subcategoryId}?pageSize=3`).then((products_res)=>{
          setProducts(products_res.data)
        })
      }).then(setLoading(false))
      
    
    }, [subCategoryName]);

    if (loading) {
        return <h2>Loading {subCategoryName}...</h2>;
    }

  // Toggle Sidebar Visibility
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
    <CategoriesBar/>
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
              </>
  );
};

export default ProductListPage;
