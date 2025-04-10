import Image from "next/image";
import styles from "./last-years-speakers.module.scss";
import { motion } from "framer-motion";
import clsx from "clsx";
import { speakers } from "./data/speakers";

const LastYearSpeakers = () => {
  return (
    <div>
      <div className={styles.sectionContainer}>
        <div className="flex flex-col items-center justify-center gap-8 mb-[70px]">
          <motion.h1
            className="sectionText"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            Speakers, Judges & Mentors
          </motion.h1>
        </div>

        <div className={styles.speakerLayout}>
          {speakers &&
            speakers.map((curr, idx) => {
              return (
                <motion.div
                  key={idx}
                  className={styles.item}
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.1, delay: 0, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
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
                      <h1 className={styles.nameText}>{curr.name}</h1>

                      <div className="flex items-center justify-between">
                        <a
                          href={curr.affiliationTwitterUrl}
                          target="_blank"
                          className={styles.affiliationText}
                        >
                          {curr.affiliation}
                        </a>
                        <div
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
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>

        {/* Anchor tag for the media partners page */}
        <div id="media-partners"></div>
      </div>
    </div>
  );
};

export default LastYearSpeakers;
