import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Use useNavigate and useLocation
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate inside the component
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; // Fallback to home page if no "from" location is set

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = React.useState('');

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:3000/api/signup", userInfo);
      if (response.data) {
        toast.success("Signup successful");

        // Programmatically navigate to the intended page or home page
        navigate(from, { replace: true });

        setErrorMessage('');
        document.getElementById("my_modal_3").close(); // Close modal after successful signup
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (error) {
      // Catch and handle errors
      if (error.response) {
        toast.error(error.response.data.message || "Something went wrong.");
      }
    }
  };

  return (
    <div className='flex h-screen items-center justify-center border'>
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Modal Button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}>
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>

            {/* Show error message */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            {/* Name Input */}
            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br />
              <input
                type='text'
                className='w-80 px-3 border py-1 outline-none rounded-md'
                placeholder='Enter Your fullname'
                {...register("name", { required: "Name is required" })}
              />
              <br />
              {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
            </div>

            {/* Email Input */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type='email'
                className='w-80 px-3 border py-1 outline-none rounded-md'
                placeholder='Enter Your email'
                {...register("email", { required: "Email is required" })}
              />
              <br />
              {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
            </div>

            {/* Password Input */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type='password'
                className='w-80 px-3 border py-1 outline-none rounded-md'
                placeholder='Enter Your password'
                {...register("password", { required: "Password is required" })}
              />
              <br />
              {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
            </div>

            {/* Signup Button */}
            <div className='flex justify-around mt-4'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                Signup
              </button>
              <p>
                Have an account?
                <Link to="/"
                  className='underline cursor-pointer text-blue-500'
                  onClick={() => document.getElementById("my_modal_3").showModal()}>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
