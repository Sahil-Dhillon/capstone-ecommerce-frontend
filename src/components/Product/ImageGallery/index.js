import React from "react";
import "./ImageGallery.css";

const ImageGallery = ({ images, selectedImage, setSelectedImage }) => {
  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Thumbnail ${index}`}
          className={index === selectedImage ? "active-thumbnail" : ""}
          onClick={() => setSelectedImage(index)}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
