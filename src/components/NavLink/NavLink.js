import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

import "./NavLink.scss";

const NavLink = ({ children, to, className = "" }) => {
  return (
    <RouterNavLink exact to={to} activeClassName="selected" className={`app-nav-link ${className}`}>
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
