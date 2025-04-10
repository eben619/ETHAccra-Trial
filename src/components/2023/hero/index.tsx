import Image from "next/image";
import styles from "./hero.module.scss";
import clsx from "clsx";
import { motion } from "framer-motion";
import Navbar from "@/components/2023/Navbar";
import Link from "next/link";

const Hero2023 = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-white w-full lg:min-h-[auto] xl:min-h-auto">
        <div className={styles.heroContainer}>
          <div className="relative">
            <div className="flex flex-col items-center justify-center">
              <motion.h1
                className={clsx(styles.largeHeading, "mb-4")}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                ETHAccra
              </motion.h1>

              <div className="mb-8" />

              <motion.p
                className={clsx(styles.dateText)}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                SEPTEMBER 7-9 2023
              </motion.p>

              <div className="mb-5" />

              {/* <motion.p
                className={clsx(styles.descriptionText)}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                Come for the Hack - Stay for the Vibes.
              </motion.p> */}

              <div className="mb-8" />

              <div className="flex flex-col w-full md:w-auto px-4 lg:px-0 md:flex-row md:items-center gap-5 md:gap-10">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  <Link
                    // href="https://taikai.network/ethaccra/hackathons/hackathon2024"
                    href={'/'}
                    // target="_blank"
                    className={clsx(styles.heroButton, "relative z-10")}
                  >
                    Explore 2024 Hackathon
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_3095_804"
                        // style="mask-type:alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_3095_804)">
                        <path
                          d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  <a
                    // href="https://taikai.network/ethaccra/hackathons/hackathon2024"
                    href="mailto:info@ethaccra.xyz"
                    // target="_blank"
                    className={clsx(styles.heroButtonInverse, "relative z-10")}
                  >
                    Be a 2025 Sponsor
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_3095_809"
                        // style="mask-type:alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_3095_809)">
                        <path
                          d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                          fill="#803134"
                        />
                      </g>
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>

            <div className="hidden lg:block lg:absolute left-0 lg:left-[6.75rem] lg:top-40">
              <Image
                alt="eth_icon"
                src="/assets/svgs/2023/cloud-left.svg"
                width={122}
                height={94}
                priority
              />
            </div>

            <div className="hidden lg:block lg:absolute right-0 lg:right-[14.875rem] lg:top-24">
              <Image
                alt="eth_icon"
                src="/assets/svgs/2023/cloud-right.svg"
                width={122}
                height={94}
                priority
              />
            </div>

            <div className="hidden lg:block lg:absolute left-1/2 lg:left-[52.813rem] lg:-bottom-[9.625rem]">
              <Image
                alt="eth_icon"
                src="/assets/svgs/2023/cloud-bottom.svg"
                width={64}
                height={50}
                priority
              />
            </div>
          </div>
        </div>

        <motion.div
          className="lg:-mt-8"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Image
            alt="eth_icon"
            src="/assets/svgs/2023/hero.svg"
            width={1290}
            height={385}
            sizes="100vw"
            priority
            className="hidden md:block w-full h-auto object-contain"
          />

          <Image
            alt="eth_icon"
            src="/assets/svgs/2023/hero-mobile.svg"
            width={1290}
            height={385}
            sizes="100vw"
            priority
            className="-mt-16 md:hidden w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero2023;
