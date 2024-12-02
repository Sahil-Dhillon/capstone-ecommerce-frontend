import React from "react";

const WishlistItem = ({ item, onRemove }) => {
  return (
    <div style={styles.card}>
      <img src={item.image} alt={item.name} style={styles.image} />
      <h3>{item.name}</h3>
      <p style={styles.description}>{item.description}</p>
      <p style={styles.price}>{item.price}</p>
      <p style={styles.brand}>Brand: {item.brand}</p>
      <button onClick={() => onRemove(item.id)} style={styles.removeButton}>
        Remove
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  description: {
    fontSize: "14px",
    color: "#555",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
  brand: {
    fontSize: "14px",
    color: "#777",
  },
  removeButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
  },
};

export default WishlistItem;
