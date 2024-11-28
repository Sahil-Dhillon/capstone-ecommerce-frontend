// import React, { useEffect, useState } from "react";
// import Sidebar from "../../components/Products/SideBar";
// import ProductCard from "../../components/Products/ProductCard";
// import './ProductListPage.css'
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import CategoriesBar from "../../components/Header/CategoriesBar";
// import Loading from "../../components/Loading";
// import ErrorPage from "../../components/Error";
// // import Sidebar from "./Sidebar";
// // import ProductCard from "./ProductCard";


// const ProductListPage = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
//     const { subCategoryName } = useParams(); // Extract subCategoryName from URL
//     console.log(subCategoryName)
//     const [products, setProducts] = useState([
//       {
//           "productId": 9,
//           "vendorId": "203",
//           "name": "Wireless Earbuds",
//           "brand": "TechSound",
//           "description": "High-quality wireless earbuds with noise cancellation and 12-hour battery life.",
//           "tags": null,
//           "variations": [
//               "Medium",
//               "Small",
//               "Large"
//           ],
//           "category": {
//               "categoryId": 2,
//               "name": "Electronics",
//               "bannerImage": "https://example.com/images/banners/electronics.jpg"
//           },
//           "subCategory": {
//               "subcategoryId": 20,
//               "name": "Audio Devices",
//               "category": {
//                   "categoryId": 2,
//                   "name": "Electronics",
//                   "bannerImage": "https://example.com/images/banners/electronics.jpg"
//               }
//           },
//           "listOfSpecs": [
//               {
//                   "title": "Bluetooth",
//                   "body": "Bluetooth 5.2"
//               }
//           ],
//           "listOfReviews": [],
//           "listOfImages": [],
//           "price": 450,
//           "quantity": 150,
//           "profileImgUrl": "https://example.com/images/products/earbuds.jpg",
//           "createdAt": null,
//           "updatedAt": null,
//           "available": true
//       },
//       {
//           "productId": 10,
//           "vendorId": "204",
//           "name": "Over-Ear Wireless Headphones",
//           "brand": "SoundMax",
//           "description": "Comfortable over-ear wireless headphones with noise cancellation and 20-hour battery life.",
//           "tags": null,
//           "variations": [
//               "Black",
//               "Blue",
//               "Red"
//           ],
//           "category": {
//               "categoryId": 1,
//               "name": "Clothing",
//               "bannerImage": "https://static.vecteezy.com/system/resources/previews/008/174/590/non_2x/fashion-advertising-web-banner-illustration-vector.jpg"
//           },
//           "subCategory": {
//               "subcategoryId": 2,
//               "name": "Women",
//               "category": {
//                   "categoryId": 1,
//                   "name": "Clothing",
//                   "bannerImage": "https://static.vecteezy.com/system/resources/previews/008/174/590/non_2x/fashion-advertising-web-banner-illustration-vector.jpg"
//               }
//           },
//           "listOfSpecs": [
//               {
//                   "title": "Noise Cancellation",
//                   "body": "Active Noise Cancellation up to 50dB"
//               }
//           ],
//           "listOfReviews": [],
//           "listOfImages": [],
//           "price": 550,
//           "quantity": 120,
//           "profileImgUrl": "https://example.com/images/products/headphones.jpg",
//           "createdAt": null,
//           "updatedAt": null,
//           "available": true
//       },
//       {
//           "productId": 11,
//           "vendorId": "207",
//           "name": "Sports Wireless Earbuds",
//           "brand": "FitAudio",
//           "description": "Lightweight and comfortable sports wireless earbuds with water resistance and 8-hour battery life.",
//           "tags": null,
//           "variations": [
//               "Black",
//               "Green",
//               "Blue"
//           ],
//           "category": {
//               "categoryId": 2,
//               "name": "Electronics",
//               "bannerImage": "https://example.com/images/banners/electronics.jpg"
//           },
//           "subCategory": {
//               "subcategoryId": 20,
//               "name": "Audio Devices",
//               "category": {
//                   "categoryId": 2,
//                   "name": "Electronics",
//                   "bannerImage": "https://example.com/images/banners/electronics.jpg"
//               }
//           },
//           "listOfSpecs": [
//               {
//                   "title": "Battery life",
//                   "body": "12-hour battery life"
//               }
//           ],
//           "listOfReviews": [],
//           "listOfImages": [],
//           "price": 120,
//           "quantity": 300,
//           "profileImgUrl": "https://example.com/images/products/sports-earbuds.jpg",
//           "createdAt": null,
//           "updatedAt": null,
//           "available": true
//       },
//       {
//           "productId": 12,
//           "vendorId": "209",
//           "name": "True Wireless Earbuds with Charging Case",
//           "brand": "SoundCore",
//           "description": "Compact true wireless earbuds with crystal-clear sound and charging case providing 40 hours of playback time.",
//           "tags": null,
//           "variations": [
//               "Black",
//               "White"
//           ],
//           "category": {
//               "categoryId": 2,
//               "name": "Electronics",
//               "bannerImage": "https://example.com/images/banners/electronics.jpg"
//           },
//           "subCategory": {
//               "subcategoryId": 20,
//               "name": "Audio Devices",
//               "category": {
//                   "categoryId": 2,
//                   "name": "Electronics",
//                   "bannerImage": "https://example.com/images/banners/electronics.jpg"
//               }
//           },
//           "listOfSpecs": [
//               {
//                   "title": "IPX-rating",
//                   "body": "Water-resistant (IPX4)"
//               }
//           ],
//           "listOfReviews": [],
//           "listOfImages": [],
//           "price": 250,
//           "quantity": 180,
//           "profileImgUrl": "https://example.com/images/products/tws-charging-case.jpg",
//           "createdAt": null,
//           "updatedAt": null,
//           "available": true
//       },
//       {
//           "productId": 13,
//           "vendorId": "210",
//           "name": "Gaming Wireless Headset",
//           "brand": "ProSound",
//           "description": "Wireless gaming headset with surround sound and a 25-hour battery life for an immersive gaming experience.",
//           "tags": null,
//           "variations": [
//               "Black",
//               "Red"
//           ],
//           "category": {
//               "categoryId": 2,
//               "name": "Electronics",
//               "bannerImage": "https://example.com/images/banners/electronics.jpg"
//           },
//           "subCategory": {
//               "subcategoryId": 20,
//               "name": "Audio Devices",
//               "category": {
//                   "categoryId": 2,
//                   "name": "Electronics",
//                   "bannerImage": "https://example.com/images/banners/electronics.jpg"
//               }
//           },
//           "listOfSpecs": [
//               {
//                   "title": "Bluetooth",
//                   "body": "Bluetooth 5.2"
//               }
//           ],
//           "listOfReviews": [],
//           "listOfImages": [],
//           "price": 350,
//           "quantity": 100,
//           "profileImgUrl": "https://example.com/images/products/gaming-headset.jpg",
//           "createdAt": null,
//           "updatedAt": null,
//           "available": true
//       },
//       {
//           "productId": 14,
//           "vendorId": "211",
//           "name": "Premium Wireless Earbuds",
//           "brand": "ClearSound",
//           "description": "High-end wireless earbuds with noise cancellation, premium sound quality, and 14 hours of battery life.",
//           "tags": null,
//           "variations": [
//               "White",
//               "Gold"
//           ],
//           "category": {
//               "categoryId": 2,
//               "name": "Electronics",
//               "bannerImage": "https://example.com/images/banners/electronics.jpg"
//           },
//           "subCategory": {
//               "subcategoryId": 20,
//               "name": "Audio Devices",
//               "category": {
//                   "categoryId": 2,
//                   "name": "Electronics",
//                   "bannerImage": "https://example.com/images/banners/electronics.jpg"
//               }
//           },
//           "listOfSpecs": [
//               {
//                   "title": "Noise Cancellation",
//                   "body": "Active Noise Cancellation up to 50dB"
//               }
//           ],
//           "listOfReviews": [],
//           "listOfImages": [],
//           "price": 600,
//           "quantity": 75,
//           "profileImgUrl": "https://example.com/images/products/premium-earbuds.jpg",
//           "createdAt": null,
//           "updatedAt": null,
//           "available": true
//       },
//       {
//           "productId": 15,
//           "vendorId": "212",
//           "name": "Budget Wireless Earbuds",
//           "brand": "EcoSound",
//           "description": "Affordable wireless earbuds with good sound quality and 6-hour battery life, ideal for daily use.",
//           "tags": null,
//           "variations": [
//               "Black",
//               "Grey"
//           ],
//           "category": {
//               "categoryId": 2,
//               "name": "Electronics",
//               "bannerImage": "https://example.com/images/banners/electronics.jpg"
//           },
//           "subCategory": {
//               "subcategoryId": 20,
//               "name": "Audio Devices",
//               "category": {
//                   "categoryId": 2,
//                   "name": "Electronics",
//                   "bannerImage": "https://example.com/images/banners/electronics.jpg"
//               }
//           },
//           "listOfSpecs": [
//               {
//                   "title": "Battery life",
//                   "body": "12-hour battery life"
//               }
//           ],
//           "listOfReviews": [],
//           "listOfImages": [],
//           "price": 100,
//           "quantity": 500,
//           "profileImgUrl": "https://example.com/images/products/budget-earbuds.jpg",
//           "createdAt": null,
//           "updatedAt": null,
//           "available": true
//       },
//       {
//           "productId": 16,
//           "vendorId": "213",
//           "name": "Sweat-Proof Wireless Earbuds",
//           "brand": "FitSound",
//           "description": "Lightweight and sweat-proof wireless earbuds designed for workouts, offering 8 hours of battery life and secure fit.",
//           "tags": null,
//           "variations": [
//               "Black",
//               "Blue"
//           ],
//           "category": {
//               "categoryId": 2,
//               "name": "Electronics",
//               "bannerImage": "https://example.com/images/banners/electronics.jpg"
//           },
//           "subCategory": {
//               "subcategoryId": 20,
//               "name": "Audio Devices",
//               "category": {
//                   "categoryId": 2,
//                   "name": "Electronics",
//                   "bannerImage": "https://example.com/images/banners/electronics.jpg"
//               }
//           },
//           "listOfSpecs": [
//               {
//                   "title": "IPX-rating",
//                   "body": "Water-resistant (IPX4)"
//               }
//           ],
//           "listOfReviews": [],
//           "listOfImages": [],
//           "price": 120,
//           "quantity": 250,
//           "profileImgUrl": "https://example.com/images/products/sweat-proof-earbuds.jpg",
//           "createdAt": null,
//           "updatedAt": null,
//           "available": true
//       }
//   ]);
//     const [subcategory, setSubcategory] = useState([])
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [category, setCategory] = useState({});
  
//     // useEffect(() => {
//     //   axios.get(`http://localhost:8085/subcategory/name/${subCategoryName}`).then((res)=>{
//     //     setSubcategory(res.data)
//     //     axios.get(`http://localhost:8085/product/findBySubCategory/${res.data.subcategoryId}?pageSize=3`).then((products_res)=>{
//     //       setProducts(products_res.data)
//     //       setLoading(false)
//     //     })
//     //   })
//     //   .catch((err) => {
//     //     setError(err.message); // Set error message
//     //     setLoading(false); // Set loading to false
//     //     });
    
//     // }, [subCategoryName]);

//     if (loading) {
//       return (
//         <Loading message={"Loading "+ subCategoryName}/>
//       );
//     }
//     // if (error){
//     //   return(
//     //     <ErrorPage message={error}/>);
//     // }

//   // Toggle Sidebar Visibility
//   const toggleSidebar = () => setShowSidebar(!showSidebar);

//   return (
//     <>
//     <CategoriesBar/>
//     <div className="container-fluid">
//       {/* Top Bar */}
//       <div className="row align-items-center py-3">
//         <div className="col">
//           <button
//             className="btn btn-outline-primary"
//             onClick={toggleSidebar}
//             >
//             {showSidebar ? "Hide Filters" : "Show Filters"}
//           </button>
//         </div>
//         <div className="col-auto">
//           <select className="form-select">
//             <option value="price-asc">Sort By: Price Low to High</option>
//             <option value="price-desc">Sort By: Price High to Low</option>
//             <option value="popularity">Sort By: Popularity</option>
//           </select>
//         </div>
//       </div>

//       <div className="row">
//         {/* Sidebar */}
//         <div
//           className={`col-12 col-md-2 sidebar-container ${showSidebar ? "show" : "hide"}`}
//           >
//           <Sidebar />
//         </div>

//         {/* Product Grid */}
//         <div className="col">
//           <div className="product-grid">
//             {products.map((product) => (
//               //   <div className="col-6 col-sm-4 col-lg-3 mb-4" key={product.id}>
//               <ProductCard product={product} />
//               //   </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//               </>
//   );
// };

// export default ProductListPage;


////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import Sidebar from "../../components/Products/SideBar";
// import ProductCard from "../../components/Products/ProductCard";
// import './ProductListPage.css';
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import CategoriesBar from "../../components/Header/CategoriesBar";
// import Loading from "../../components/Loading";
// import ErrorPage from "../../components/Error";

// const ProductListPage = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const { subCategoryName } = useParams(); // Extract subCategoryName from URL
//   const [products, setProducts] = useState([
//     {
//         "productId": 9,
//         "vendorId": "203",
//         "name": "Wireless Earbuds",
//         "brand": "TechSound",
//         "description": "High-quality wireless earbuds with noise cancellation and 12-hour battery life.",
//         "tags": null,
//         "variations": [
//             "Medium",
//             "Small",
//             "Large"
//         ],
//         "category": {
//             "categoryId": 2,
//             "name": "Electronics",
//             "bannerImage": "https://example.com/images/banners/electronics.jpg"
//         },
//         "subCategory": {
//             "subcategoryId": 20,
//             "name": "Audio Devices",
//             "category": {
//                 "categoryId": 2,
//                 "name": "Electronics",
//                 "bannerImage": "https://example.com/images/banners/electronics.jpg"
//             }
//         },
//         "listOfSpecs": [
//             {
//                 "title": "Bluetooth",
//                 "body": "Bluetooth 5.2"
//             }
//         ],
//         "listOfReviews": [],
//         "listOfImages": [],
//         "price": 450,
//         "quantity": 150,
//         "profileImgUrl": "https://example.com/images/products/earbuds.jpg",
//         "createdAt": null,
//         "updatedAt": null,
//         "available": true
//     },
//     {
//         "productId": 10,
//         "vendorId": "204",
//         "name": "Over-Ear Wireless Headphones",
//         "brand": "SoundMax",
//         "description": "Comfortable over-ear wireless headphones with noise cancellation and 20-hour battery life.",
//         "tags": null,
//         "variations": [
//             "Black",
//             "Blue",
//             "Red"
//         ],
//         "category": {
//             "categoryId": 1,
//             "name": "Clothing",
//             "bannerImage": "https://static.vecteezy.com/system/resources/previews/008/174/590/non_2x/fashion-advertising-web-banner-illustration-vector.jpg"
//         },
//         "subCategory": {
//             "subcategoryId": 2,
//             "name": "Women",
//             "category": {
//                 "categoryId": 1,
//                 "name": "Clothing",
//                 "bannerImage": "https://static.vecteezy.com/system/resources/previews/008/174/590/non_2x/fashion-advertising-web-banner-illustration-vector.jpg"
//             }
//         },
//         "listOfSpecs": [
//             {
//                 "title": "Noise Cancellation",
//                 "body": "Active Noise Cancellation up to 50dB"
//             }
//         ],
//         "listOfReviews": [],
//         "listOfImages": [],
//         "price": 550,
//         "quantity": 120,
//         "profileImgUrl": "https://example.com/images/products/headphones.jpg",
//         "createdAt": null,
//         "updatedAt": null,
//         "available": true
//     },
//     {
//         "productId": 11,
//         "vendorId": "207",
//         "name": "Sports Wireless Earbuds",
//         "brand": "FitAudio",
//         "description": "Lightweight and comfortable sports wireless earbuds with water resistance and 8-hour battery life.",
//         "tags": null,
//         "variations": [
//             "Black",
//             "Green",
//             "Blue"
//         ],
//         "category": {
//             "categoryId": 2,
//             "name": "Electronics",
//             "bannerImage": "https://example.com/images/banners/electronics.jpg"
//         },
//         "subCategory": {
//             "subcategoryId": 20,
//             "name": "Audio Devices",
//             "category": {
//                 "categoryId": 2,
//                 "name": "Electronics",
//                 "bannerImage": "https://example.com/images/banners/electronics.jpg"
//             }
//         },
//         "listOfSpecs": [
//             {
//                 "title": "Battery life",
//                 "body": "12-hour battery life"
//             }
//         ],
//         "listOfReviews": [],
//         "listOfImages": [],
//         "price": 120,
//         "quantity": 300,
//         "profileImgUrl": "https://example.com/images/products/sports-earbuds.jpg",
//         "createdAt": null,
//         "updatedAt": null,
//         "available": true
//     },
//     {
//         "productId": 12,
//         "vendorId": "209",
//         "name": "True Wireless Earbuds with Charging Case",
//         "brand": "SoundCore",
//         "description": "Compact true wireless earbuds with crystal-clear sound and charging case providing 40 hours of playback time.",
//         "tags": null,
//         "variations": [
//             "Black",
//             "White"
//         ],
//         "category": {
//             "categoryId": 2,
//             "name": "Electronics",
//             "bannerImage": "https://example.com/images/banners/electronics.jpg"
//         },
//         "subCategory": {
//             "subcategoryId": 20,
//             "name": "Audio Devices",
//             "category": {
//                 "categoryId": 2,
//                 "name": "Electronics",
//                 "bannerImage": "https://example.com/images/banners/electronics.jpg"
//             }
//         },
//         "listOfSpecs": [
//             {
//                 "title": "IPX-rating",
//                 "body": "Water-resistant (IPX4)"
//             }
//         ],
//         "listOfReviews": [],
//         "listOfImages": [],
//         "price": 250,
//         "quantity": 180,
//         "profileImgUrl": "https://example.com/images/products/tws-charging-case.jpg",
//         "createdAt": null,
//         "updatedAt": null,
//         "available": true
//     },
//     {
//         "productId": 13,
//         "vendorId": "210",
//         "name": "Gaming Wireless Headset",
//         "brand": "ProSound",
//         "description": "Wireless gaming headset with surround sound and a 25-hour battery life for an immersive gaming experience.",
//         "tags": null,
//         "variations": [
//             "Black",
//             "Red"
//         ],
//         "category": {
//             "categoryId": 2,
//             "name": "Electronics",
//             "bannerImage": "https://example.com/images/banners/electronics.jpg"
//         },
//         "subCategory": {
//             "subcategoryId": 20,
//             "name": "Audio Devices",
//             "category": {
//                 "categoryId": 2,
//                 "name": "Electronics",
//                 "bannerImage": "https://example.com/images/banners/electronics.jpg"
//             }
//         },
//         "listOfSpecs": [
//             {
//                 "title": "Bluetooth",
//                 "body": "Bluetooth 5.2"
//             }
//         ],
//         "listOfReviews": [],
//         "listOfImages": [],
//         "price": 350,
//         "quantity": 100,
//         "profileImgUrl": "https://example.com/images/products/gaming-headset.jpg",
//         "createdAt": null,
//         "updatedAt": null,
//         "available": true
//     },
//     {
//         "productId": 14,
//         "vendorId": "211",
//         "name": "Premium Wireless Earbuds",
//         "brand": "ClearSound",
//         "description": "High-end wireless earbuds with noise cancellation, premium sound quality, and 14 hours of battery life.",
//         "tags": null,
//         "variations": [
//             "White",
//             "Gold"
//         ],
//         "category": {
//             "categoryId": 2,
//             "name": "Electronics",
//             "bannerImage": "https://example.com/images/banners/electronics.jpg"
//         },
//         "subCategory": {
//             "subcategoryId": 20,
//             "name": "Audio Devices",
//             "category": {
//                 "categoryId": 2,
//                 "name": "Electronics",
//                 "bannerImage": "https://example.com/images/banners/electronics.jpg"
//             }
//         },
//         "listOfSpecs": [
//             {
//                 "title": "Noise Cancellation",
//                 "body": "Active Noise Cancellation up to 50dB"
//             }
//         ],
//         "listOfReviews": [],
//         "listOfImages": [],
//         "price": 600,
//         "quantity": 75,
//         "profileImgUrl": "https://example.com/images/products/premium-earbuds.jpg",
//         "createdAt": null,
//         "updatedAt": null,
//         "available": true
//     },
//     {
//         "productId": 15,
//         "vendorId": "212",
//         "name": "Budget Wireless Earbuds",
//         "brand": "EcoSound",
//         "description": "Affordable wireless earbuds with good sound quality and 6-hour battery life, ideal for daily use.",
//         "tags": null,
//         "variations": [
//             "Black",
//             "Grey"
//         ],
//         "category": {
//             "categoryId": 2,
//             "name": "Electronics",
//             "bannerImage": "https://example.com/images/banners/electronics.jpg"
//         },
//         "subCategory": {
//             "subcategoryId": 20,
//             "name": "Audio Devices",
//             "category": {
//                 "categoryId": 2,
//                 "name": "Electronics",
//                 "bannerImage": "https://example.com/images/banners/electronics.jpg"
//             }
//         },
//         "listOfSpecs": [
//             {
//                 "title": "Battery life",
//                 "body": "12-hour battery life"
//             }
//         ],
//         "listOfReviews": [],
//         "listOfImages": [],
//         "price": 100,
//         "quantity": 500,
//         "profileImgUrl": "https://example.com/images/products/budget-earbuds.jpg",
//         "createdAt": null,
//         "updatedAt": null,
//         "available": true
//     },
//     {
//         "productId": 16,
//         "vendorId": "213",
//         "name": "Sweat-Proof Wireless Earbuds",
//         "brand": "FitSound",
//         "description": "Lightweight and sweat-proof wireless earbuds designed for workouts, offering 8 hours of battery life and secure fit.",
//         "tags": null,
//         "variations": [
//             "Black",
//             "Blue"
//         ],
//         "category": {
//             "categoryId": 2,
//             "name": "Electronics",
//             "bannerImage": "https://example.com/images/banners/electronics.jpg"
//         },
//         "subCategory": {
//             "subcategoryId": 20,
//             "name": "Audio Devices",
//             "category": {
//                 "categoryId": 2,
//                 "name": "Electronics",
//                 "bannerImage": "https://example.com/images/banners/electronics.jpg"
//             }
//         },
//         "listOfSpecs": [
//             {
//                 "title": "IPX-rating",
//                 "body": "Water-resistant (IPX4)"
//             }
//         ],
//         "listOfReviews": [],
//         "listOfImages": [],
//         "price": 120,
//         "quantity": 250,
//         "profileImgUrl": "https://example.com/images/products/sweat-proof-earbuds.jpg",
//         "createdAt": null,
//         "updatedAt": null,
//         "available": true
//     }
// ]);
//   const [subcategory, setSubcategory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [category, setCategory] = useState({});
  
//   // Pagination States
//   const [currentPage, setCurrentPage] = useState(1); // Track current page
//   const [totalPages, setTotalPages] = useState(1); // Total number of pages
//   const [pageSize] = useState(2); // Define how many products per page

//   useEffect(() => {
//     setLoading(true); // Set loading to true before making API call
//     axios.get(`http://localhost:8085/subcategory/name/${subCategoryName}`).then((res) => {
//       setSubcategory(res.data);
//       axios.get(`http://localhost:8085/product/findBySubCategory/${res.data.subcategoryId}?page=${currentPage}&pageSize=${pageSize}`).then((products_res) => {
//         setProducts(products_res.data.content); // Assuming `content` contains the products for the page
//         setTotalPages(products_res.data.totalPages); // Set the total pages from response
//         setLoading(false); // Set loading to false after fetching data
//       });
//     }).catch((err) => {
//       setError(err.message); // Set error message if there is an error
//       setLoading(false); // Set loading to false in case of error
//     });
//   }, [subCategoryName, currentPage]); // Re-fetch data when currentPage or subCategoryName changes

//   if (loading) {
//     return <Loading message={"Loading " + subCategoryName} />;
//   }

//   // if (error) {
//   //   return <ErrorPage message={error} />;
//   // }

//   // Toggle Sidebar Visibility
//   const toggleSidebar = () => setShowSidebar(!showSidebar);

//   // Function to handle page changes
//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page); // Set current page when user clicks on pagination buttons
//     }
//   };

//   return (
//     <>
//       <CategoriesBar />
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
//                 <ProductCard product={product} key={product.productId} />
//               ))}
//             </div>

            
//           </div>
//           {/* Pagination Controls */}
//           <div className="pagination">
//               <button
//                 className="btn btn-outline-secondary"
//                 disabled={currentPage === 1}
//                 onClick={() => handlePageChange(currentPage - 1)}
//               >
//                 Previous
//               </button>
//               <span className="mx-3">Page {currentPage} of {totalPages}</span>
//               <button
//                 className="btn btn-outline-secondary"
//                 disabled={currentPage === totalPages}
//                 onClick={() => handlePageChange(currentPage + 1)}
//               >
//                 Next
//               </button>
//             </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductListPage;







import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Products/SideBar";
import ProductCard from "../../components/Products/ProductCard";
import './ProductListPage.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import CategoriesBar from "../../components/Header/CategoriesBar";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/Error";

const ProductListPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { subCategoryName } = useParams(); // Extract subCategoryName from URL
  const [products, setProducts] = useState([
    {
        "productId": 9,
        "vendorId": "203",
        "name": "Wireless Earbuds",
        "brand": "TechSound",
        "description": "High-quality wireless earbuds with noise cancellation and 12-hour battery life.",
        "tags": null,
        "variations": [
            "Medium",
            "Small",
            "Large"
        ],
        "category": {
            "categoryId": 2,
            "name": "Electronics",
            "bannerImage": "https://example.com/images/banners/electronics.jpg"
        },
        "subCategory": {
            "subcategoryId": 20,
            "name": "Audio Devices",
            "category": {
                "categoryId": 2,
                "name": "Electronics",
                "bannerImage": "https://example.com/images/banners/electronics.jpg"
            }
        },
        "listOfSpecs": [
            {
                "title": "Bluetooth",
                "body": "Bluetooth 5.2"
            }
        ],
        "listOfReviews": [],
        "listOfImages": [],
        "price": 450,
        "quantity": 150,
        "profileImgUrl": "https://example.com/images/products/earbuds.jpg",
        "createdAt": null,
        "updatedAt": null,
        "available": true
    },
    {
        "productId": 10,
        "vendorId": "204",
        "name": "Over-Ear Wireless Headphones",
        "brand": "SoundMax",
        "description": "Comfortable over-ear wireless headphones with noise cancellation and 20-hour battery life.",
        "tags": null,
        "variations": [
            "Black",
            "Blue",
            "Red"
        ],
        "category": {
            "categoryId": 1,
            "name": "Clothing",
            "bannerImage": "https://static.vecteezy.com/system/resources/previews/008/174/590/non_2x/fashion-advertising-web-banner-illustration-vector.jpg"
        },
        "subCategory": {
            "subcategoryId": 2,
            "name": "Women",
            "category": {
                "categoryId": 1,
                "name": "Clothing",
                "bannerImage": "https://static.vecteezy.com/system/resources/previews/008/174/590/non_2x/fashion-advertising-web-banner-illustration-vector.jpg"
            }
        },
        "listOfSpecs": [
            {
                "title": "Noise Cancellation",
                "body": "Active Noise Cancellation up to 50dB"
            }
        ],
        "listOfReviews": [],
        "listOfImages": [],
        "price": 550,
        "quantity": 120,
        "profileImgUrl": "https://example.com/images/products/headphones.jpg",
        "createdAt": null,
        "updatedAt": null,
        "available": true
    },
    {
        "productId": 11,
        "vendorId": "207",
        "name": "Sports Wireless Earbuds",
        "brand": "FitAudio",
        "description": "Lightweight and comfortable sports wireless earbuds with water resistance and 8-hour battery life.",
        "tags": null,
        "variations": [
            "Black",
            "Green",
            "Blue"
        ],
        "category": {
            "categoryId": 2,
            "name": "Electronics",
            "bannerImage": "https://example.com/images/banners/electronics.jpg"
        },
        "subCategory": {
            "subcategoryId": 20,
            "name": "Audio Devices",
            "category": {
                "categoryId": 2,
                "name": "Electronics",
                "bannerImage": "https://example.com/images/banners/electronics.jpg"
            }
        },
        "listOfSpecs": [
            {
                "title": "Battery life",
                "body": "12-hour battery life"
            }
        ],
        "listOfReviews": [],
        "listOfImages": [],
        "price": 120,
        "quantity": 300,
        "profileImgUrl": "https://example.com/images/products/sports-earbuds.jpg",
        "createdAt": null,
        "updatedAt": null,
        "available": true
    }
  ]);
  const [subcategory, setSubcategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState({});
  
  // Pagination States
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [totalPages, setTotalPages] = useState(3); // Total number of pages
  const [pageSize] = useState(2); // Define how many products per page

  useEffect(() => {
    setLoading(true); // Set loading to true before making API call
    axios.get(`http://localhost:8085/subcategory/name/${subCategoryName}`).then((res) => {
      setSubcategory(res.data);
      axios.get(`http://localhost:8085/product/findBySubCategory/${res.data.subcategoryId}?page=${currentPage}&pageSize=${pageSize}`).then((products_res) => {
        setProducts(products_res.data.content); // Assuming `content` contains the products for the page
        setTotalPages(products_res.data.totalPages); // Set the total pages from response
        setLoading(false); // Set loading to false after fetching data
      });
    }).catch((err) => {
      setError(err.message); // Set error message if there is an error
      setLoading(false); // Set loading to false in case of error
    });
  }, [subCategoryName, currentPage]); // Re-fetch data when currentPage or subCategoryName changes

  if (loading) {
    return <Loading message={"Loading " + subCategoryName} />;
  }

  // if (error) {
  //   return <ErrorPage message={error} />;
  // }

  // Toggle Sidebar Visibility
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  // Function to handle page changes
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page); // Set current page when user clicks on pagination buttons
    }
  };

  return (
    <>
      <CategoriesBar />
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
                <ProductCard product={product} key={product.productId} />
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
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-outline-secondary"
            disabled={currentPage === totalPages}
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
