import React from "react";

const TextBanner = () => {
  return (
    <div style={styles.banner}>
      <div style={styles.textContainer}>
        <h4  style={styles.title}>Urbanwares</h4>
        <h1 style={styles.heading}>From Essentials to Exclusives</h1>
        <p style={styles.details}>
        Discover a world where everyday necessities meet unique discoveries. From the essentials to the standout pieces you love, we provide variety and value at your fingertips. Your ultimate place for seamless shopping, reinvented.
        </p>
      </div>
    </div>
  );
};

const styles = {
  banner: {
    width: "100%",
    height: "220px",  // Adjust the height as needed
    backgroundColor: "#fff", // Banner background color
    color: "#000",  // Text color
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "10px",
    marginBottom: "40px",  // Optional, if you want some space after the banner
  },
  textContainer: {
    maxWidth: "700px", // Set the max width to control the text width
  },
  title: {
    fontSize:"1.2rem",
    marginBottom:"20px"
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    font:"'Nike Futura ND', 'Helvetica Now Text Medium'",
    margin: "0 0 15px 0",  // Adding space between heading and text
  },
  details: {
    fontSize: "0.8rem",
    fontWeight: "normal",
    margin: "0",
  },
};

export default TextBanner;
