import React from "react";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../components/Root/Root";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import Home from "../pages/Home/Home";
import Blogs from "../components/Blogs/Blogs";
import BookMarks from "../components/BookMarks/BookMarks";
import Blog from "../pages/Blog/Blog";
import Content from "../pages/Blog/Content";
import Author from "../pages/Blog/Author";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/blogs",
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
        Component: Blogs,
      },
      {
        path: "/bookmark",
        Component: BookMarks,
      },
      {
        path: "blog/:id",
        Component: Blog,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            Component: Content,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: "author",
            Component: Author,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ],
      },
    ],
  },
]);
