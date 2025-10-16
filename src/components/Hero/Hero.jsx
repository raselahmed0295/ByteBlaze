import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col justify-center -mt-20 items-center gap-5">
        <h1 className="text-5xl font-bold">
          Welcome to{" "}
          <span className="text-5xl font-bold bg-gradient-to-r from-secondary via-blue-500 to-primary text-transparent bg-clip-text animate-gradient">
            ByteBlaze
          </span>
        </h1>
        <p className="w-9/12 text-center">
          ByteBlaze is the bridge between the complex world of thechnology and
          the curious minds to understand it
        </p>
        <div className="flex gap-5">
          <Link
            to="/blogs"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#4A00FF] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#FF00D3] group-hover:bg-[#4A00FF]"></span>
            <span className="relative text-black group-hover:text-white">
              Read Blogs
            </span>
          </Link>
          <Link
            to="/bookmark"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#4A00FF] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#FF00D3] group-hover:bg-[#4A00FF]"></span>
            <span className="relative text-black group-hover:text-white">
              Bookmarks
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
