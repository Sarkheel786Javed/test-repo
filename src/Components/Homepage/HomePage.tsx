import { motion } from "framer-motion";
// import TypeScriptParticles from "./tsParticles";

function HomePage() {
  const fadeIn = (direction = "up", delay = 0) => {
    return {
      hidden: {
        opacity: 0,
        y: direction === "up" ? 50 : -50,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          delay: delay,
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    };
  };
  return (
    <div>
      <div
        className="w-100 h-100 position-absolute"
        style={{
          backgroundImage: "url('/Frame 1.png')",
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "color-dodge",
          transform: "translateZ(0)",
        }}
      ></div>
      {/* <TypeScriptParticles /> */}

      <motion.div 
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{duration:1, ease:"easeInOut"}}
      className="w-100 h-100 position-absolute"
      >
        <a href="/login" className="cursor-pointer fs-4">
          home
        </a>

      </motion.div>
    </div>
  );
}

export default HomePage;
