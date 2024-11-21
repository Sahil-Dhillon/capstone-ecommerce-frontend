import React, { useRef, useEffect } from "react";
import img1 from '../../../assets/img/features_products/one plus 11.jpg'
import img2 from '../../../assets/img/features_products/pic1.jpg'
import img3 from '../../../assets/img/features_products/pic3.jpg'
import img4 from '../../../assets/img/features_products/fashion.jpg'
import img5 from '../../../assets/img/features_products/washing_machine.jpg'
import img6 from '../../../assets/img/features_products/women fashion.jpg'
const products = [
  {
    id: 1,
    name: "1+ Quantum",
    image: img1 // Replace with actual image URL
  },
  {
    id: 2,
    name: "Nike Pegasus 41 PRM",
    image: img2, // Replace with actual image URL
  },
  {
    id: 3,
    name: "Tour Beats M2",
    image: img3, // Replace with actual image URL
  },
  {
    id: 4,
    name: "Creased Effect Gilet",
    image: img4, // Replace with actual image URL
  },
  {
    id: 5,
    name: "Mercurial Drum Speed",
    image: img5, // Replace with actual image URL
  },
  {
    id: 6,
    name: "Long Mid-Rise TRF",
    image: img6, // Replace with actual image URL
  },
  // Add more product objects as needed
];

const ProductCarousel = () => {
    const carouselRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY; // Get vertical scroll position
          if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollY*0.2; // Sync vertical scroll with horizontal carousel scroll
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>Featured Products</h2>
        <div ref={carouselRef} style={styles.carousel}>
          {products.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <div style={styles.imageContainer}>
                <img
                  src={product.image}
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
    );
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
      width: "100%",
      background: "linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)",
      color: "#fff",
      textAlign: "left",
      padding: "10px 5px",
    },
    productName: {
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    shopButton: {
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