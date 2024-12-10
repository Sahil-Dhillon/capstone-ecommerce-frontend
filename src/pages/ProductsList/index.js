import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Products/SideBar";
import { useParams, useSearchParams } from "react-router-dom";
import ProductCard from "../../components/Products/ProductCard";
import './ProductListPage.css';
import axios from "axios";
import CategoriesBar from "../../components/Header/CategoriesBar";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/Error";

const ProductListPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { subCategoryName } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const [products, setProducts] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState({});
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("price");
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  // const [totalPages, setTotalPages] = useState(3); // Total number of pages
  const [pageSize] = useState(8); // Define how many products per page
  const [apiEndpoint, setApiEndpoint] = useState('/product/bySubCategory')
  const [bySearch, setBySearch] = useState(false)
  useEffect(()=>{
    if(subCategoryName){
      setBySearch(false)
    }else{
      setBySearch(true)
    }
  },[])
  useEffect(()=>{
    if(subCategoryName){
      setBySearch(false)
      setLoading(true); // Set loading to true before making API call
      axios.get(`/subcategory/name/${subCategoryName}`).then((res) => {
        setSubcategory(res.data);
      }).catch((err) => {
        setError(err.message); // Set error message if there is an error
        setLoading(false); // Set loading to false in case of error
      });
    }
  },[subCategoryName])

  useEffect(() => {
    if(!bySearch){
      if (subcategory.subcategoryId){
        axios.get(`${apiEndpoint}/${subcategory.subcategoryId}?pageNumber=${currentPage-1}&pageSize=${pageSize}&sortBy=${sortBy}&sort=${sortOrder}`).then((products_res) => {
          setProducts(products_res.data); // Assuming `content` contains the products for the page
          setLoading(false); // Set loading to false after fetching data
          console.log(products_res)
        });
      }
    }
  }, [subcategory, currentPage]); // Re-fetch data when currentPage or subCategoryName changes

  useEffect(() => {

    if (bySearch){
      axios.get(`product/search/${searchQuery}?pageNumber=${currentPage-1}&pageSize=${pageSize}&sortBy=${sortBy}&sort=${sortOrder}`).then((products_res) => {
        setProducts(products_res.data); // Assuming `content` contains the products for the page
        setLoading(false); // Set loading to false after fetching data
        console.log(products_res)
      });
    }
  }, [searchQuery, currentPage]); // Re-fetch data when currentPage or subCategoryName changes





  if (loading) {
    return <Loading message={"Loading..." + subCategoryName} />;
  }

  if (error) {
    return <ErrorPage message={error} />;
  }

  

  // Toggle Sidebar Visibility
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  // Function to handle page changes
  const handlePageChange = (page) => {
    if (page >= 0 ) {
      setCurrentPage(page); // Set current page when user clicks on pagination buttons
    }
  };

  return (
    <>
      {/* <CategoriesBar /> */}
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
          <div className={`col-12 col-md-2 sidebar-container ${showSidebar ? "show" : "hide"}`}>
            <Sidebar />
          </div>

          {/* Product Grid */}
          <div className="col">
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard product={product}
                key={product.productId}
                />
                
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="pagination-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <button
            className="btn btn-outline-secondary"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            style={{ margin: '0 10px' }}
          >
            Previous
          </button>
          <span className="mx-3" style={{ fontSize: '16px' }}>
            Page {currentPage}
          </span>
          <button
            className="btn btn-outline-secondary"
            disabled={products.length < pageSize}
            onClick={() => handlePageChange(currentPage + 1)}
            style={{ margin: '0 10px' }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductListPage;

