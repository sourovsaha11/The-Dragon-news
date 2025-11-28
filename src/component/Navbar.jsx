import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-around w-11/12">
      <div className=""></div>

      <div className="navbar gap-5 text-accent justify-center">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/about"> About </NavLink>
        <NavLink to="/career"> Career </NavLink>
      </div>

      <div className="login-section flex items-center gap-3">
        <img src={user} alt="user profile pic" srcset="" />
        <button className="btn btn-primary">Log In</button>
      </div>
    </div>
  );
};

export default Navbar;
