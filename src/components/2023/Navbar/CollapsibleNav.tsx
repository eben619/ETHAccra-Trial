import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import EthAccraButton from "@/components/design-system/button/button";
import styles from "./navbar.module.scss";
import clsx from "clsx";
import Link from "next/link";

{
  /* Collapse Navbar Section */
}

type CollapsibleNavProps = {
  navbarState: boolean;
  closeNavbarAction: () => void;
};

const CollapsibleNav = ({
  navbarState,
  closeNavbarAction,
}: CollapsibleNavProps) => {
  const motionVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  const listItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 0.5,
        ease: "easeOut",
        // type: "spring",
      },
    },
    closed: {
      y: 100,
      opacity: 0,
      transition: {
        staggerChildren: 0.5,
        duration: 0.5,
        ease: "easeIn",
        // type: "spring",
      },
    },
  };
  return (
    <>
      <AnimatePresence>
        {navbarState && (
          <motion.div
            key={"collapsible-nav"}
            initial={"closed"}
            animate={navbarState ? "open" : "closed"}
            exit={"closed"}
            variants={motionVariants}
            className={clsx(styles.collapseNavBarSection)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[8.5]">
                <div>
                  <Image
                    src="/assets/svgs/ethAccraCollapsibleDropdownImage.svg"
                    alt="home_img"
                    width={64}
                    height={64}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div>
                  <h1 className={styles.ethAccraNavText}>ETHAccra</h1>
                  <p className={styles.ethAccraHackathonNavText}>
                    Hackathon 2024
                  </p>
                </div>
              </div>

              <button
                className="text-lg leading-[1.25rem] text-black font-altone"
                onClick={closeNavbarAction}
              >
                close
              </button>
            </div>

            <div className="mt-6 h-full w-full">
              <div className="flex flex-col gap-10">
                <motion.a
                  variants={listItemVariants}
                  onClick={closeNavbarAction}
                  href="#overview"
                  className={styles.anchorLinksCollapsible}
                >
                  Overview
                </motion.a>

                <motion.a
                  variants={listItemVariants}
                  onClick={closeNavbarAction}
                  href="#gallery"
                  className={styles.anchorLinksCollapsible}
                >
                  Gallery
                </motion.a>

                <motion.a
                  variants={listItemVariants}
                  onClick={closeNavbarAction}
                  href="#sponsors"
                  className={styles.anchorLinksCollapsible}
                >
                  Sponsors
                </motion.a>

                <motion.a
                  variants={listItemVariants}
                  onClick={closeNavbarAction}
                  href="#speakers"
                  className={styles.anchorLinksCollapsible}
                >
                  Speakers
                </motion.a>

                <motion.a
                  variants={listItemVariants}
                  onClick={closeNavbarAction}
                  href="#media-partners"
                  className={styles.anchorLinksCollapsible}
                >
                  Media
                </motion.a>

                <motion.a
                  variants={listItemVariants}
                  onClick={closeNavbarAction}
                  href="https://taikai.network/ethaccra/hackathons/hackathon/projects"
                  target="_blank"
                  className={styles.anchorLinksCollapsible}
                >
                  Best Projects
                </motion.a>

                {/* <motion.a
                  variants={listItemVariants}
                  onClick={closeNavbarAction}
                  href="https://taikai.network/ethaccra/hackathons/hackathon2024"
                  target="_blank"
                  className={styles.anchorLinksCollapsible}
                >
                  2024 Hackathon
                </motion.a> */}
                <motion.div
                  variants={listItemVariants}
                  onClick={closeNavbarAction}
                  className={styles.anchorLinksCollapsible}
                >
                  <Link
                    href="/"
                  >
                    2024 Hackathon
                  </Link>
                </motion.div>
              </div>

              <div className="mt-16 flex flex-col gap-10">
                {/* <motion.a
                  onClick={closeNavbarAction}
                  href="https://taikai.network/ethaccra/hackathons/hackathon2025"
                  variants={listItemVariants}
                  className={clsx(styles.heroButton)}
                >
                  Explore 2025 Hackathon
                </motion.a> */}

                <motion.a
                  onClick={closeNavbarAction}
                  // href="https://taikai.network/ethaccra/hackathons/hackathon2025"
                  href="mailto:info@ethaccra.xyz"
                  variants={listItemVariants}
                  className={clsx(styles.heroButtonInverse)}
                >
                  Be a 2025 Sponsor
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const CloseIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10.2623L18.0123 4.25L19.75 5.98775L13.7377 12L19.75 18.0123L18.0123 19.75L12 13.7377L5.98775 19.75L4.25 18.0123L10.2623 12L4.25 5.98775L5.98775 4.25L12 10.2623Z"
        fill="white"
      />
    </svg>
  );
};

export default CollapsibleNav;
