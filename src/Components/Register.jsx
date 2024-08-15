import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password, username, photo } = data;
    console.log(data);
    try {
      await createUser(email, password);
      updateUserProfile(username, photo);
      navigate("/");
      toast("SignUp Successfull");
    } catch (error) {
      toast(error.message);
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=9b7acdb503ca4d50adb5fd8944cfc170`,
          formData
        );

        if (response.data.success) {
          setValue("photo", response.data.data.url);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  return (
    <div className="w-full max-w-md mx-auto p-8 space-y-3 bg-teal-400 rounded-xl dark:bg-gray-50 dark:text-gray-800 shadow-xl my-8">
      <h1 className="text-3xl font-bold text-center">Sing Up</h1>
      <form
        noValidate=""
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 text-left"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-600">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            {...register("username", { required: true })}
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          {errors.username && (
            <p className="text-red-600">Username is required</p>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-600">
            User Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          {errors.username && <p className="text-red-600">email is required</p>}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="photo" className="block dark:text-gray-600">
            User Photo
          </label>
          <input
            type="file"
            name="photo"
            id="photo"
            placeholder="Photo"
            onChange={handleFileChange}
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          {errors.username && (
            <p className="text-red-600">Password is required</p>
          )}
          <div className="flex justify-end text-xs dark:text-gray-600">
            <a rel="noopener noreferrer" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <button className="block w-full p-3 text-center font-medium bg-slate-200 rounded-lg  dark:text-gray-50 dark:bg-violet-600">
          Sign up
        </button>
      </form>

      <p className="text-sm text-center mt-3 sm:px-6 dark:text-gray-600">
        Already have an account please ?
        <Link
          to={"/login"}
          rel="noopener noreferrer"
          href="#"
          className="underline font-medium dark:text-gray-800"
        >
          {" "}
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
