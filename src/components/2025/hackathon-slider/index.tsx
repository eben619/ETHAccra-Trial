import React from "react";
import styles from "./hackathon-slider.module.scss";
import Marquee from "react-fast-marquee";

const HackathonSlider = () => {
  return (
    <>
      <div className={styles.sliderContainer}>
        <Marquee>
            {
                [...new Array(5).fill(0)].map((_, idx) => {
                    return (
                        <div key={idx} className="flex gap-12 px-12">
                            <p className={styles.sliderText}>*</p>

                            <p className={styles.sliderText}>1200+ Hackers</p>

                            <p className={styles.sliderText}>32 Projects</p>
                        </div>
                    )
                })
            }
        </Marquee>
      </div>
    </>
  );
};

export default HackathonSlider;
