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
  } = useForm();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

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
        <div class="form-control w-full max-w-xs mb-6 ">
          <label class="label">
            <span class="label-text">Edit Your Name?</span>
          </label>
          <input
            type="text"
            placeholder="Type Name"
            class="input input-bordered w-full max-w-xs"
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
        <div class="form-control w-full max-w-xs mb-6">
          <label class="label">
            <span class="label-text">Edit Email</span>
          </label>
          <input
            type="text"
            placeholder="Type New Email"
            class="input input-bordered w-full max-w-xs"
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
        <div class="form-control w-full max-w-xs mb-6">
          <label class="label">
            <span class="label-text">Edit Your Name?</span>
          </label>
          <textarea
            class="textarea textarea-bordered"
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
        <input
          type="submit"
          placeholder="Type New Email"
          class="btn btn-primary w-full max-w-xs mb-6"
        />
      </form>
    </div>
  );
};

export default UpdateForm;
