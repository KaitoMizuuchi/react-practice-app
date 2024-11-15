import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

const NavItem = ({ link, icon: Icon }) => {
  return (
    <li className="l-header__nav-item">
      <Link to={link}>
        <IconButton>
          <Icon className="l-header__nav-icon" />
        </IconButton>
      </Link>
    </li>
  );
};

export default NavItem;
