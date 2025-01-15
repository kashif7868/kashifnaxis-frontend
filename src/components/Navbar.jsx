import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBlog,
  FaUserCircle,
  FaPhoneAlt,
  FaSignInAlt,
} from "react-icons/fa";
import { GrServices, GrProjects } from "react-icons/gr";
import { HiOutlineUserCircle } from "react-icons/hi";
import { CiLogout } from "react-icons/ci";
import { MdWork } from "react-icons/md"; // New icon for Projects
import logo from "../assets/images/logo.png";
import { useMediaQuery } from "react-responsive";
import useScroll from "../hooks/useScroll";
import { useAuth } from "../context/authContext"; // Import useAuth for authentication context
import "../assets/css/navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth(); // Get user and logout function from auth context
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 1210px)" });
  const isScrolled = useScroll();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Add state for hover effect

  const handleProfileMenuToggle = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    logout(); // Log out using the auth context
    navigate("/signIn"); // Redirect to sign-in page after logout
  };

  const handleMouseEnter = () => {
    setIsHovered(true); // Set hover state to true
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Set hover state to false
  };

  return (
    <div className={`navbar-container-main ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-line"></div>
      <header
        className={`visibal-header-container ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="logo-container">
          <div className="brand-name">
            <Link to="/">
              <img src={logo} alt="Kashif Developer" />
            </Link>
          </div>
        </div>
        <div className="navbar-wrapper">
          <nav className="navbar-links-container">
            {!isMobile && (
              <ul className="navbar-menu-list">
                <li>
                  <Link
                    to="/"
                    className={`navbar-link ${isHovered ? "hovered" : ""}`}
                    onMouseEnter={handleMouseEnter} // Add onMouseEnter event
                    onMouseLeave={handleMouseLeave} // Add onMouseLeave event
                  >
                    <FaHome className="navbar-icon" /> Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className={`navbar-link ${isHovered ? "hovered" : ""}`}
                    onMouseEnter={handleMouseEnter} // Add onMouseEnter event
                    onMouseLeave={handleMouseLeave} // Add onMouseLeave event
                  >
                    <GrServices className="navbar-icon" /> Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className={`navbar-link ${isHovered ? "hovered" : ""}`}
                    onMouseEnter={handleMouseEnter} // Add onMouseEnter event
                    onMouseLeave={handleMouseLeave} // Add onMouseLeave event
                  >
                    <GrProjects className="navbar-icon" /> Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className={`navbar-link ${isHovered ? "hovered" : ""}`}
                    onMouseEnter={handleMouseEnter} // Add onMouseEnter event
                    onMouseLeave={handleMouseLeave} // Add onMouseLeave event
                  >
                    <FaBlog className="navbar-icon" /> Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`navbar-link ${isHovered ? "hovered" : ""}`}
                    onMouseEnter={handleMouseEnter} // Add onMouseEnter event
                    onMouseLeave={handleMouseLeave} // Add onMouseLeave event
                  >
                    <FaUserCircle className="navbar-icon" /> About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`navbar-link ${isHovered ? "hovered" : ""}`}
                    onMouseEnter={handleMouseEnter} // Add onMouseEnter event
                    onMouseLeave={handleMouseLeave} // Add onMouseLeave event
                  >
                    <FaPhoneAlt className="navbar-icon" /> Contact
                  </Link>
                </li>
                {user ? (
                  <li className="profile-container">
                    <div
                      className=" profile-info"
                      onClick={handleProfileMenuToggle}
                    >
                      {user.image ? (
                        <img
                          src={`http://localhost:3000/${user.image}`} // Correct URL for static files
                          alt={user.fullName || "User"}
                          className="profile-image"
                        />
                      ) : (
                        <div className="profile-avatar">
                          {user.fullName ? user.fullName.charAt(0) : "U"}
                        </div>
                      )}
                      <span>{user.fullName || "Guest"}</span>
                      {isProfileMenuOpen && (
                         <div className={`profile-dropdown-desktop ${isProfileMenuOpen ? 'open' : ''}`}>
                          <Link to="/my-account" className="profile-link">
                            <FaUserCircle className="profile-icon" />
                            My Account
                          </Link>
                          <span className="logout-btn" onClick={handleLogout}>
                            <CiLogout className="logout-icon" />
                            Logout
                          </span>
                        </div>
                      )}
                    </div>
                  </li>
                ) : (
                  <li className="navbar-sign-in">
                    <Link to="/signIn" className="navbar-sign-in-btn">
                      <FaSignInAlt className="navbar-icon" /> Sign In
                    </Link>
                  </li>
                )}
              </ul>
            )}
          </nav>
        </div>
      </header>

      {isMobile && (
        <div className="mobile-navbar">
          <div className="mobile-nav-item">
            <Link to="/" className="navbar-link">
              <FaHome /> <span>Home</span>
            </Link>
          </div>
          <div className="mobile-nav-item">
            <Link to="/services" className="navbar-link">
              <GrServices /> <span>Services</span>
            </Link>
          </div>
          <div className="mobile-nav-item">
            <Link to="/projects" className="navbar-link">
              <MdWork /> <span>Projects</span>
            </Link>
          </div>
          <div className="mobile-nav-item">
            <Link to="/blogs" className="navbar-link">
              <FaBlog /> <span>Blogs</span>
            </Link>
          </div>
          <div className="mobile-nav-item" onClick={handleProfileMenuToggle}>
            <HiOutlineUserCircle />
            <span>Profile</span>
            {isProfileMenuOpen && (
              <div className="profile-dropdown">
                {user ? (
                  <>
                    <span className="profile-name">
                      {user.fullName || "User"}
                    </span>
                    <Link to="/my-account" className="profile-link">
                      <FaUserCircle className="profile-icon" />
                      My Account
                    </Link>
                    <span className="logout-btn" onClick={handleLogout}>
                      <CiLogout className="logout-icon" />
                      Logout
                    </span>
                  </>
                ) : (
                  <Link to="/signIn" className="profile-link">
                    <FaUserCircle className="profile-icon" />
                    Sign In
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
