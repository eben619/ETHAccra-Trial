import Image from "next/image";
import styles from "./media-comm.module.scss";
import clsx from "clsx";
import { motion } from "framer-motion";

const mediaAndCommunityPartnersData = [
  {
    imageUrl: "/assets/svgs/2023/media-and-community/bankless.svg",
    name: "",
    url: "https://twitter.com/Sovereignfront",
  },
  {
    imageUrl: "/assets/svgs/2023/media-and-community/afroblocks.svg",
    name: "",
    url: "https://twitter.com/Afroblocks",
  },
  {
    imageUrl: "/assets/svgs/2023/media-and-community/web3bridge.svg",
    name: "",
    url: "https://twitter.com/Web3Bridge",
  },
  {
    imageUrl: "/assets/svgs/2023/media-and-community/defi-africa.svg",
    name: "",
    url: "https://twitter.com/defiafrica",
  },
  {
    imageUrl: "/assets/svgs/2023/media-and-community/web3afrika.svg",
    name: "",
    url: "https://twitter.com/web3afrika",
  },

  {
    imageUrl: "/assets/svgs/2023/media-and-community/ayagigs.svg",
    name: "",
    url: "https://twitter.com/ayahq_",
  },
  {
    imageUrl: "/assets/svgs/2023/media-and-community/streamEth.svg",
    name: "",
    url: "https://twitter.com/streameth",
  },
  {
    imageUrl: "/assets/svgs/2023/media-and-community/devcongress.svg",
    name: "",
    url: "https://twitter.com/DevCongress",
  },
  {
    imageUrl: "/assets/svgs/2023/media-and-community/unlock.svg",
    name: "",
    url: "https://twitter.com/UnlockProtocol",
  },

  {
    imageUrl: "/assets/svgs/2023/media-and-community/arweave.svg",
    name: "",
    url: "https://twitter.com/ArweaveAfrica",
  },
  {
    imageUrl: "/assets/svgs/2023/media-and-community/starknetAfrica.svg",
    name: "",
    url: "https://twitter.com/StarkNetAfrica",
  },
];

const MediaAndCommunityPartnersSection2023 = () => {
  return (
    <>
      <div className={styles.mainSection}>
        <div className="md:mx-auto">
          <div className="mb-[3.5rem]">
            <motion.h1
              className={styles.sectionHeaderText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              Community Partners
            </motion.h1>
          </div>

          <div className={styles.imagesRow}>
            {mediaAndCommunityPartnersData &&
              mediaAndCommunityPartnersData.map((curr, idx) => {
                return (
                  <div key={idx} className={styles.imageCol}>
                    <motion.div
                      className={clsx(styles.imageCover)}
                      initial={{ y: 100 }}
                      whileInView={{ y: 0 }}
                      transition={{
                        duration: 0.1,
                        delay: 0,
                        ease: "easeInOut",
                      }}
                      viewport={{ once: true }}
                    >
                      <a href={curr.url} target="_blank">
                        <Image
                          alt={`community-icon${idx}`}
                          src={curr.imageUrl}
                          priority
                          sizes="100vw"
                          width={245.45}
                          height={100}
                          className="w-auto h-full object-cover"
                        />
                      </a>
                    </motion.div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Anchor tag for the about us */}
        <div id="about-us"></div>
      </div>
    </>
  );
};

export default MediaAndCommunityPartnersSection2023;
