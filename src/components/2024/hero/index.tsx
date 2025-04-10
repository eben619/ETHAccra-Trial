import Image from "next/image";
import styles from "./hero.module.scss";
import clsx from "clsx";
import { motion } from "framer-motion";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-[#F5F5DB] w-full">
        <div
          className={styles.heroContainer}
        >
          <div className={styles.heroLeftContainer}>
            <motion.h1 
              className={clsx(styles.largeHeading)}
              initial={{ y: -100, opacity: 0, }}
              whileInView={{ y: 0, opacity: 1, }}
              transition={{duration: 0.3, delay: 0, ease: "easeOut"}}
              viewport={{once: true}}
            >
              ETHAccra
            </motion.h1>

            <motion.p 
              className={clsx(styles.dateText, "mt-6")}
              initial={{ y: 100, opacity: 0, }}
              whileInView={{ y: 0, opacity: 1, }}
              transition={{duration: 0.3, delay: 0, ease: "easeInOut"}}
              viewport={{once: true}}
            >29 - 31 August 2024</motion.p>

            <motion.p 
              className={clsx(styles.descriptionText, "mt-4 mb-6 uppercase")}
              initial={{ y: 100, opacity: 0, }}
              whileInView={{ y: 0, opacity: 1, }}
              transition={{duration: 0.3, delay: 0, ease: "easeInOut"}}
              viewport={{once: true}}
            >
              Come for the Hack - Stay for the Vibes.
            </motion.p>

            <motion.div
              initial={{ y: 100, opacity: 0, }}
              whileInView={{ y: 0, opacity: 1, }}
              transition={{duration: 0.3, delay: 0, ease: "easeInOut"}}
              viewport={{once: true}}
            >
              <a 
                href="https://taikai.network/ethaccra/hackathons/hackathon2024"
                target="_blank"
                className={clsx(styles.heroButton, "relative z-10")}
              >
                Apply to Hack
              </a>
            </motion.div> 
          </div>

          <div className={styles.heroRightContainer}>
            <motion.div
              className="w-full h-full relative z-10"
              initial={{ y: 100, opacity: 0, }}
              whileInView={{ y: 0, opacity: 1, }}
              transition={{duration: 0.3, delay: 0, ease: "easeInOut"}}
              viewport={{once: true}}
            >
              <Image
                alt="eth_icon"
                src="/assets/svgs/ethAccraHero.svg"
                width={663}
                height={594}
                sizes="100vw"
                priority
                className="h-full"
                style={{ width: "100%", height: "auto", objectFit: 'contain' }}
              />
            </motion.div>
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-0 ">
          <Image
            alt="eth_icon"
            src="/assets/svgs/ethAccraHeroBottom.svg"
            width={0}
            height={0}
            sizes="100vw"
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
