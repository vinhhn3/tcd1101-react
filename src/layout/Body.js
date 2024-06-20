import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import User from "../pages/User";

function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/user/:loginId" element={<User />} />
      </Routes>
    </div>
  );
}

export default Body;
