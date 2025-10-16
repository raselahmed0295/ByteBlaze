import React, { useEffect, useState } from "react";
import BlogCard from "../Blogs/BlogCard";
import { deleteBlog, getBlogs } from "../../utlity/helper";
import EmptyState from "../Blogs/EmptyState";

const BookMarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedData = getBlogs();
    setBlogs(storedData);
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id);
    const storedData = getBlogs();
    setBlogs(storedData);
  };

  if (blogs.length < 1)
    return <EmptyState message="No Bookmarks Available!" address={"/blogs"} />;

  return (
    <div className="grid mt-10 justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 w-9/12 mx-auto">
      {blogs.map((link) => (
        <BlogCard
          handleDelete={handleDelete}
          deletable={true}
          key={link.id}
          card={link}
        ></BlogCard>
      ))}
    </div>
  );
};

export default BookMarks;
