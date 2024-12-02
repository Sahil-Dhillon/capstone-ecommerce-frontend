import React, { useState } from "react";
import WishlistItem from "../../components/Wishlist/WishlistItems";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Smartphone",
      description: "Latest 5G smartphone with AMOLED display.",
      price: "$799",
      brand: "BrandX",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      id: 2,
      name: "Laptop",
      description: "High-performance laptop for gaming and work.",
      price: "$1299",
      brand: "BrandY",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
        id: 2,
        name: "Laptop",
        description: "High-performance laptop for gaming and work.",
        price: "$1299",
        brand: "BrandY",
        image: "https://via.placeholder.com/150", // Replace with actual image URLs
      },
      {
        id: 2,
        name: "Laptop",
        description: "High-performance laptop for gaming and work.",
        price: "$1299",
        brand: "BrandY",
        image: "https://via.placeholder.com/150", // Replace with actual image URLs
      },
      {
        id: 2,
        name: "Laptop",
        description: "High-performance laptop for gaming and work.",
        price: "$1299",
        brand: "BrandY",
        image: "https://via.placeholder.com/150", // Replace with actual image URLs
      },
    {
      id: 3,
      name: "Headphones",
      description: "Noise-cancelling over-ear headphones.",
      price: "$199",
      brand: "BrandZ",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    brand: "",
    image: "",
  });

  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>My Wishlist</h1>
      <div style={styles.cardContainer}>
        {wishlist.map((item) => (
          <WishlistItem key={item.id} item={item} onRemove={removeItem} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  inputContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: "20px",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "calc(33% - 20px)",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  addButton: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    width: "100%",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
};

export default Wishlist;
