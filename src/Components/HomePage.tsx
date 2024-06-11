import { motion } from "framer-motion";

function HomePage() {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.8} };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
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
          <div
            className=" shadow my-5 p-3 ">
            <motion.h1 variants={itemVariants} className="text-center text-light">Hello, </motion.h1>
            <motion.label  variants={itemVariants} className="mx-2 text-light">I am </motion.label>
            <motion.label variants={itemVariants}> Sarkheel Javed </motion.label>
            <motion.label variants={itemVariants} className="text-center text-light"> a computer scientist and a professional full-stack web developer having 1+ years of experience in web development. I work hard to produce high-quality results. Feel free to contact me if you have any questions. </motion.label>
          </div>
        </div>
         <div className="col-12 d-fex justify-content-center align-items-center">
          <div
            className=" shadow my-5 p-3 ">
            <motion.h1 variants={itemVariants} className="text-center text-light">Services </motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">Complete Mern Stack Web Application</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">Figma to Mern Stack Web App</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">Bug Fixing</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">Responsive Design</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">React Hooks</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">Redux Toolkit</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">Express js</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">Node  js</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">MongoDB</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">Material UI</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">High-Quality Website</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">HTML, CSS, JavaScript</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">Custom Styling</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">Complete react js frontend web app</motion.h1>
          </div>
        </div>
         <div className="col-12 d-fex justify-content-center align-items-center">
          <div
            className=" shadow my-5 p-3 ">
            <motion.h1 variants={itemVariants} className="text-center text-light">Why choose me? </motion.h1>
           
            <motion.h1 variants={itemVariants} className="text-start text-light">100% customer satisfaction</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">Responsive design</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">Well formatted code</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">Well structured code</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">Reusable components</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">High-Quality and Pixel Perfect Design</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">24/7 availability</motion.h1>
            <motion.h1 variants={itemVariants} className="text-start text-light">Excellent customer support</motion.h1>
          </div>
        </div>
      </div>
    </motion.div>
     
    </>
  
  );
}

export default HomePage;
