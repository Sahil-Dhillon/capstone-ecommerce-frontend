// import React, { useContext, useEffect, useState } from "react";
// import Sidebar from "../../components/Products/SideBar";
// import { useParams, useSearchParams } from "react-router-dom";
// import ProductCard from "../../components/Products/ProductCard";
// import './ProductListPage.css';
// import axios from "axios";
// import CategoriesBar from "../../components/Header/CategoriesBar";
// import Loading from "../../components/Loading";
// import ErrorPage from "../../components/Error";

// const ProductListPage = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const { subCategoryName } = useParams();
//   const [searchParams] = useSearchParams();
//   const searchQuery = searchParams.get("q");
//   const [products, setProducts] = useState([]);
//   const [subcategory, setSubcategory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [category, setCategory] = useState({});
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [sortBy, setSortBy] = useState("price");
//   const [currentPage, setCurrentPage] = useState(1); // Track current page
//   // const [totalPages, setTotalPages] = useState(3); // Total number of pages
//   const [pageSize] = useState(8); // Define how many products per page
//   const [apiEndpoint, setApiEndpoint] = useState('/product/bySubCategory')
//   const [bySearch, setBySearch] = useState(false)
//   useEffect(()=>{
//     if(subCategoryName){
//       setBySearch(false)
//     }else{
//       setBySearch(true)
//     }
//   },[])
//   useEffect(()=>{
//     if(subCategoryName){
//       setBySearch(false)
//       setLoading(true); // Set loading to true before making API call
//       axios.get(`/subcategory/name/${subCategoryName}`).then((res) => {
//         setSubcategory(res.data);
//       }).catch((err) => {
//         setError(err.message); // Set error message if there is an error
//         setLoading(false); // Set loading to false in case of error
//       });
//     }
//   },[subCategoryName])

//   useEffect(() => {
//     if(!bySearch){
//       if (subcategory.subcategoryId){
//         axios.get(`${apiEndpoint}/${subcategory.subcategoryId}?pageNumber=${currentPage-1}&pageSize=${pageSize}&sortBy=${sortBy}&sort=${sortOrder}`).then((products_res) => {
//           setProducts(products_res.data); // Assuming `content` contains the products for the page
//           setLoading(false); // Set loading to false after fetching data
//           console.log(products_res)
//         });
//       }
//     }
//   }, [subcategory, currentPage]); // Re-fetch data when currentPage or subCategoryName changes

//   useEffect(() => {

//     if (bySearch){
//       axios.get(`product/search/${searchQuery}?pageNumber=${currentPage-1}&pageSize=${pageSize}&sortBy=${sortBy}&sort=${sortOrder}`).then((products_res) => {
//         setProducts(products_res.data); // Assuming `content` contains the products for the page
//         setLoading(false); // Set loading to false after fetching data
//         console.log(products_res)
//       });
//     }
//   }, [searchQuery, currentPage]); // Re-fetch data when currentPage or subCategoryName changes





//   if (loading) {
//     return <Loading message={"Loading..." + subCategoryName} />;
//   }

//   if (error) {
//     return <ErrorPage message={error} />;
//   }

  

//   // Toggle Sidebar Visibility
//   const toggleSidebar = () => setShowSidebar(!showSidebar);

//   // Function to handle page changes
//   const handlePageChange = (page) => {
//     if (page >= 0 ) {
//       setCurrentPage(page); // Set current page when user clicks on pagination buttons
//     }
//   };

//   return (
//     <>
//       {/* <CategoriesBar /> */}
//       <div className="container-fluid">
//         {/* Top Bar */}
//         <div className="row align-items-center py-3">
//           <div className="col">
//             <button
//               className="btn btn-outline-primary"
//               onClick={toggleSidebar}
//             >
//               {showSidebar ? "Hide Filters" : "Show Filters"}
//             </button>
//           </div>
//           <div className="col-auto">
//             <select className="form-select">
//               <option value="price-asc">Sort By: Price Low to High</option>
//               <option value="price-desc">Sort By: Price High to Low</option>
//               <option value="popularity">Sort By: Popularity</option>
//             </select>
//           </div>
//         </div>

//         <div className="row">
//           {/* Sidebar */}
//           <div className={`col-12 col-md-2 sidebar-container ${showSidebar ? "show" : "hide"}`}>
//             <Sidebar />
//           </div>

//           {/* Product Grid */}
//           <div className="col">
//             <div className="product-grid">
//               {products.map((product) => (
//                 <ProductCard product={product}
//                 key={product.productId}
//                 />
                
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Pagination Controls */}
//         <div className="pagination-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
//           <button
//             className="btn btn-outline-secondary"
//             disabled={currentPage === 1}
//             onClick={() => handlePageChange(currentPage - 1)}
//             style={{ margin: '0 10px' }}
//           >
//             Previous
//           </button>
//           <span className="mx-3" style={{ fontSize: '16px' }}>
//             Page {currentPage}
//           </span>
//           <button
//             className="btn btn-outline-secondary"
//             disabled={products.length < pageSize}
//             onClick={() => handlePageChange(currentPage + 1)}
//             style={{ margin: '0 10px' }}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductListPage;

import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Products/SideBar";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import ProductCard from "../../components/Products/ProductCard";
import './ProductListPage.css';
import axios from "axios";
import CategoriesBar from "../../components/Header/CategoriesBar";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/Error";
import Skeleton from "react-loading-skeleton";

const ProductListPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { subCategoryName,searchBy } = useParams();
  const [searchParams] = useSearchParams();
  var searchQuery = searchParams.get("q");
  const [products, setProducts] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("price");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);
  const [apiEndpoint, setApiEndpoint] = useState('/product/bySubCategory');


  useEffect(() => {
    if (subCategoryName) {
      setLoading(true);
      axios.get(`/subcategory/name/${subCategoryName}`).then((res) => {
        setSubcategory(res.data);
      }).catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    }
  }, [subCategoryName,useLocation()]);

  useEffect(() => {
    if (subCategoryName) {
      if (subcategory.subcategoryId) {
        axios.get(`${apiEndpoint}/${subcategory.subcategoryId}?pageNumber=${currentPage - 1}&pageSize=${pageSize}&sortBy=${sortBy}&sort=${sortOrder}`)
          .then((products_res) => {
            setProducts(products_res.data);
            setLoading(false);
          });
      }
    }
  }, [subcategory, currentPage, sortBy, sortOrder, useLocation()]);

  useEffect(() => {
    if (searchBy) {
      setLoading(true)
      axios
        .get(`/product/searchByMultipleTags/${searchBy}?pageNumber=${currentPage - 1}&pageSize=${pageSize}&sortBy=${sortBy}&sort=${sortOrder}`)
        .then((products_res) => {
          setProducts(products_res.data);
          setLoading(false);
        });
    }
  }, [useLocation(),searchBy, searchQuery, currentPage, sortBy, sortOrder, searchParams]);

  // if (loading) {
  //   return <Loading message={"Loading..."} />;
  // }

  if (error) {
    return <ErrorPage message={error} />;
  }

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const handlePageChange = (page) => {
    if (page >= 0) {
      setCurrentPage(page);
    }
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    const [sortField, sortDirection] = value.split("-");
    setSortBy(sortField);
    setSortOrder(sortDirection);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center py-3">
          <div className="col">
            {/* <button
              className="btn btn-outline-primary"
              onClick={toggleSidebar}
            >
              {showSidebar ? "Hide Filters" : "Show Filters"}
            </button> */}
          </div>
          <div className="col-auto">
            <select className="form-select" value={`${sortBy}-${sortOrder}`} onChange={handleSortChange}>
              <option value="price-asc">Sort By: Price Low to High</option>
              <option value="price-desc">Sort By: Price High to Low</option>
              {/* <option value="popularity-desc">Sort By: Popularity</option> */}
            </select>
          </div>
        </div>
          
        <div className="row">
          {/* <div className={`col-12 col-md-2 sidebar-container ${showSidebar ? "show" : "hide"}`}>
            <Sidebar />
            </div> */}
          <div className="col">
            {
              loading
              ? <div className="product-grid">
                {Array(4)
                  .fill()
                  .map((_, idx) => (
                      <div key={idx} style={{ border: '1px solid #ddd', borderRadius: '12px',
                              padding: '20px', width: 'calc(25% - 10px)',
                              background: '#fff', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',}}>
                          <Skeleton height={180} style={{ borderRadius: '10px' }} />
                          <Skeleton width="80%" height={20} style={{ margin: '15px 0' }} />
                          <Skeleton width="60%" height={15} />
                          <Skeleton width="50%" height={20} style={{ margin: '15px 0' }} />
                          <Skeleton width="100%" height={40} style={{ marginTop: '10px' }} />
                      </div>
                  ))}
                  </div>
              :
            
            products.length == 0 ? <div className="d-flex justify-content-center align-items-center">
              <img src="https://cdn.dribbble.com/users/3512533/screenshots/14168376/media/1357b33cb4057ecb3c6f869fc977561d.jpg" className="notfound-image"/> 
            </div> :
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard
                  product={product}
                  key={product.productId}
                  />
                ))}
            </div>
            }
          </div>
        </div>

        <div className="pagination-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <button
            className="btn btn-outline-secondary"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span className="mx-3">
            Page {currentPage}
          </span>
          <button
            className="btn btn-outline-secondary"
            disabled={products.length < pageSize}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
