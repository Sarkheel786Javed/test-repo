import { Link } from "react-router-dom";
import styles from "./myprojects.module.css";
import { useState } from "react";
function MYProjects() {
  const Project_List = [
    {
      image: "/5467426_1720.jpg",
      name: "Project 1",
      link:"/"
    },
    {
      image: "/10276612_4421964.jpg",
      name: "Project 2",
      link:"/"
    },
    {
      image: "/5467426_1720.jpg",
      name: "Project 3",
      link:"/"
    },
    {
      image: "slideshow1.jpg",
      name: "Project 4",
      link:"/"
    },
    {
      image: "/slideshow2.jpg",
      name: "Project 5",
      link:"/"
    },
    {
      image: "/slideshow3.jpg",
      name: "Project 6",
      link:"/"
    },
    {
      image: "/slideshow4.jpg",
      name: "Project 7",
      link:"/"
    },
  ];
  const [img, setImg] = useState<string>(`${Project_List[0].image}`);
  const handle_Project_image = (imagePath: string) => {
    setImg(imagePath);
  };
  return (
    <div className={styles.container_background}>
      <div
        className={`d-flex justify-content-center align-items-center ${styles.content_project}`}
      >
        <div className="w-100 p-5">
          <label className="text-light fw-bold fs-1 mt-3 border-bottom w-auto">
            Projects
          </label>
          <div className="border container-fluid mt-3">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12 p-2 d-flex justify-content-center">
                <div className="w-100 d-sm-block d-lg-flex justify-content-satrt">
                  <div className="w-50">
                    <img
                      src={`${img}`}
                      alt="..."
                      width="100%"
                      height="220px"
                    />
                  </div>
                  <div className="w-50 ">
                    <div className="d-flex justify-content-between align-items-center">
                       <h3 className={` ${styles.text}`}>
                      <Link to="/" className={`mx-2 ${styles.home_Link}`}>
                        Portfolio
                      </Link>
                    </h3>
                    <label className="text-light">Total:{Project_List.length}</label>
                    </div>
                   
                    <section className={`mx-2 text-start ${styles.project_name}`} >
                      {Project_List.map((project) => (
                        <Link to={`${project.link}`} className="text-decoration-none" style={{color:"white"}}>
                          <span
                            className="fw-bold "
                            onMouseEnter={() =>
                              handle_Project_image(`${project.image}`)
                            }
                          >
                            {project.name}
                          </span>
                          <br />
                        </Link>
                      ))}
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MYProjects;
