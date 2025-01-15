    {/* Section 2: Projects Gallery */}
    <section className="projects-container">
    <h2>My Projects</h2>
    <div className="project-gallery">
      <div className="project-item">
        <img src="path/to/project1.jpg" alt="Project 1" />
        <p>Project 1 Description</p>
      </div>
      <div className="project-item">
        <img src="path/to/project2.jpg" alt="Project 2" />
        <p>Project 2 Description</p>
      </div>
      {/* Add more project items as needed */}
    </div>
  </section>

  {/* Section 3: Skills */}
  <section className="skills-container">
    <h2>My Skills</h2>
    <div className="skills-icons">
      <FaReact className="skill-icon" />
      <FaNode className="skill-icon" />
      <FaHtml5 className="skill-icon" />
      <FaCss3Alt className="skill-icon" />
      <FaGithub className="skill-icon" />
      <FaDatabase className="skill-icon" />
    </div>
  </section>

  {/* Section 4: Contact */}
  <section className="contact-container">
    <h2>Contact Me</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>

  {/* Section 5: About */}
  <section className="about-container">
    <h2>About Me</h2>
    <p>
      I am a full-stack developer with expertise in building scalable web
      applications using the MERN stack. I have a passion for learning new
      technologies and creating efficient, user-friendly solutions.
    </p>
  </section>

  {/* Section 6: Testimonials */}
  <section className="testimonials-container">
    <h2>What Others Say</h2>
    <div className="testimonial-item">
      <p>
        "Kashif is an excellent developer. His ability to solve complex
        problems with ease is impressive." - Client Name
      </p>
    </div>
    <div className="testimonial-item">
      <p>
        "I highly recommend Kashif for any web development project. He
        delivers on time and exceeds expectations." - Client Name
      </p>
    </div>
  </section>