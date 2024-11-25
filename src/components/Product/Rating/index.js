import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReviewsList from "../ReviewList";

const Ratings = ({ product }) => {
  const ratingDistribution = [50, 30, 10, 7, 3]; // Example distribution percentages

  return (
    <div className="ratings-section bg-light p-4 rounded">
      <h3>Ratings</h3>
      <div className="d-flex align-items-center my-3">
        <div className="rating-number me-4 text-center">
          <h1 className="display-4">{product.rating.toFixed(1)}</h1>
          <p className="text-muted">out of 5</p>
        </div>
        <div className="rating-bars w-100">
          {[5, 4, 3, 2, 1].map((star, index) => (
            <div className="d-flex align-items-center mb-2" key={star}>
              <span className="me-2">{star} ★</span>
              <div className="progress w-75 me-3">
                <div
                  className="progress-bar bg-success "
                  style={{ width: `${ratingDistribution[index]}%` }}
                ></div>
              </div>
              <span className="text-muted">{ratingDistribution[index]}%</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-muted">{product.reviews.length} total reviews</p>
      <ReviewsList reviews={product.reviews} />
    </div>
  );
};

export default Ratings;
