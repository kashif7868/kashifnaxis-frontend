import React, { useState, useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import '../assets/css/backgroundAnimation.css';

const BackgroundAnimation = () => {
  const [particleCount, setParticleCount] = useState(0);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine); // Initialize the slim particles engine
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
    if (container) {
      setParticleCount(container.particles.count); // Update the particle count when particles are loaded
    }
  }, []);

  return (
    <div className='backgroundAnimation'>
      {/* Particle background animation */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#333", // Background color
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#ff4f58", "#00d9e9", "#e9a100"], // Particle colors
            },
            links: {
              color: "#00d9e9", // Link color
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1, // Particle speed
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80, // Number of particles
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Particle count display */}
      <div className="count-particles">
        <span className="js-count-particles">{particleCount}</span> particles
      </div>
    </div>
  );
};

export default BackgroundAnimation;
