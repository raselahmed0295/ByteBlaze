import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const myTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", myTheme);
  }, [theme]);

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };
  console.log(theme);
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg sticky top-0">
        <div className="navbar w-10/12 mx-auto">
          <div className="flex-1">
            <a className="btn btn-ghost text-3xl text-secondary gap-0">
              Byte<span className="text-primary">Blaze</span>
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border border-primary text-primary font-bold rounded-md px-4 py-1 bg-gray-50"
                  : "hover:text-primary font-bold rounded-md px-4 py-1"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "border border-primary text-primary font-bold rounded-md px-4 py-1 bg-gray-50"
                  : "hover:text-primary font-bold rounded-md px-4 py-1"
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/bookmark"
              className={({ isActive }) =>
                isActive
                  ? "border border-primary text-primary font-bold rounded-md px-4 py-1 bg-gray-50"
                  : "hover:text-primary font-bold rounded-md px-4 py-1"
              }
            >
              Bookmarks
            </NavLink>
            <div>
              <label className="toggle text-base-content">
                <input
                  onChange={handleTheme}
                  type="checkbox"
                  className="theme-controller"
                />

                <svg
                  aria-label="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="3"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="10" cy="10" r="3"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </g>
                </svg>

                <svg
                  aria-label="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="3"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </g>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
