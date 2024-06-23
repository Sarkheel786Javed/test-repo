import styles from "./myprojects.module.css";
function MYProjects() {
  return (
    <div className={styles.container_background}>
      <div
        className={`d-flex justify-content-center align-items-center ${styles.content_project}`}
      >
        <div className="w-100 p-5">
          <label className="text-light fw-bold fs-1 mt-3 border-bottom w-auto">
            Projects
          </label>
          <div className="border container-fluid">
            <div className="row">
              <div
                className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3 p-5 "
                style={{ height: "500px" }}
              >
                <div
                  className={` ${styles.project_img}`}
                  style={{ height: "200px" }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/FYvXzdAIJuc"
                    title="Advanced React Query Tutorial - Part 2: Mastering Server-State Management"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
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
