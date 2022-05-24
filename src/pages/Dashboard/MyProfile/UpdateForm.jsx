import React from "react";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase/firebaseInit";
import Loader from "../../../helper/Loader";

const UpdateForm = ({ setShowForm }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [updateProfile, updating] = useUpdateProfile(auth);

  const onSubmit = async (data) => {
    await updateProfile({ displayName: data.name });
    setShowForm(false);
  };

  if (updating) {
    return <Loader />;
  }
  return (
    <div className="h-full">
      <p className="font-bold">Update Your Profile</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4 items-center">
          <div className="form-control w-full max-w-xs mb-6 ">
            <label className="label">
              <span className="label-text">Edit Your Name?</span>
            </label>
            <input
              type="text"
              placeholder="Type Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs mb-6">
            <label className="label">
              <span className="label-text">Edit Email</span>
            </label>
            <input
              type="text"
              placeholder="Type New Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
        </div>

        <div className="form-control w-full  mb-6 ">
          <label className="label">
            <span className="label-text">Edit Your Address?</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Address"
            {...register("address", {
              required: {
                value: true,
                message: "Address is Required",
              },
            })}
          />
          <label className="label">
            {errors.address?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.address.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full mb-6 ">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="text"
            placeholder="Type Name"
            className="input input-bordered w-full"
            {...register("number", {
              required: {
                value: true,
                message: "Phone Number is Required",
              },
            })}
          />
          <label className="label">
            {errors.number?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.number.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full  mb-6 ">
          <label className="label">
            <span className="label-text">Edit Your Name?</span>
          </label>
          <input
            type="text"
            placeholder="Type Name"
            className="input input-bordered w-full "
            {...register("education", {
              required: {
                value: true,
                message: "education is Required",
              },
            })}
          />
          <label className="label">
            {errors.education?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.education.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full mb-6 ">
          <label className="label">
            <span className="label-text">Edit Your Name?</span>
          </label>
          <input
            type="text"
            placeholder="Type Name"
            className="input input-bordered w-full "
            {...register("linedin", {
              required: {
                value: true,
                message: "linedin is Required",
              },
            })}
          />
          <label className="label">
            {errors.linedin?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.linedin.message}
              </span>
            )}
          </label>
        </div>
        <input
          type="submit"
          placeholder="Type New Email"
          className="btn btn-primary w-full  mb-12"
        />
      </form>
    </div>
  );
};

export default UpdateForm;
