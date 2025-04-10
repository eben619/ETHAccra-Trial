import React from "react";
import Image from "next/image";
import styles from "./footer-section.module.scss";
import clsx from "clsx";
import { motion } from "framer-motion";

const FooterSection2023 = () => {
  return (
    <div className={styles.footerSectionContainer}>
      <div className="relative">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 lg:gap-[10.6565rem]">
            <div className="w-full lg:w-5/12 flex flex-col lg:flex-row gap-10">
                <div className="flex items-center justify-center lg:block">
                    <Image
                        alt="eth_icon"
                        src={"/assets/svgs/2023/footer-logo.svg"}
                        width={68.13}
                        height={99.78}
                        priority
                        className="w-auto h-auto"
                    />
                </div>

                <div>
                    <p className={styles.socialMediaHeadingText}>Follow us on social media</p>

                    <div className="mb-10" />
                    
                    <motion.div
                        id="contactUs"
                        className=" flex justify-center items-center gap-8"
                        initial={{ y: 100 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.1, delay: 0, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    >
                        <a
                            href="https://t.me/+7ClMFsYpii05NGQ0"
                            target="_blank"
                            className={styles.footerImageLinks}
                        >
                            <Image
                                alt="eth_icon"
                                src={"/assets/svgs/2023/telegram-footer.svg"}
                                width={68.13}
                                height={99.78}
                                sizes="100vw"
                                priority
                                style={{ width: "100%", height: "auto", }}
                            />
                        </a>

                        <a
                        href="https://twitter.com/ETHAccra"
                        target="_blank"
                        className={styles.footerImageLinks}
                        >
                            <Image
                                alt="eth_icon"
                                src={"/assets/svgs/2023/x-footer.svg"}
                                width={68.13}
                                height={99.78}
                                sizes="100vw"
                                priority
                                style={{ width: "100%", height: "auto", }}
                            />
                        </a>

                        <a
                        href="mailto:info@ethaccra.xyz"
                        className={styles.footerImageLinks}
                        >
                            <Image
                                alt="eth_icon"
                                src={"/assets/svgs/2023/mail-footer.svg"}
                                width={68.13}
                                height={99.78}
                                sizes="100vw"
                                priority
                                style={{ width: "100%", height: "auto", }}
                            />
                        </a>
                    </motion.div>
                </div>
            </div>

            <div className="w-full lg:w-7/12">
              <motion.div
                className={styles.quickLinksContainer}
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.1, delay: 0, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <div className={styles.quickLinksLayout}>
                  <div className="w-full md:w-6/12 lg:w-7/12 flex items-center md:items-start flex-col gap-y-10">
                    <a href="#about-us" className={styles.quickLinksText}>
                      About us
                    </a>
                    <a
                      href="mailto:info@ethaccra.xyz"
                      className={styles.quickLinksText}
                    >
                      Contact us
                    </a>
                    {/* <a
                      href="https://taikai.network/ethaccra/hackathons/hackathon2023"
                      className={clsx(styles.quickLinksText)}
                    >
                      2023 Hackathon Schedule
                    </a> */}
                    <a
                      href="https://taikai.network/ethaccra/hackathons/hackathon2023"
                      className={clsx(styles.quickLinksText)}
                    >
                      2023 Projects
                    </a>
                  </div>

                  <div className="w-full md:w-6/12 lg:w-4/12 flex items-center md:items-start flex-col gap-y-10">
                    <a href="#faq" className={styles.quickLinksText}>
                      FAQ’s
                    </a>

                    <a
                      href="#gallery"
                      className={clsx(styles.quickLinksText)}
                    >
                      Gallery
                    </a>

                    {/* <a
                      href="https://taikai.network/ethaccra/hackathons/hackathon2023"
                      className={clsx(styles.quickLinksText)}
                    >
                      2023 Projects
                    </a> */}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection2023;
