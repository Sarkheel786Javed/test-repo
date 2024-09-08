import React, { ReactNode, useEffect, useState } from "react";
import Navbar from "../Components/navbar/Navbar";
import styles from './Layout.module.css'
import TypeScriptParticles from "../Components/Homepage/tsParticles";

interface LayoutProps {
  children: ReactNode;
}

const CursorCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hoveredElementName, setHoveredElementName] = useState("");

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setPosition({ x: event.clientX, y: event.clientY });
        // Get the element directly under the cursor
        const element = document.elementFromPoint(event.clientX, event.clientY) as HTMLElement;
        if (element) {
          setHoveredElementName(element.innerText || element.getAttribute('aria-label') || element.tagName);
        } else {
          setHoveredElementName("");
        }
    };

    const handleMouseOver = (event: any) => {
      const target = event.target as HTMLElement;
      if (target) {
        setHoveredElementName(target.innerText || target.getAttribute('aria-label') || target.tagName);
      }

      if (target && target.closest('a, button, [role="button"]')) {
        setHovered(true);
        setHoveredElementName(target.innerText || target.getAttribute('aria-label') || target.tagName);
      }

    };

    const handleMouseOut = (event:any) => {
      const target = event.target as HTMLElement;
      if (target && target.closest('a, button, [role="button"]')) {
        setHovered(false);
        setHoveredElementName("");
      }

    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const circleStyle: any = {
    circle: {
      position: 'fixed',
      top: position.y - 12, // Adjusted for smaller circle size
      left: position.x - 12, // Adjusted for smaller circle size
      width: '25px', // Smaller size
      height: '25px', // Smaller size
      borderRadius: '50px',
      border:  hovered ? "1px solid lightyellow" : "1px solid ", 
      boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      backgroundColor: hovered ? "purple" : 'transparent',
      pointerEvents: 'none',
      zIndex: "100"
    },
    text: {
      position: 'fixed',
      top: position.y + 15, // Adjusted for smaller circle size
      left: position.x - 50, // Adjusted for smaller circle size
      width: 'auto',
      textAlign: 'center',
      color: 'black',
      backgroundColor: 'white',
      borderRadius: '5px',
      padding: '2px',
      pointerEvents: 'none',
      zIndex: "101"
    }
  };

  return (
    <>
      <div style={circleStyle.circle} />
      {hoveredElementName && <div style={circleStyle.text}>
        {/* {hoveredElementName} */}
        </div>}
    </>
  )
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={` ${styles.layout_container}`}>
      <TypeScriptParticles />
      <CursorCircle />
      <div className={styles.Children_Height}>
        <div>
          <div className="switch-handle">
            {children}
          </div>
        </div>
      </div>
      <div className={styles.navbar_pages}>
        <Navbar />
      </div>
    </div>
  );
};

export default Layout;
