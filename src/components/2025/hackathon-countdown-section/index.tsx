import React from "react";
import styles from "./hackathon-countdown-section.module.scss";

const HackathonCountdownSection = () => {
  return (
    <section className={styles.hackathonSectionMain}>
      <div className={styles.innerContainer}>
        <div>
          <h2 className={styles.cashPrizeText}>USD 20,000</h2>
          <p className={styles.cashPrizeSupportingText}>& more in prizes</p>
        </div>
        <div>
          <p className={styles.hackathonCountdownText}>
            ETHAccra – premier Ethereum hackathon in the heart of West Africa. Created by builders, for builders.
            Through events, workshops, and a strong network, ETHAccra is building a vibrant ecosystem that supports
            new ideas and collaboration. Join us as we work towards a more inclusive and decentralized future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HackathonCountdownSection;
