import React, { useRef, useEffect, useState } from "react";
import img1 from '../../../assets/img/features_products/one plus 11.jpg'
import img2 from '../../../assets/img/features_products/pic1.jpg'
import img3 from '../../../assets/img/features_products/pic3.jpg'
import img4 from '../../../assets/img/features_products/fashion.jpg'
import img5 from '../../../assets/img/features_products/washing_machine.jpg'
import img6 from '../../../assets/img/features_products/women fashion.jpg'
import axios from "axios";


const ProductCarousel = ({title, autoScroll, products}) => {
  const [featuredProducts, setFeaturedProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
      if(!products){
        axios
        .get(`product/search/featured?pageSize=10`)
        .then((products_res) => {
          setFeaturedProducts(products_res.data);
          setLoading(false);
          console.log(products_res.data)
        });
      }
      else{
        setLoading(false)
      }
    },[products])
    const carouselRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY; // Get vertical scroll position
          if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollY*0.25; // Sync vertical scroll with horizontal carousel scroll
          }
        };
        if(autoScroll){
          window.addEventListener("scroll", handleScroll);
        }
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    if(loading){
      return <></>
    }else{
      products = featuredProducts
      if(featuredProducts.length == 0){
        return <></>
      }
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>{title}</h2>
        <div ref={carouselRef} style={styles.carousel}>
          {products.map((product) => (
            <div key={product.productId} style={styles.productCard}>
              <div style={styles.imageContainer}>
                <img
                  src={product.profileImgUrl}
                  alt={product.name}
                  style={styles.image}
                />
                <div style={styles.overlay}>
                  <p style={styles.productName}>{product.name}</p>
                  <button style={styles.shopButton}>Shop Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  };
  
  const styles = {
    container: {
      padding: "0px 20px",
      marginBottom:"5rem"
    },
    heading: {
      fontSize: "24px",
      fontWeight: "",
      marginBottom: "20px",
    },
    carousel: {
      display: "flex",
      overflowX: "auto",
      gap: "5px",
      paddingBottom: "10px",
    },
    productCard: {
      flex: "0 0 auto",
      width: "300px",
    //   borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      overflow: "hidden",
      position: "relative",
    },
    imageContainer: {
      position: "relative",
    },
    image: {
      width: "100%",
      height: "300px",
      objectFit: "cover",
    },
    overlay: {
      position: "absolute",
      bottom: "0",
      left: "0",
      height:"300px",
      width: "100%",
      background: "linear-gradient(to top, rgba(0, 0, 0,1), transparent)",
      color: "#fff",
      textAlign: "left",
      display: "flex",
  flexDirection: "column",
      justifyContent:"flex-end",
      alignItems:"flex-start",
      padding: "10px 5px",
    },
    productName: {
      // marginTop: "auto",
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    shopButton: {
      // marginTop: "auto",
      backgroundColor: "#fff",
      color: "#000",
      fontSize:"12px",
      border: "none",
      padding: "2px 10px",
      borderRadius: "15px",
      cursor: "pointer",
    },
  };
  
  export default ProductCarousel;