import Image from "next/image";
import styles from "./about-us.module.scss";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <h2 className="text-4xl md:text-6xl font-bold text-left pt-10 pl-10" style={{ color: "#0d0801" }} >
            About
      </h2><br />
      <div className="mx-auto lg:px-[188px] lg:pt-[50px] lg:pb-[32px] px-4 pt-[30px] pb-[32px]">
        <motion.div
          className="mx-auto max-w-[349px] max-h-[358px] py-[42px] mb-8"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Image
            alt="eth_icon"
            src={"/assets/svgs/2025/ETHAccra-LogoStar.svg"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </motion.div>
        <motion.p
          className={styles.mainText}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          ETHAccra brings together the pan-African blockchain community in a vibrant
          celebration of Ethereum’s open values—sparking innovation, fostering collaboration, and
          shaping the future of decentralized technology, from Accra to the world!

          <br /><br />
          <span className={styles.largeText}>
            Come for the hack. Stay for the vibes.
          </span><br /><br />
        </motion.p>
      </div>
    </div>
  );
};

export default AboutUsSection;
