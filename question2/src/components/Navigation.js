import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/signin">
          <li>Signin</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navigation;
