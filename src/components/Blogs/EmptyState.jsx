import React from "react";
import { Link } from "react-router";

const EmptyState = ({ message, address }) => {
  return (
    <div className="gap-5 flex flex-col justify-center items-center min-h-[calc(100vh-132px)]">
      <p className="text-xl">{message}</p>
      <Link
        to={address}
        className="relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#4A00FF] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#FF00D3] group-hover:bg-[#4A00FF]"></span>
        <span className="relative text-black group-hover:text-white">
          Go to Blog
        </span>
      </Link>
    </div>
  );
};

export default EmptyState;
