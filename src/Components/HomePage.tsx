import { motion } from "framer-motion";

function HomePage() {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.8 } };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 2 } }}
        variants={{ visible: { transition: { staggerChildren: 0.8 } } }}
        className="container-fluid"
      >
        <div className="row">
          <div className="col-12 d-fex justify-content-center align-items-center">
            <div className=" shadow my-5 p-3 ">
              <motion.h1
                variants={itemVariants}
                className="text-center text-light"
              >
                Hello,{" "}
              </motion.h1>
              <motion.label variants={itemVariants} className="mx-2 text-light">
                I am{" "}
              </motion.label>
              <motion.label variants={itemVariants}>
                {" "}
                Sarkheel Javed{" "}
              </motion.label>
              <motion.label
                variants={itemVariants}
                className="text-center text-light"
              >
                {" "}
                a computer scientist and a professional full-stack web developer
                having 1+ years of experience in web development. I work hard to
                produce high-quality results. Feel free to contact me if you
                have any questions.{" "}
              </motion.label>
            </div>
          </div>
          <div className="col-12 d-fex justify-content-center align-items-center">
            <motion.h1
              variants={itemVariants}
              className="text-center text-light"
            >
              Services{" "}
            </motion.h1>
            <div className=" shadow my-5 p-3 ">
              <motion.div
                variants={itemVariants}
                className="d-flex flex-wrap justify-content-start align-items-start"
              >
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  Complete Mern Stack Web Application
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  Figma to Mern Stack Web App
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  Bug Fixing
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  Responsive Design
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  React Hooks
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  Redux Toolkit
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  Express js
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  Node js
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  MongoDB
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  Material UI
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  High-Quality Website
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  HTML, CSS, JavaScript
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  Custom Styling
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  Complete react js frontend web app
                </motion.label>
              </motion.div>
            </div>
          </div>
          <div className="col-12 d-fex justify-content-center align-items-center">
            <div className=" shadow my-5 p-3 ">
              <motion.h1
                variants={itemVariants}
                className="text-center text-light"
              >
                Why choose me?{" "}
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="d-flex flex-wrap justify-content-start align-items-start"
              >
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  100% customer satisfaction
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  Responsive design
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  Well formatted code
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  Well structured code
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  Reusable components
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  High-Quality and Pixel Perfect Design
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  24/7 availability
                </motion.label>
                <motion.label
                  variants={itemVariants}
                  className="text-start text-light border m-2 p-2 rounded-3 w-auto"
                >
                  Excellent customer support
                </motion.label>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default HomePage;
