import Image from "next/image";
import styles from "./about-us.module.scss";
import { motion } from "framer-motion";

const AboutUsSection2023 = () => {
  return (
    <div id="about-us" className={styles.sectionContainer}>
      <div className="mx-auto lg:px-[188px] lg:pt-[72px] lg:pb-[32px] px-4 pt-[72px] pb-[32px]">
        <h1 className={styles.headingText}>About ETHAccra</h1>
        <div className="mb-10 lg:mb-[3.25rem]" />
        <motion.p
          className={styles.mainText}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          ETHAccra is an active and inclusive community in Ghana, West Africa,
          bringing together developers, researchers, designers, and newcomers
          interested in web3 and blockchain technologies. We believe that Accra
          and its surrounding areas have the potential to be the hub for great
          ideas and the driver of the Ethereum-driven ethos in West Africa.
          {/* <br /> */}
          {/* <span className="font-semibold">
            Come for the hack - Stay for the vibes.
          </span> */}
        </motion.p>
      </div>

      {/* anchor for hackathon video */}
      <div id="eth-hackathon-video"></div>
    </div>
  );
};

export default AboutUsSection2023;
