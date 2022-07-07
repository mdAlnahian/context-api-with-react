import React from 'react';
import './Navbar.css';
import image  from './Tech Geeks.png';
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Navbar = () => {

   const { pathname } = useLocation();
//    console.log(pathname);

    let activeStyle = {
      fontWeight: "bolder",
      //   background: "#1B4388",
      background: "linear-gradient(to right, #1B4388 , #1E90C2 )",
      padding: "6px 9px",
      borderRadius: "8px",
      color: "white",
    };

    // let activeClassName = "underline";

    return (
      <div
        style={
          pathname.includes("blog") ? { display: "none" } : { display: "flex" }
        }
      >
        <div className="nav-container">
          <div>
            <img src={image} alt="" srcset="" />
          </div>
          <div className="nav-link">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/videos"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              VIDEOS
            </NavLink>
            <NavLink
              to="/login"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              LOGIN
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default Navbar;