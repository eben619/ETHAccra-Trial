import Image from "next/image";
import styles from "./media-comm.module.scss";
import clsx from "clsx";
import { motion } from "framer-motion";

const mediaAndCommunityPartnersData = [
  {
    imageUrl: "/assets/svgs/media-and-community/new/ethBelgrade.svg",
    name: "",
    url: "https://twitter.com/ethbelgrade",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/ethBratislavia.svg",
    name: "",
    url: "https://twitter.com/ETH_Bratislava",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/web3Bridge.svg",
    name: "",
    url: "https://twitter.com/Web3Bridge",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/ethSafari.svg",
    name: "",
    url: "https://twitter.com/ETHSafari",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/ethPrague.svg",
    name: "",
    url: "https://twitter.com/EthPrague",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/ethNigeria.svg",
    name: "",
    url: "https://twitter.com/EthereumNigeria",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/napulEth.svg",
    name: "",
    url: "https://x.com/NapulETH",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/ethCostaRica.svg",
    name: "",
    url: "https://x.com/ethereumcr",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/divaloper.svg",
    name: "",
    url: "https://x.com/divaloper1",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/ethZambezi.svg",
    name: "",
    url: "https://x.com/ethzambezi",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/mowblox.svg",
    name: "",
    url: "https://x.com/mowblox",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/near.svg",
    name: "",
    url: "https://x.com/nearafrica_",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/ethRome.svg",
    name: "",
    url: "https://x.com/ethrome",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/ethArgentina.svg",
    name: "",
    url: "https://x.com/etherargentina",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/ethCapetown.svg",
    name: "",
    url: "https://x.com/ethcapetown",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/web3Ladies.svg",
    name: "",
    url: "https://x.com/web3ladies",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/python-ghana.svg",
    name: "",
    url: "https://x.com/pyghana",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/ethBucharest.svg",
    name: "",
    url: "https://x.com/ethbucharest_",
  },
  {
    imageUrl: "/assets/svgs/media-and-community/new/swiss-conf.svg",
    name: "",
    url: "https://www.eda.admin.ch/accra",
  },

  // {
  //   imageUrl: "/assets/pngs/web3bridge.png",
  //   name: "",
  //   url: "https://twitter.com/Web3Bridge",
  // },
  // {
  //   imageUrl: "/assets/pngs/streamETH.png",
  //   name: "",
  //   url: "https://twitter.com/streameth",
  // },
  // {
  //   imageUrl: "/assets/svgs/media-and-community/starknetAfrica.svg",
  //   name: "",
  //   url: "https://twitter.com/StarkNetAfrica",
  // },
  // {
  //   imageUrl: "/assets/pngs/devcongress.png",
  //   name: "",
  //   url: "https://twitter.com/DevCongress",
  // },
  // {
  //   imageUrl: "/assets/svgs/media-and-community/new/arweave.svg",
  //   name: "",
  //   url: "https://twitter.com/ArweaveAfrica",
  // },
  // {
  //   imageUrl: "/assets/pngs/Defi.png",
  //   name: "",
  //   url: "https://twitter.com/defiafrica",
  // },
  // {
  //   imageUrl: "/assets/svgs/media-and-community/new/afroblocks.svg",
  //   name: "",
  //   url: "https://twitter.com/Afroblocks",
  // },
  // {
  //   imageUrl: "/assets/pngs/ayagigs.png",
  //   name: "",
  //   url: "https://twitter.com/ayahq_",
  // },
  // {
  //   imageUrl: "/assets/pngs/unlock-logo.png",
  //   name: "",
  //   url: "https://twitter.com/UnlockProtocol",
  // },
  // {
  //   imageUrl: "/assets/pngs/bankless.png",
  //   name: "",
  //   url: "https://twitter.com/Sovereignfront",
  // },
];

const MediaAndCommunityPartnersSection = () => {
  return (
    <div className={styles.mainSection}>
      <div className="md:mx-auto md:w-8/12">
        <div className="mb-[60px]">
          <motion.h1
            className={styles.sectionHeaderText}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            2025 Community & Media Partners
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
                    transition={{ duration: 0.1, delay: 0, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  >
                    <a href={curr.url} target="_blank">
                      <Image
                        alt={`community-icon${idx}`}
                        src={curr.imageUrl}
                        priority
                        sizes="100vw"
                        width={195.316}
                        height={65.614}
                        className="w-auto h-full"
                      />
                    </a>
                  </motion.div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Anchor for FAQ */}
      <div id="faqs"></div>
    </div>
  );
};

export default MediaAndCommunityPartnersSection;
