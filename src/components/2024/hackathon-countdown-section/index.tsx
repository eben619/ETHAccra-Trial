import Image from "next/image";
import Timer from "@/components/design-system/timer";
import styles from "./hackathon-countdown-section.module.scss";
import clsx from "clsx";
import { motion } from "framer-motion";

const HackathonCountdownSection = () => {
  return (
    <>
      <div className="bg-[#F5F5DB] relative z-10 -mt-1.5 md:-mt-3 lg:-mt-3">
        <div className="">
          <div className="hidden lg:block">
            <Image
              alt="eth_icon"
              src="/assets/svgs/grid.svg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div className="lg:hidden">
            <Image
              alt="eth_icon"
              src="/assets/svgs/grid-mobile.svg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        <div>
          <div className={clsx(styles.hackathonSectionMain, "relative")}>
            <div className="px-4 md:px-0">
              <div className="max-w-[918px] mx-auto">
                <div className="mb-16">
                  <h1 className={styles.cashPrizeText}>USD 20,000</h1>
                  <div className="mt-4 lg:mt-0" />
                  <p className={styles.cashPrizeSupportingText}>
                    & more in prizes
                  </p>
                </div>

                <motion.p
                  className={styles.hackathonCountdownText}
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.1, delay: 0, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  {/* In view of the fact that ETHAccra 2024 will be held in Accra, we
                  want to rally the community together and support developers in
                  Accra and Africa. This year&apos;s event comes off on the 29th
                  through to 31st August, 2024, at ISSER Seminar Hall, University of
                  Ghana, Legon. */}
                  ETHAccra - premier Ethereum hackathon in the heart of West
                  Africa. Created by builders, for builders.Through events,
                  workshops, and a strong network, ETHAccra is building a
                  vibrant ecosystem that supports new ideas and collaboration.
                  Join us as we work towards a more inclusive and decentralized
                  future.
                </motion.p>

                {/* <div className="flex items-center justify-center mt-11 mb-4 lg:mt-[64.97px] lg:mb-[70.83px]">
                  <Timer />
                </div> */}

                <motion.div
                  className="relative z-10 mx-auto max-w-[626.716px] max-h-[494px] lg:mt-5"
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.1, delay: 0, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  <Image
                    alt="eth_icon"
                    src="/assets/svgs/universityOfGhana.svg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Anchor tag for the sponsors page */}
            <div id="sponsors"></div>

            {/* divs for the images on this hackaton timer section */}
            <div className="">
              <div className="-mt-10 opacity-30 hidden lg:block">
                <Image
                  alt="eth_icon"
                  src="/assets/svgs/grid-2.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div className="-mt-8 opacity-30 lg:hidden">
                <Image
                  alt="eth_icon"
                  src="/assets/svgs/grid-2-mobile.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HackathonCountdownSection;
