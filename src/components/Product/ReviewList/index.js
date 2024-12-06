import React from "react";
import Review from "../Review";

const ReviewsList = ({ reviews }) => {
  return (
    <div className="reviews-list mt-4">
      <h3>Reviews</h3>
      {reviews.map((review, index) => (
        <Review
          key={index}
          title={review.review}
          // comment={review.comment}
          rating={review.rating}
          user={review.userId}
        />
      ))}
    </div>
  );
};

export default ReviewsList;
