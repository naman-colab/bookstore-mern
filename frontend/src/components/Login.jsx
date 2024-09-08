import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {
  const  {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // Define the onSubmit function
  const onSubmit = (data) => {
    console.log(data); // Logs the form data
    document.getElementById("my_modal_3").close(); // Closes the modal after successful submission
  }

  return (
    <div>
   
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
        
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
              onClick={() => document.getElementById("my_modal_3").close()}>
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email input */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type='email'
                className='w-80 px-3 border py-1 outline-none rounded-md'
                placeholder='Enter Your email'
                {...register("email", { required: "Email is required" })}
              />
              <br></br>
              {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
            </div>

            {/* Password input */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type='password'
                className='w-80 px-3 border py-1 outline-none rounded-md'
                placeholder='Enter Your password'
                {...register("password", { required: "Password is required" })}
              />
              <br></br>
              {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
            </div>

            {/* Submit button */}
            <div className='flex justify-around mt-4'>
              <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/signup" className='underline cursor-pointer text-blue-500'>
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login;
