import React from "react";
import { Outlet, Link } from "react-router-dom";

function Root() {
  return (
    <div>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>
      <hr />
      <Outlet /> {/* This is where child routes will be rendered */}
    </div>
  );
}

export default Root;
