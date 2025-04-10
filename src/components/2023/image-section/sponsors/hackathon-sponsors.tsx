import Image from "next/image";
import styles from "./sponsors.styles.module.scss";
import { motion } from "framer-motion";
import { hackathonSponsorsData } from "../data/sponsorsData";

const HackathonSponsors2023 = () => {
  return (
    <div className="bg-white md:px-[1.875rem]">
      <div className="pb-[4.5rem] max-w-[76.875rem] mx-auto">
        <div className="md:w-full px-6 lg:px-0">
          <div className="flex flex-col items-center justify-center gap-8">
            <motion.h1
              className={styles.headingText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              2023 Sponsors
            </motion.h1>
          </div>

          <div className="mb-[3.5rem]" />

          <div>
            <div className={styles.imagesRow}>
              {hackathonSponsorsData &&
                hackathonSponsorsData.map((curr, idx) => {
                  return (
                    <a
                      target="_blank"
                      href={curr.url}
                      key={idx}
                      className={styles.imageCol}
                    >
                      <div className="flex items-center justify-center">
                        <Image
                          alt={`sponsor-${idx}`}
                          src={curr.imageUrl}
                          priority
                          width={334}
                          height={138}
                          className="w-auto h-auto"
                        />
                      </div>
                    </a>
                  );
                })}
            </div>
          </div>

          {/* the anchor tag for speakers */}
          <div id="speakers"></div>
        </div>
      </div>
    </div>
  );
};

export default HackathonSponsors2023;
