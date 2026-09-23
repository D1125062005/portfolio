import styles from "./Number.module.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Number() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className={styles.number_con} ref={ref}>
      <div className={styles.number_items}>
        <h3>
          {inView ? <CountUp start={0} end={100} duration={3} /> : "0"}+
        </h3>
        <p>Project Completed</p>
      </div>

      <div className={styles.number_items}>
        <h3>
          {inView ? <CountUp start={0} end={50} duration={3} /> : "0"}+
        </h3>
        <p>Satisfied Clients</p>
      </div>

      <div className={styles.number_items}>
        <h3>
          {inView ? <CountUp start={0} end={10} duration={3} /> : "0"}+
        </h3>
        <p>Years of Experience</p>
      </div>
    </div>
  );
}

export default Number;