import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Review = ({ title, comment, rating, user }) => {
  return (
    <div className="review card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{comment}</p>
        <div className="review-rating text-warning">
          {"★".repeat(rating) + "☆".repeat(5 - rating)}
        </div>
        <p className="text-muted">- {user}</p>
      </div>
    </div>
  );
};

export default Review;
