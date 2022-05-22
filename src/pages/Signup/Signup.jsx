import React from "react";
import { Link } from "react-router-dom";
import { GrGoogle } from "react-icons/gr";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <section className="bg-[#F4F7FF] ">
        <div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className={styles.loginWrapper}>
                <div className="text-center">
                  <h2 className="text-orange-600  text-3xl font-bold">
                    Create an Account
                  </h2>
                  <p>We make it easy to Join with Us</p>
                  <p></p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label className="label">
                      <span className="label-texts">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={styles.loginInput}
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
                  <div>
                    <label className="label">
                      <span className="label-texts">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Email"
                      className={styles.loginInput}
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is Required",
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: "Provide a valid Email",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.email?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-texts">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className={styles.passwordInput}
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is Required",
                        },
                        minLength: {
                          value: 6,
                          message: "Must be 6 characters or longer",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.password?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="mb-10">
                    <input
                      type="submit"
                      value="Sign In"
                      className={styles.signInBTN}
                    />
                  </div>
                </form>
                <p className="text-base mb-6 text-[#adadad]">Connect With</p>
                <ul className="flex justify-between -mx-2 mb-12">
                  <li className="px-2 w-full">
                    <Link to="#" className={styles.googleBtn}>
                      <span className="mr-2">
                        <GrGoogle />
                      </span>
                      Sign up with Google
                    </Link>
                  </li>
                </ul>
                <Link to="#" className={styles.forgetPass}>
                  Forget Password?
                </Link>
                <p className="text-base text-[#adadad]">
                  Already have an Account?
                  <Link
                    to="/login"
                    className="text-blue-700 hover:underline hover:text-orange-700 pl-2"
                  >
                    Login
                  </Link>
                </p>
                <div>
                  <span className="absolute top-1 right-1"></span>
                  <span className="absolute left-1 bottom-1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;

const styles = {
  loginWrapper: ` max-w-[525px] mx-auto text-center bg-white rounded-lg relative overflow-hidden py-16 px-10 sm:px-12 md:px-[60px]`,
  loginInput: `text-black w-full rounded-md border py-3 px-5 text-base text-body-color placeholder-[#b8b8b8] outline-none focus-visible:shadow-none focus:border-primary`,
  passwordInput: `text-black rounded-md w-full border py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus-visible:shadow-none focus:border-primary`,
  signInBTN: ` text-black font-bold w-full rounded-md border bordder-primary py-3 px-5 bg-primary cursor-pointer hover:bg-opacity-90 transition`,
  googleBtn: `flex h-11 items-center justify-center rounded-md bg-[#EA4335] hover:bg-opacity-90`,
  forgetPass: `text-base inline-block mb-2 text-[#adadad] hover:underline hover:text-black`,
};
