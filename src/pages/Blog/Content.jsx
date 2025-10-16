import React from "react";
import { useLoaderData } from "react-router";
import placeholderImg from "../../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const loader = useLoaderData();
  const { title, tags, cover_image, body_html } = loader;
  return (
    <div>
      <div className="transition border border-gray-200">
        <div className="mx-auto group hover:no-underline focus:no-underline p-2">
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 dark:bg-gray-500"
            src={cover_image || placeholderImg}
          />
          <div>
            <div className="flex flex-wrap py-3 gap-2">
              {tags.map((tag) => (
                <a key={tag} className="px-3 py-1 rounded-sm hover:underline">
                  #{tag}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold underline group-focus:underline">
              {title}
            </h3>
            <div className="overflow-hidden">
              <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
