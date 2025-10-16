import React from "react";
import { Link } from "react-router";
import placeholderImg from "../../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({ card, deletable, handleDelete }) => {
  const { title, description, cover_image, published_at, id } = card;

  return (
    <div className="flex relative">
      <div className="transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-50 ">
        <Link
          to={`/blog/${id}`}
          className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
        >
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 dark:bg-gray-500"
            src={cover_image || placeholderImg}
          />
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs dark:text-gray-600">
              {new Date(published_at).toLocaleDateString()}
            </span>
            <p>{description}</p>
          </div>
        </Link>
      </div>
      {deletable && (
        <div
          onClick={() => handleDelete(id)}
          className="absolute -top-5 -right-5 hover:text-secondary bg-indigo-100 p-3 ml-5 rounded-full hover:bg-indigo-200 cursor-pointer hover:scale-105 overflow-hidden"
        >
          <MdDeleteForever
            size={20}
            className="text-secondary group-hover:text-primary"
          />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
