// Loading.js
import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div
      style={{

        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* <div style={{ textAlign: "center" }}> */}
        <TailSpin
    
        
          height="80"
          width="80"
          color="#000"
          ariaLabel="loading"
          
        />
        <h3 style={{ marginTop: "1rem" }}>{message}</h3>
      </div>
    // </div>
  );
};

export default Loading;
