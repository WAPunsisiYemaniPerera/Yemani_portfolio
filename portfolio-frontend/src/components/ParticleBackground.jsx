import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticleBackground = () => {
  const options = useMemo(() => ({ /* ... options object is the same ... */ 
      background: { color: { value: "#0a192f" } },
      fpsLimit: 60,
      interactivity: { events: { onHover: { enable: true, mode: "repulse" } }, modes: { repulse: { distance: 100, duration: 0.4 } } },
      particles: {
        color: { value: "#ccd6f6" },
        links: { color: "#ccd6f6", distance: 150, enable: true, opacity: 0.2, width: 1 },
        move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: { value: 0.2 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }), []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      // className එක වෙනස් කළා
      className="fixed top-0 left-0 w-full h-full z-0"
    />
  );
};

export default ParticleBackground;