import React from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Content from "./Content";
import Author from "./Author";
import { MdBookmarkAdd } from "react-icons/md";
import { saveBlogs } from "../../utlity/helper";

const Blog = () => {
  const blog = useLoaderData();
  const {
    title,
    //description,
    published_at,
    comments_count,
    public_reactions_count,
    reading_time_minutes,
  } = blog;

  const handleBookmark = (blog) => {
    saveBlogs(blog);
  };

  return (
    <div>
      <div className="max-w-5xl px-6 py-16 mx-auto space-y-8">
        <article className="space-y-8 p-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
              <div className="flex items-center md:space-x-2">
                <p className="text-sm">
                  {reading_time_minutes} min read •{" "}
                  {new Date(published_at).toLocaleDateString()}
                </p>
              </div>
              <div
                onClick={() => handleBookmark(blog)}
                className="bg-indigo-100 p-3 ml-5 rounded-full hover:bg-indigo-200 cursor-pointer hover:scale-105 overflow-hidden"
              >
                <MdBookmarkAdd size={25} className="text-secondary" />
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                {comments_count} comments • {public_reactions_count} views
              </p>
            </div>
          </div>

          <div>
            <Tabs>
              <TabList>
                <Tab>Content</Tab>
                <Tab>Author</Tab>
              </TabList>

              <TabPanel>
                <div>
                  <Content></Content>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <Author></Author>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog;
