import Image from "next/image";
import styles from "./2023-speakers.module.scss";
import { motion } from "framer-motion";
import clsx from "clsx";
import { speakers } from "./data/speakers";

const Speakers2023 = () => {
  return (
    <div>
      <div className={styles.sectionContainer}>
        <div className="flex flex-col items-center justify-center gap-8 mb-[4.375rem]">
          <motion.h1
            className={styles.headingText}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            2023 Speakers
          </motion.h1>
        </div>

        <div className={styles.speakerLayout}>
          {speakers &&
            speakers.map((curr, idx) => {
              return (
                <motion.div
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.1, delay: 0, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className={styles.item}
                  key={idx}
                >
                  <div className={styles.itemMainSection}>
                    <div className={styles.card}>
                      <div className={styles.imageContainer}>
                        <Image
                          alt={`image-${curr.name}`}
                          src={curr.imageUrl}
                          width={340}
                          height={303}
                          sizes="100vw"
                          className={styles.imageStyles}
                        />
                      </div>

                      <div className="p-4">
                        <h1 className={clsx(styles.nameText, "text-center")}>
                          {curr.name}
                        </h1>

                        <div className="flex items-center justify-center">
                          <a
                            href={curr.affiliationTwitterUrl}
                            target="_blank"
                            className={styles.affiliationText}
                          >
                            {curr.affiliation}
                          </a>
                          {/* <div
                            className={clsx(`flex items-center`, {
                              "gap-2": Object.keys(curr.socials).length > 1,
                            })}
                          >
                            {curr.socials.linkedin && (
                              <a href={curr.socials.linkedin} target="_blank">
                                <Image
                                  src={"/assets/svgs/linkedin_yellow.svg"}
                                  width={24}
                                  height={24}
                                  alt="telegram_icon"
                                ></Image>
                              </a>
                            )}

                            {curr.socials.x && (
                              <a href={curr.socials.x} target="_blank">
                                <Image
                                  src={"/assets/svgs/x_yellow.svg"}
                                  width={24}
                                  height={24}
                                  alt="x_icon"
                                ></Image>
                              </a>
                            )}
                          </div> */}
                        </div>
                      </div>
                    </div>

                    <div className={styles.itemSocials}>
                      <div
                        className={clsx(
                          `flex items-center justify-center h-full`,
                          {
                            "gap-2": Object.keys(curr.socials).length > 1,
                          }
                        )}
                      >
                        {curr.socials.linkedin && (
                          <a href={curr.socials.linkedin} target="_blank">
                            <Image
                              src={"/assets/svgs/linkedin_yellow.svg"}
                              width={24}
                              height={24}
                              alt="telegram_icon"
                            ></Image>
                          </a>
                        )}

                        {curr.socials.x && (
                          <a href={curr.socials.x} target="_blank">
                            <Image
                              src={"/assets/svgs/x_yellow.svg"}
                              width={24}
                              height={24}
                              alt="x_icon"
                            ></Image>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>

        {/* Anchor tag for the faq section */}
        <div id="faq"></div>
      </div>
    </div>
  );
};

export default Speakers2023;
