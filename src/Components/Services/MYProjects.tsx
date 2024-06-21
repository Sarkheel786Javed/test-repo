import styles from "./myprojects.module.css";
function MYProjects() {
  return (
    <div className={styles.container_background}>
      <div className={styles.content_project}>
        <label
          className="text-light fw-bold fs-1 mt-3 border-bottom w-auto"
        >
          Projects
        </label>
        <div className="" style={{ height: "500px" }}></div>
      </div>
    </div>
  );
}

export default MYProjects;
