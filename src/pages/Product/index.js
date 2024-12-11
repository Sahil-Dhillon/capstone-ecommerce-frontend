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
  const {productId}= useParams();
    const [product, setProduct] = useState({});
    const [suggestedProducts, setSuggestedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
      axios.get(`/product/${productId}`).then((res)=>{

        setProduct({...res.data,listOfImages:[{imgUrl:res.data.profileImgUrl},...res.data.listOfImages]})
        if (res.data.subCategory.subcategoryId) {
          axios
            .get(`/product/bySubCategory/${res.data.subCategory.subcategoryId}?pageSize=6`)
            .then((suggestedProducts_res) => {
              setSuggestedProducts(suggestedProducts_res.data);
              // setLoading(false);
            });
        }
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        });
    }, []);


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
    <ProductCarousel title="YOU MIGHT ALSO LIKE" autoScroll={false} products={suggestedProducts} />
    <div className="m-5">
        <Ratings product={product} />
        
      </div>
    </div>
  );
};

export default ProductPage;
