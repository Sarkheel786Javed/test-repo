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
          duration: 0.8,
          ease: "easeInOut",
        },
      },
    };
  };

  export default fadeIn