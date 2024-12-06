import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReviewsList from "../ReviewList";

const Ratings = ({ product }) => {

  const ratingDistribution = Array(5).fill(0);

  // Calculate the distribution
  if(product){
    product.listOfReviews.forEach((review) => {
        if (review.rating >= 1 && review.rating <= 5) {
            ratingDistribution[5 - review.rating] += 1; // 5-star at index 0, 4-star at index 1, etc.
        }
    });
  }
  // Total number of reviews
  const totalReviews = product.listOfReviews.length;

  // Convert counts to percentages
  const ratingDistributionPercentage = ratingDistribution.map((count) =>
      totalReviews > 0 ? ((count / totalReviews) * 100).toFixed(2) : 0
  );
  return (
    <div className="ratings-section bg-light p-4 rounded">
      <h3>Ratings</h3>
      <div className="d-flex align-items-center my-3">
        <div className="rating-number me-4 text-center">
          <h1 className="display-4">{product.productRating.toFixed(1)}</h1>
          <p className="text-muted">out of 5</p>
        </div>
        <div className="rating-bars w-100">
          {[5, 4, 3, 2, 1].map((star, index) => (
            <div className="d-flex align-items-center mb-2" key={star}>
              <span className="me-2">{star} ★</span>
              <div className="progress w-75 me-3">
                <div
                  className="progress-bar bg-success "
                  style={{ width: `${ratingDistributionPercentage[index]}%` }}
                ></div>
              </div>
              <span className="text-muted">{ratingDistributionPercentage[index]}%</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-muted">{product.listOfReviews.length} total reviews</p>
      <ReviewsList reviews={product.listOfReviews} />
    </div>
  );
};

export default Ratings;
