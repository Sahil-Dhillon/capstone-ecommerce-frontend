import React from "react";
import img1 from '../../../assets/img/gallery/pic11.jpg'
import img2 from '../../../assets/img/gallery/electronics banner.jpg'

const ImageHero = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "100%",
        margin: 0,
      }}
    >
      <img
        src={img1}
        alt="Image 1"
        style={{ width: "100%", height: "500px", objectFit:"cover" }}
      />
      <img
        src={img2}
        alt="Image 2"
        style={{ width: "100%", height: "500px", objectFit:"cover" }}
      />
    </div>
  );
};

export default ImageHero;
