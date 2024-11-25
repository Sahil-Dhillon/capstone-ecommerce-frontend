import React, { useEffect, useState } from "react";
// import ImageGallery from "./ImageGallery";
// import ProductDetails from "./ProductDetails";

import "./ProductPage.css";
import ImageGallery from "../../components/Product/ImageGallery";
import ProductTopDetails from "../../components/Product/ProductTopDetails";
import ProductBelowDetails from "../../components/Product/ProductBelowDetails";
import ProductCarousel from "../../components/Home/ProductCarousel";
import Ratings from "../../components/Product/Rating";
import ReviewsList from "../../components/Product/ReviewList";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  // const {subCategoryName,productId}= useParams();

  //   // const { subCategoryName } = useParams(); // Extract subCategoryName from URL
  //   // console.log(subCategoryName)
  //   const [product, setProduct] = useState({});
  //   // const [subcategory, setSubcategory] = useState([])
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);
  //   // const [category, setCategory] = useState({});
  
  //   useEffect(() => {
  //     axios.get(`http://localhost:8085/product/${productId}`).then((res)=>{
  //       setProduct(res.data)
  //     }).then(setLoading(false))
      
    
  //   }, [subCategoryName]);

  //   if (loading) {
  //       return <h2>Loading {subCategoryName}...</h2>;
  //   }

  // Product data
  const product_test = {
    name: "Jordan Sport Hoop Fleece",
    description: "Men's Dri-FIT Full-Zip Hoodie",
    price: "₹ 5,695.00",
    inclusive: "Inclusive of all taxes (Also includes all applicable duties)",
    sizes: ["US XS", "US S", "US M", "US L", "US XL", "US XXL"],
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3b686bd6-0f0e-4208-831d-d25571d7ceb3/M+J+DF+SPRT+HOOP+FLC+FZ.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cbdc9fb8-b8ef-40c0-8a08-61904695ffbf/M+J+DF+SPRT+HOOP+FLC+FZ.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1793103e-7975-44f7-934d-b136ff18a1fb/M+J+DF+SPRT+HOOP+FLC+FZ.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a90621e3-20da-4678-8408-f2333d5cd162/M+J+DF+SPRT+HOOP+FLC+FZ.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4b69abac-30f3-4ddd-8192-52b75032af28/M+J+DF+SPRT+HOOP+FLC+FZ.png",
    ],
    unavailableSizes: ["US XXL"],
    rating:2.0
  };
  const product =
    {
        "vendorId": "203",
        "name": "Wireless Earbuds",
        "brand": "TechSound",
        "description": "High-quality wireless earbuds with noise cancellation and 12-hour battery life.",
        "category": {
            "categoryId": 2,
            "name": "GADGETS",
            "bannerImage": "localhost:/12321/imageurl_1"
        },
        "subCategory": {
            "subcategoryId": 2,
            "name": "EARPHONES",
            "category": {
                "categoryId": 2,
                "name": "GADGETS",
                "bannerImage": "localhost:/12321/imageurl_1"
            }
        },
        "listOfSpecs": [
            {
                "title": "Bluetooth",
                "body": "Bluetooth 5.2"
            }
        ],
        "price": 450,
        "quantity": 150,
        "profileImgUrl": "https://example.com/images/products/earbuds.jpg",
        "createdAt": null,
        "updatedAt": null,
        "available": false,
        "sizes":["US XS", "US S", "US M", "US L", "US XL", "US XXL"],
        "unavailableSizes": ["US XXL"],
        "rating":3,
  reviews: [
    {
      title: "Amazing product!",
      comment: "This hoodie is super comfortable and fits perfectly.",
      rating: 5,
      user: "John Doe",
    },
    {
      title: "Good quality but expensive",
      comment: "The quality is great, but I feel it's a bit overpriced.",
      rating: 4,
      user: "Jane Smith",
    },
    {
      title: "Not satisfied",
      comment: "The material feels rough and the size runs small.",
      rating: 2,
      user: "Sam Wilson",
    },
  ]


    }

  return (
    <div>
    <div className="product-top-component">
        <div className="image-container">
            <div className="image-gallery">

      <ImageGallery
        images={product_test.images}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        />
        </div>
      <img
        className="main-image"
        src={product_test.images[selectedImage]}
        alt="Selected Product"
        />
        </div>
      <ProductTopDetails product={product} />
    </div>
    <div className="product-below-details">
        <ProductBelowDetails product={product} />
    </div>
    <ProductCarousel title="YOU MIGHT ALSO LIKE" autoScroll={false}/>
    <div className="m-5">
        <Ratings product={product} />
        
      </div>
    </div>
  );
};

export default ProductPage;
