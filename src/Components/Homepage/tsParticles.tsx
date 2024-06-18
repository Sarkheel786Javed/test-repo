import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
function TypeScriptParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <>
      <div>
        {init && (
          <Particles
          id="tsparticles"
          className="particles-background"
          options={{
            background: {
              color: {
                value: "",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 50,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 50,
                },
                repulse: {
                  distance: 50,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#2292A4",
              },
              links: {
                color: "#0F0A0A",
                distance: 200,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 300,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        )}
      </div>
    </>
  );
}

export default TypeScriptParticles;