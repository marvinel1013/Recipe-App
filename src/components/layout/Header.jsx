import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/Logo.png";

function Header() {
  const activeStyle = {
    textDecoration: "underline",
  };
  return (
    <div className="w-full py-3 flex justify-between items-center container px-4 md:mx-auto">
      <Link to={"/"}>
        <img src={Logo} alt="logo" className="md:w-24 w-16 cursor-pointer" />
      </Link>
      <div className="flex md:gap-7 gap-3 text-lg md:text-2xl text-[#dbcdb5] font-semibold">
        <NavLink
          to="/meals"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span>Meals</span>
        </NavLink>
        <NavLink
          to="/savedMeals"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span>Saved List</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
