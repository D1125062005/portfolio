import styles from "./Portfolio.module.css";

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>My Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop"
            alt="Web Development Project"
          />
          <p>Web Development</p>
        </div>
        <div className={styles.port_items}>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop"
            alt="Frontend Design Project"
          />
          <p>Frontend Design</p>
        </div>
        <div className={styles.port_items}>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop"
            alt="Data Analysis Dashboard Project"
          />
          <p>Data Dashboard</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;