import React, { ReactNode } from "react";
import Navbar from "../Components/navbar/Navbar";
import { motion } from "framer-motion";
import styles from './Layout.module.css'
import TypeScriptParticles from "../Components/Homepage/tsParticles";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (

    <div
      className={styles.layout_container}>
      <TypeScriptParticles />

      <div className={styles.Children_Height} >
        <div>
          <motion.div className="switch-handle" layout>
            {children}
          </motion.div>
        </div>
      </div>

      <div className={styles.navbar_pages} >
        <Navbar />
      </div>
    </div>
  );
};

export default Layout;
