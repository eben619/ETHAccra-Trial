import Image from "next/image";
import clsx from "clsx";
import styles from "./hackathon-images-and-sponsors.module.scss";
import { motion } from "framer-motion";
import HeadingText from "./components/headingText";
import { goldSponsors, platinumSponsors, silverSponsors, supporters } from "./data/sponsorsData";

const HackathonSponsors = () => {
  return (
    <div className="bg-[#ffe9c9] md:px-[30px]">
      <div className="py-[72px]">
        <div className="md:w-full px-6 lg:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.h1
            className="sectionText"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            2024 Sponsors
          </motion.h1>
          <a
            className={clsx(styles.primaryLink, "text-white")}
            href="https://form.typeform.com/to/xKBpKRiz"
            target="_blank"
          >
            BECOME A SPONSOR
          </a>
        </div>
          <div className="mt-16"></div>

          <div role="divider" className="mt-[72px]"></div>

          <div>
            <div>
              <HeadingText text={"Platinum Sponsors"}></HeadingText>
              <div role="divider" className="mb-6"></div>
            </div>

            <div className={styles.imagesRow}>
              {platinumSponsors &&
                platinumSponsors.map((curr, idx) => {
                  return (
                    <a
                      target="_blank"
                      href={curr.url}
                      key={idx}
                      className={styles.imageCol}
                    >
                      <motion.div
                        className={clsx(
                          styles.platinumImageCover,
                          styles.scaleCover
                        )}
                        data-bgcolor={curr.name}
                        initial={{ y: 100 }}
                        whileInView={{ y: 0 }}
                        transition={{
                          duration: 0.1,
                          delay: 0,
                          ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-center z-10">
                          <Image
                            alt={`platinum-sponsor-${idx}`}
                            src={curr.imageUrl}
                            priority
                            width={240}
                            height={768}
                            className="w-auto h-auto"
                          />
                        </div>
                      </motion.div>
                    </a>
                  );
                })}
            </div>
          </div>

          <div role="divider" className="mt-[72px]"></div>

          <div className="">
            <div>
              <HeadingText text={"Gold Sponsors"}></HeadingText>
              <div role="divider" className="mb-6"></div>
            </div>

            <div className={styles.imagesRowGoldSponsors}>
              {goldSponsors &&
                goldSponsors.map((curr, idx) => {
                  return (
                    <a
                      href={curr.url}
                      target="_blank"
                      key={idx}
                      className={styles.imageColAlt}
                    >
                      <motion.div
                        className={clsx(
                          styles.goldImageCover,
                          styles.scaleCover
                        )}
                        initial={{ y: 100 }}
                        whileInView={{ y: 0 }}
                        transition={{
                          duration: 0.1,
                          delay: 0,
                          ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="items-center justify-center z-10">
                          <Image
                            alt={`gold-sponsor-${idx}`}
                            src={curr.imageUrl}
                            priority
                            width={240}
                            height={768}
                            className="w-auto h-auto"
                          />
                        </div>
                      </motion.div>
                    </a>
                  );
                })}
            </div>
          </div>

          <div role="divider" className="mt-[72px]"></div>

          <div>
            <div>
              <HeadingText text={"Silver Sponsors"}></HeadingText>
              <div role="divider" className="mb-6"></div>
            </div>

            <div className={clsx(styles.imagesRowSilverSponsors, "mx-auto max-w-5xl")}>
              {silverSponsors &&
                silverSponsors.map((curr, idx) => {
                  return (
                    <a
                      href={curr.url}
                      target="_blank"
                      key={idx}
                      className={styles.imageColAlt}
                    >
                      <motion.div
                        className={clsx(
                          styles.silverImageCover,
                          styles.scaleCover
                        )}
                        initial={{ y: 100 }}
                        whileInView={{ y: 0 }}
                        transition={{
                          duration: 0.1,
                          delay: 0,
                          ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="items-center justify-center z-10">
                          <Image
                            alt={`silver-sponsor-${idx}`}
                            src={curr.imageUrl}
                            priority
                            width={240}
                            height={768}
                            className="w-auto h-auto"
                          />
                        </div>
                      </motion.div>
                    </a>
                  );
                })}
            </div>
          </div>

          <div role="divider" className="mt-[72px]"></div>

          <div>
            <div>
              <HeadingText text={"Supporters"}></HeadingText>
              <div role="divider" className="mb-6"></div>
            </div>

            <div className={styles.imagesRowSupporters}>
              {supporters &&
                supporters.map((curr, idx) => {
                  return (
                    <a
                      href={curr.url}
                      target="_blank"
                      key={idx}
                      className={styles.imageColAlt}
                    >
                      <motion.div
                        className={clsx(
                          styles.sponsorsImageCover,
                          styles.scaleCover
                        )}
                        initial={{ y: 100 }}
                        whileInView={{ y: 0 }}
                        transition={{
                          duration: 0.1,
                          delay: 0,
                          ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="items-center justify-center z-10">
                          <Image
                            alt={`supporters-${idx}`}
                            src={curr.imageUrl}
                            priority
                            width={340}
                            height={768}
                            className="w-full h-auto"
                          />
                        </div>
                      </motion.div>
                    </a>
                  );
                })}
            </div>
          </div>

          <div id="about-us"></div>
        </div>
      </div>
    </div>
  );
};

export default HackathonSponsors;
