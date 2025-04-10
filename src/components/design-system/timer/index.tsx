import styles from "./timer.module.css";
import useCountdownTimer from "@/hooks/useCountdown";
import { motion } from "framer-motion";

const Timer = () => {
  const time = "August, 29, 2024 7:30:00";
  const { days, hours, minutes, seconds } = useCountdownTimer({ time });

  return (
    <motion.div
      className="flex gap-2.5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div>
        <h1 className={styles.time}>{days}</h1>
        <p className={styles.timeLabel}>Days</p>
      </div>

      <div className={styles.timeColon}>:</div>

      <div>
        <h1 className={styles.time}>{hours}</h1>
        <p className={styles.timeLabel}>Hours</p>
      </div>

      <div className={styles.timeColon}>:</div>

      <div>
        <h1 className={styles.time}>{minutes}</h1>
        <p className={styles.timeLabel}>Mins</p>
      </div>

      <div className={styles.timeColon}>:</div>

      <div>
        <h1 className={styles.time}>{seconds}</h1>
        <p className={styles.timeLabel}>Secs</p>
      </div>
    </motion.div>
  );
};

export default Timer;
