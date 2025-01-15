// AllPages.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import MyAccounts from "../components/auth/MyAccount";
import ResetPasswordPage from "../components/auth/ResetPasswordPage";
import Project from "../pages/Project";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Services from "../pages/Services";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";

const AllPages = () => {
  return (
    <Routes>
      <Route path="/my-account" element={<MyAccounts />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllPages; // Ensure this is exported as default
