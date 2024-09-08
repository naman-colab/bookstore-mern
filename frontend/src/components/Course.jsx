import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json"
import { Link } from "react-router-dom";
const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="items-center justify-center text-center ">
          <h1 className="text-2xl font-semibold md:text-4xl mt-20 ">
            {" "}
            We're delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>{" "}
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip. incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip.
          </p>

          <Link to="/">

          <button className="bg-pink-500 text-white  px-4 py-2 rounded-md  hover:bg-pink-700 duration-300 mt-5">Back</button>
          </Link>

          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
{
    list.map((item,index)=>{
      return  <Cards key={index} item={item}/>
    })
}
</div>
<div>
        </div>

     
         
      </div>
    </>
  );
};

export default Course;
