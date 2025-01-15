import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import logo from "../assets/images/logo.png"; // Path to your logo image
import "../assets/css/footer.css";

const Footer = () => {
  // Use media query to detect mobile screens (max width 768px)
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <motion.div
          className="footer-section logo-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="footer-logo">
            <Link to="/">
              <img src={logo} alt="Kashif Naxis" />
            </Link>
          </div>
        </motion.div>

        {/* Navigation Links Section */}
        <motion.div
          className="footer-section nav-links-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Footer Right Section (Social Icons and Copyright) */}
        <motion.div
          className="footer-section footer-right"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p>&copy; 2024 Kashif Naxis. All rights reserved.</p>
          {isMobile ? (
            <div className="social-icons">
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          ) : (
            <div className="social-icons">
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>
              <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
              </a>
            </div>
          )}
        </motion.div>
      </div>

      <div className="footer-bottom">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Copyright © 2024 Kashif Naxis. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
