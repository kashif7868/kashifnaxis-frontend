import React, { useState } from "react";
import myImage from "../assets/images/461527908_2305518433121128_42846.png";
import "../assets/css/pages/home.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import {
  FaReact,
  FaNode,
  FaCss3Alt,
  FaDatabase,
  FaBootstrap,
  FaCode,
  FaPaintBrush,
  FaSearch,
  FaCogs,
  FaExternalLinkAlt,
  FaStar,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";
import "react-circular-progressbar/dist/styles.css";
import projectData from "../data/projectData";
import clientData from "../data/clientData";

const Home = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can send the data to an API or email service)
    console.log("Form Data:", { fullName, email, phone, message });
  };

  return (
    <div className="home-container">
      {/* Section 1: Slider with Image and Name */}
      <section className="slider-container">
        <div className="slider-content">
          <div className="left-content">
            {/* Greeting Text with Typing Animation */}
            <span className="greeting">
              <Typewriter
                options={{
                  strings: ["Hello, I'm"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </span>
            {/* Animated Name */}
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Kashif Ali
            </motion.h1>
            {/* Animated Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              I’m a passionate MERN Stack Developer, committed to building
              high-quality and scalable web applications. With a focus on
              innovation and user experience, I bring ideas to life with
              cutting-edge technologies.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1 }}
            >
              Let’s create something amazing together.{" "}
              <strong>Feel free to explore my work!</strong>
            </motion.p>
            {/* Call-to-Action Buttons with Slide-in Animation */}
            <div className="cta-container">
              <motion.a
                href="#portfolio"
                className="cta-button"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 1.5 }}
              >
                View Portfolio
              </motion.a>
              <motion.a
                href="#contact"
                className="cta-button secondary"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 1.5 }}
              >
                Contact Me
              </motion.a>
            </div>
          </div>
          <div className="right-content">
            {/* Profile Image with Scale Animation */}
            <motion.img
              src={myImage}
              alt="Kashif Ali"
              className="profile-img"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2 }}
            />
          </div>
        </div>
      </section>

      {/* Section 2: Skills */}
      <section className="skills-container" id="skills">
        <div className="skills-header">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typewriter
              options={{
                strings: ["  My Skills"],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </motion.h2>
          <p className="skills-description">
            I have experience working with a range of technologies. Here are
            some of my core skills:
          </p>
        </div>
        <div className="skills-icons">
          {/* MongoDB */}
          <motion.div
            className="skill-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <CircularProgressbar
              value={80}
              text={`${80}%`}
              styles={buildStyles({
                pathColor: "#4caf50",
                trailColor: "#444", // Darker trail color
              })}
            />
            <div className="skill-text">
              <FaDatabase className="skill-icon" />
              <span>MongoDB</span>
            </div>
          </motion.div>
          {/* Express.js */}
          <motion.div
            className="skill-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <CircularProgressbar
              value={75}
              text={`${75}%`}
              styles={buildStyles({
                pathColor: "#fff",
                trailColor: "#444", // Darker trail color
              })}
            />
            <div className="skill-text">
              <FaNode className="skill-icon" />
              <span>Express.js</span>
            </div>
          </motion.div>
          {/* React */}
          <motion.div
            className="skill-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <CircularProgressbar
              value={85}
              text={`${85}%`}
              styles={buildStyles({
                pathColor: "#00d9e9",
                trailColor: "#444", // Darker trail color
              })}
            />
            <div className="skill-text">
              <FaReact className="skill-icon" />
              <span>React</span>
            </div>
          </motion.div>
          {/* Node.js */}
          <motion.div
            className="skill-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <CircularProgressbar
              value={80}
              text={`${80}%`}
              styles={buildStyles({
                pathColor: "#4db8ff",
                trailColor: "#444", // Darker trail color
              })}
            />
            <div className="skill-text">
              <FaNode className="skill-icon" />
              <span>Node.js</span>
            </div>
          </motion.div>
          {/* Tailwind CSS */}
          <motion.div
            className="skill-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <CircularProgressbar
              value={70}
              text={`${70}%`}
              styles={buildStyles({
                pathColor: "#06b6d4",
                trailColor: "#444", // Darker trail color
              })}
            />
            <div className="skill-text">
              <FaCss3Alt className="skill-icon" />
              <span>Tailwind CSS</span>
            </div>
          </motion.div>
          {/* Bootstrap */}
          <motion.div
            className="skill-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <CircularProgressbar
              value={75}
              text={`${75}%`}
              styles={buildStyles({
                pathColor: "#563d7c",
                trailColor: "#444", // Darker trail color
              })}
            />
            <div className="skill-text">
              <FaBootstrap className="skill-icon" />
              <span>Bootstrap</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: My Services */}
      <section className="services-container" id="services">
        <div className="services-header">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typewriter
              options={{
                strings: [" My Services"],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </motion.h2>
          <p className="services-description">
            I provide a wide range of services to help businesses grow and
            operate efficiently:
          </p>
        </div>
        <div className="services-list">
          {/* Web Development */}
          <motion.div
            className="service-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <FaCode className="service-icon" />
            <h3>Web Development</h3>
            <p>
              I build high-performance, scalable, and responsive websites using
              the latest technologies.
            </p>
          </motion.div>

          {/* WordPress Website */}
          <motion.div
            className="service-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <FaCogs className="service-icon" />
            <h3>WordPress Website</h3>
            <p>
              I create user-friendly WordPress websites that are fast, secure,
              and customizable.
            </p>
          </motion.div>

          {/* SEO (On-Page & Off-Page) */}
          <motion.div
            className="service-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <FaSearch className="service-icon" />
            <h3>SEO On-Page & Off-Page</h3>
            <p>
              I provide SEO services to improve website rankings with backlinks,
              keyword optimization, and more.
            </p>
          </motion.div>
          {/* Graphic Design */}
          <motion.div
            className="service-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <FaPaintBrush className="service-icon" />
            <h3>Graphic Design</h3>
            <p>
              I design visually appealing graphics using Canva, CorelDraw, and
              other tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: My Projects */}
      <section className="projects-container" id="projects">
        <div className="projects-header">
          <motion.h2
            initial={{ opacity: 0, y: 50, fontSize: "2rem" }} // Set initial font size
            whileInView={{ opacity: 1, y: 0, fontSize: "2rem" }} // Set font size during animation
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typewriter
              options={{
                strings: [" My Projects"],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </motion.h2>

          <p className="projects-description">
            Here are some of the projects I’ve worked on:
          </p>
        </div>
        <div className="projects-list">
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              className="project-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt /> View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 5: Client Reviews */}
      <section className="reviews-container" id="reviews">
        <div className="reviews-header">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typewriter
              options={{
                strings: ["  Client Reviews"],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </motion.h2>
          <p className="reviews-description">
            Here's what some of my clients have to say:
          </p>
        </div>
        <div className="reviews-list">
          {clientData.map((client) => (
            <motion.div
              key={client.id}
              className="review-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img
                src={client.image}
                alt={client.name}
                className="client-image"
              />
              <div className="client-info">
                <h3>{client.name}</h3>
                <p>"{client.review}"</p>
                <div className="star-rating">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`star ${
                        index < client.rating ? "filled" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 6: Contact */}
      <section className="contact-container" id="contact">
        {/* Contact Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="contact-header"
        >
          <h2>
            <Typewriter
              options={{
                strings: ["Contact Me"],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </h2>
          <p className="contact-description">
            Get in touch with me through the form or find my location below.
          </p>
        </motion.div>

        {/* Contact Body */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="contact-body"
        >
          {/* Contact Left (Contact Information) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="contact-left"
          >
            <h3>Contact Information</h3>
            <p>
              <strong>Name:</strong> Kashif Ali
            </p>
            <p>
              <strong>Email:</strong> infokashifali786@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +92306-6590357
            </p>
          </motion.div>

          {/* Contact Right (Message Form) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="contact-right"
          >
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-group">
                <FaUser className="contact-icon" />
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder=" "
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="auth-input"
                />
                <label htmlFor="fullName" className="contact-label">
                  Full Name
                </label>
              </div>

              <div className="contact-form-group">
                <FaEnvelope className="contact-icon" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="auth-input"
                />
                <label htmlFor="email" className="contact-label">
                  Email
                </label>
              </div>

              <div className="contact-form-group">
                <FaPhoneAlt className="contact-icon" />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder=" "
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="auth-input"
                />
                <label htmlFor="phone" className="contact-label">
                  Phone
                </label>
              </div>

              <div className="contact-form-group">
                <textarea
                  name="message"
                  id="message"
                  placeholder=" "
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="auth-input"
                ></textarea>
                <label htmlFor="message" className="contact-label">
                  Message
                </label>
              </div>

              <button type="submit" className="contact-form-button">
                <FaPaperPlane className="contact-icon" /> Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Google Maps iframe for location */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="contact-map"
        >
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6802.7251044938475!2d74.3457071!3d31.5142009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190458505cf21b%3A0x41e671da20a40c8d!2sAl%20Lateef%20Center!5e0!3m2!1sen!2s!4v1731135194999!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
