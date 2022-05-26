import React from "react";

const ShowReview = ({ review }) => {
  console.log(review);
  return (
    <>
      <div class="card w-96  text-primary-content">
        <div class="card-body text-black">
          <div className="flex justify-between ">
            <h2 class="card-title "> {review.userName} </h2>
            <p> rating : {review.rating}⭐ </p>
          </div>
          <p> {review.review.slice(0, 150)} </p>
        </div>
      </div>
    </>
  );
};

export default ShowReview;
