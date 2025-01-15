import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Footer Content Section */}
      <div className="footer-content">
        {/* Footer Middle Section (Links) */}
        <motion.div
          className="footer-content-links"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <ul className="footer-links-list">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="footer-social-links-container"
        >
          <Link
            href="https://www.linkedin.com/in/kashif-ali-b82a76220"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FaLinkedin size={30} className="footer-social-icon footer-linkedin-icon" />
          </Link>
          <Link
            href="https://github.com/kashif7868"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FaGithub size={30} className="footer-social-icon footer-github-icon" />
          </Link>
          <Link
            href="https://www.facebook.com/kashifali.kashifali.90813"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FaFacebook size={30} className="footer-social-icon footer-facebook-icon" />
          </Link>
          <Link
            href="https://www.instagram.com/kashif_nexis_"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <AiOutlineInstagram
              size={30}
              className="footer-social-icon footer-instagram-icon"
            />
          </Link>
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
