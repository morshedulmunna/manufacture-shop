import React from "react";
import toast from "react-hot-toast";

import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase/firebaseInit";
import { signOut } from "firebase/auth";

const MyReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    const rating = data.rating;
    const review = data.review;
    const newReview = {
      rating,
      review,
    };

    // Post For Product Item ===>>>
    const url = `http://localhost:5000/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => response.json())
      .then((data2) => {
        if (data2.message === "Forbidden access") {
          signOut(auth);
          localStorage.removeItem("accessToken");
          return toast.error("Access Forbidden");
        }
        reset();
        toast.success("Successfuly Added Your Review");
      });
  };

  return (
    <div>
      <div className="h-full">
        <p className="font-bold">Add Your Review (FeedBack)</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs mb-6 ">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Type Name"
              value={user.displayName}
              readOnly
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs mb-6">
            <label className="input-group">
              <div className="form-control">
                <input
                  {...register("rating", {
                    max: {
                      value: 5,
                    },
                    min: {
                      value: 0,
                    },
                    required: true,
                  })}
                  type="number"
                  defaultValue="0"
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.rating?.type === "max" && (
                  <span className="text-error">
                    Please Rating less than {5}
                  </span>
                )}
                {errors.rating?.type === "min" && (
                  <span className="text-error">
                    Please Rating more than {0}
                  </span>
                )}
                {errors.rating?.type === "required" && (
                  <span className="text-error">Rating Require</span>
                )}
              </div>
            </label>
          </div>
          <div className="form-control w-full max-w-xs mb-6">
            <label className="label">
              <span className="label-text">Type Review</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Type Review"
              {...register("review", {
                required: {
                  value: true,
                  message: "Your Review is Required",
                },
              })}
            />
            <label className="label">
              {errors.review?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.review.message}
                </span>
              )}
            </label>
          </div>
          <input
            type="submit"
            placeholder="Type New Email"
            className="btn btn-primary w-full max-w-xs mb-6 capitalize"
            value="Submit Review "
          />
        </form>
      </div>
    </div>
  );
};

export default MyReview;
