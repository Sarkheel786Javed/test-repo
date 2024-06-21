import { motion } from "framer-motion";
import styles from "./HomePage.module.css";
import fadeIn from "../StyleFunctions/StylingFunctions";
import Services from '../Services/JobServices.tsx'
import MYProjects from '../Services/MYProjects'
function HomePage() {
  return (
    <div>
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-100 h-100  pb-5"
      >
        <div className={styles.contents_header}>
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
              {/* <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={2}
                style={{ height: "20px", width: "20px" }}
                className=" rounded-2"
                aria-label="Slide 3"
              /> */}
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ height: "90vh" }}>
                <div
                  className={`d-flex justify-content-center align-items-center h-100 ${styles.header_content}`}
                >
                  <div className="w-100 p-2">
                    <div className={`${styles.slider_cover}`}>
                      <div className={` ${styles.Content_Side}`}>
                        <div className="w-100">
                          <h1 className="text-light fw-bold text-light">
                            I'm
                            <span className="text-warning mx-2">
                              <br />
                              Sarkheel Javed
                              <br />
                            </span>
                            Mernstack
                            <br />
                            Developer
                          </h1>
                          <p>
                            <div className="d-flex flex-wrap justify-content-start align-items-center gap-3">
                              <button
                                className={`mt-2 mb-0 cursor-pointer ${styles.hire_button}`}
                              >
                                HIRE ME
                              </button>
                              <button
                                className={`mt-2 mb-0 btn btn-outline-dark text-light cursor-pointer ${styles.my_work}`}
                              >
                                My Works
                              </button>
                            </div>
                          </p>
                        </div>
                      </div>
                      <div className={`${styles.background_Image}`}>
                        <div>
                          <img src="/images/file (3).png" alt="..." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{ height: "90vh" }}>
                <div
                  className={`d-flex justify-content-center align-items-center h-100 ${styles.header_content}`}
                >
                  <div className="w-100 p-2">
                    <div className={`${styles.slider_cover}`}>
                      <div className={` ${styles.Content_Side}`}>
                        <div className="w-100">
                          <h1 className="text-light fw-bold text-light">
                            I'm a
                            <span className="text-warning mx-2">
                              web
                              <br />
                              Developer & Designer
                              <br />
                            </span>
                            based in Pakistan
                          </h1>
                          <p>
                            <div className="d-flex flex-wrap justify-content-start align-items-center gap-3">
                              <button
                                className={`mt-2 mb-0 cursor-pointer ${styles.hire_button}`}
                              >
                                HIRE ME
                              </button>
                              <button
                                className={`mt-2 mb-0 btn btn-outline-dark text-light cursor-pointer ${styles.my_work}`}
                              >
                                My Works
                              </button>
                            </div>
                          </p>
                        </div>
                      </div>
                      <div className={`${styles.background_Image}`}>
                        <div>
                          <img src="/images/file (3).png" alt="..." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="carousel-item" style={{ height: "90vh" }}>
                <div
                  className={`d-flex justify-content-center align-items-center h-100 ${styles.header_content}`}
                >
                  <div className="w-100 p-2">
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
                            <div className="d-flex flex-wrap justify-content-start align-items-center gap-3">
                              <button className={`mt-2 mb-0 cursor-pointer ${styles.hire_button}`}>
                                HIRE ME
                                </button>
                              <button className={`mt-3 btn btn-outline-dark text-light cursor-pointer ${styles.my_work}`}>
                                My Works
                                mt-2 mb-0tton>
                                </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
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
      <div className={`my-5 ${styles.bg}`}>
          <div className="text-center">
            <label className="text-light fw-bold fs-1 mt-3 border-bottom w-auto">Services</label>
            <Services/>
          </div>
        </div>
      <div className={`my-5 `}>
          <div className="text-center">
            <MYProjects/>
          </div>
        </div>
    </div>
  );
}

export default HomePage;
