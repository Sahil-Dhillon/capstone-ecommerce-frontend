// ErrorPage.js
import React from "react";

const ErrorPage = ({ message = "An error occurred.", onRetry }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "black", marginBottom: "1rem" }}>Error</h1>
      <p style={{ marginBottom: "1rem" }}>{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#4fa94d",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorPage;
