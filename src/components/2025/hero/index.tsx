'use client';
import Image from "next/image";
import styles from "./hero.module.scss";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return null;

  return (
    <div id="hero-section" className="relative w-full h-screen overflow-hidden">
      <Image
        alt="background"
        src="/assets/pngs/2025/Background.png"
        fill
        priority
        className="object-cover z-1"
      />

      <div className="relative z-2 w-full h-full flex items-center">
        <div className={clsx(styles.heroContainer)}>
          <div className={styles.heroLeftContainer}>
            <motion.div
              className={styles.heroContentContainer}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <p className={clsx(styles.descriptionText)}>
                Come for the hack.
                <br />
                Stay for the vibes.
              </p><br/>

              <p className={clsx(styles.dateText, "mt-4")}>
                3RD – 6TH SEPTEMBER, 2025
              </p>

              <div className={styles.buttonContainer}>
                <a
                  href="https://dorahacks.io/hackathon/ethaccrahackathon2025/detail"
                  target="_blank"
                  className={clsx(styles.heroButton, "mt-6")}
                >
                  APPLY NOW
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;