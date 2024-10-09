import React from "react";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <Outlet /> {/* This is where child routes will be rendered */}
    </div>
  );
}

export default Root;
