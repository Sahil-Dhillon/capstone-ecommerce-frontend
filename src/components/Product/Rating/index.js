// AddReview Component
// import React, { useState } from "react";
// Updated Ratings Component
import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReviewsList from "../ReviewList";
import { AppContext } from "../../../context/AppContext";
import axios from "axios";
// import AddReview from "./AddReview";

const AddReview = ({ onAddReview }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating >= 1 && rating <= 5 && comment.trim()) {
      onAddReview({
        rating,
        comment,
        date: new Date().toLocaleDateString(), // Example: Adding date
      });
      setRating(0);
      setComment("");
    } else {
      alert("Please provide a valid rating (1-5) and a comment.");
    }
  };

  return (
    <div className="add-review-section bg-light p-4 rounded mt-4">
      <h4>Add a Review</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          {/* <label htmlFor="rating" className="form-label">
            Rating:
          </label> */}
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? "selected" : ""}`}
                style={{ cursor: "pointer", fontSize: "32px", color: star <= rating ? "gold" : "gray" }}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            Comment:
          </label>
          <textarea
            id="comment"
            className="form-control"
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Review
        </button>
      </form>
    </div>
  );
};



const Ratings = ({ product }) => {
  const [reviews, setReviews] = useState(product.listOfReviews);
  const { userData} = useContext(AppContext);

  const ratingDistribution = Array(5).fill(0);

  // Calculate the distribution
  reviews.forEach((review) => {
    if (review.rating >= 1 && review.rating <= 5) {
      ratingDistribution[5 - review.rating] += 1; // 5-star at index 0, 4-star at index 1, etc.
    }
  });

  // Total number of reviews
  const totalReviews = reviews.length;

  // Convert counts to percentages
  const ratingDistributionPercentage = ratingDistribution.map((count) =>
    totalReviews > 0 ? ((count / totalReviews) * 100).toFixed(2) : 0
  );

  // Handle adding a new review
  const handleAddReview = (newReview) => {
    axios.post(`/review/add/${product.productId}`,{
      "review":newReview.comment,
      "userId":userData.userId,
      "rating":newReview.rating
    }).then((res)=>{
      
      setReviews((prevReviews) => [{
        "review":newReview.comment,
        "userId":(userData.firstName + " "+userData.lastName),
        "rating":newReview.rating
      }, ...prevReviews]);
    })
  };

  // Calculate average rating
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews || 0;

  return (
    <div className="ratings-section bg-light p-4 rounded">
      <h3>Ratings</h3>
      <div className="d-flex align-items-center my-3">
        <div className="rating-number me-4 text-center">
          <h1 className="display-4">{averageRating.toFixed(1)}</h1>
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
      <p className="text-muted">{totalReviews} total reviews</p>
      <ReviewsList reviews={reviews} />
      <AddReview onAddReview={handleAddReview} />
    </div>
  );
};

export default Ratings;
