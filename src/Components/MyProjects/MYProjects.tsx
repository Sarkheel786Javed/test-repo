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
          <div className="border container-fluid mt-3">
            <div className="row">
              <div
                className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3 p-5 ">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MYProjects;
