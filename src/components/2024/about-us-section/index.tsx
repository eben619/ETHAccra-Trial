import Image from "next/image";
import styles from "./about-us.module.scss";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className="mx-auto lg:px-[188px] lg:pt-[72px] lg:pb-[32px] px-4 pt-[72px] pb-[32px]">
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
          <br />
          <span className="uppercase">
            Come for the hack - Stay for the vibes.
          </span>
        </motion.p>

        <motion.div
          className="mx-auto max-w-[349px] max-h-[358px] py-[42px]"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Image
            alt="eth_icon"
            src={"/assets/svgs/aboutUsEthAccraNew.svg"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsSection;
