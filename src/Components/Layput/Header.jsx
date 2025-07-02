import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";
export default function Header() {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 text-2xl text-white my-10 mb-5">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-pink-400" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "text-pink-500" : "")}
        >
          Movie
        </NavLink>

        <NavLink
          to="/demo"
          className={({ isActive }) => (isActive ? "text-pink-500" : "")}
        >
          Present
        </NavLink>
        <NavLink
          to="/HomeComic"
          className={({ isActive }) => (isActive ? "text-pink-500" : "")}
        >
          Comic
        </NavLink>
      </header>
    </>
  );
}
