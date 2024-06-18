import { motion } from "framer-motion";
import styles from "./HomePage.module.css";
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

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-100 h-100 position-absolute"
      >
        <div className="">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={0}
                style={{ height: "20px", width: "20px" }}
                className=" rounded-2 active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={1}
                style={{ height: "20px", width: "20px" }}
                className=" rounded-2"
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={2}
                style={{ height: "20px", width: "20px" }}
                className=" rounded-2"
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ height: "80vh" }}>
                <div
                  className={`d-flex justify-content-center align-items-center h-100 ${styles.header_content}`}
                >
                  <div className="w-100 p-5">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-6">
                          <h1 className="text-light fw-bold text-light">
                            I'm a 
                            <span className="text-warning mx-2">
                              web 
                              <br/>
                              Developer & Designer
                              <br/>
                              </span> 
                              based 
                              in
                              Pakistan
                          </h1>
                          <p>
                            <div className="d-flex flex-wrap justify-content-start align-items-center gap-5">
                              <button className="mt-3 btn btn-warning text-light cursor-pointer">
                                HIRE ME
                                </button>
                              <button className="mt-3 btn btn-outline-dark text-light cursor-pointer">
                                My Works
                                </button>
                                </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{ height: "80vh" }}>
                <div
                  className={`d-flex justify-content-center align-items-center h-100 ${styles.header_content}`}
                >
                  <div className="w-100 p-5">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-6">
                          <h1 className="text-light fw-bold text-light">
                            I'm a 
                            <span className="text-warning mx-2">
                              web 
                              <br/>
                              Developer & Designer
                              <br/>
                              </span> 
                              based 
                              in
                              Pakistan
                          </h1>
                          <p>
                            <div className="d-flex flex-wrap justify-content-start align-items-center gap-5">
                              <button className="mt-3 btn btn-warning text-light cursor-pointer">
                                HIRE ME
                                </button>
                              <button className="mt-3 btn btn-outline-dark text-light cursor-pointer">
                                My Works
                                </button>
                                </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{ height: "80vh" }}>
                <div
                  className={`d-flex justify-content-center align-items-center h-100 ${styles.header_content}`}
                >
                  <div className="w-100 p-5">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-6">
                          <h1 className="text-light fw-bold text-light">
                            I'm a 
                            <span className="text-warning mx-2">
                              web 
                              <br/>
                              Developer & Designer
                              <br/>
                              </span> 
                              based 
                              in
                              Pakistan
                          </h1>
                          <p>
                            <div className="d-flex flex-wrap justify-content-start align-items-center gap-5">
                              <button className="mt-3 btn btn-warning text-light cursor-pointer">
                                HIRE ME
                                </button>
                              <button className="mt-3 btn btn-outline-dark text-light cursor-pointer">
                                My Works
                                </button>
                                </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HomePage;
