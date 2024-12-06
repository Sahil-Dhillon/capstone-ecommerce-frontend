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
import Loading from "../../components/Loading";
import ErrorPage from "../../components/Error";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const {subCategoryName,productId}= useParams();
    // const { subCategoryName } = useParams(); // Extract subCategoryName from URL
    // console.log(subCategoryName)
    const [product, setProduct] = useState({});
    // const [subcategory, setSubcategory] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [category, setCategory] = useState({});
  
    useEffect(() => {
      axios.get(`/product/${productId}`).then((res)=>{

        setProduct({...res.data,listOfImages:[{imgUrl:res.data.profileImgUrl},...res.data.listOfImages]})
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message); // Set error message
        setLoading(false); // Set loading to false
        });
    
    }, [subCategoryName]);


    if (loading && product != {}) {
      return (
        <Loading message={"Loading "}/>
      );
    }
    if (error){
      return(
        <ErrorPage message={error}/>);
    }

  return (
    <div>
    <div className="product-top-component">
        <div className="image-container">
            <div className="image-gallery">

      <ImageGallery
        images={product.listOfImages}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        />
        </div>
      <img
        className="main-image"
        src={ product.listOfImages[selectedImage].imgUrl}
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
