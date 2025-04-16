'use client';
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import EthAccraButton from "@/components/design-system/button/button";
import styles from "./navbar.module.scss";
import clsx from "clsx";
import Link from "next/link";

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
      },
    },
    closed: {
      y: 100,
      opacity: 0,
      transition: {
        staggerChildren: 0.5,
        duration: 0.5,
        ease: "easeIn",
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
            className={clsx(styles.collapseNavBarSection, "relative overflow-hidden")}
          >
            {/* Background Image */}
            <Image
              src="/assets/svgs/2025/ETHAccra-BrandPatternLarge.svg"
              alt="ETHAccra background pattern"
              fill
              className="object-cover opacity-5 z-0"
              priority
            />

            {/* Content Wrapper */}
            <div className="relative z-10">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div>
                    <Image
                      src="/assets/svgs/2025/ETHAccra-PrimaryIcon.svg"
                      alt="home_img"
                      width={40}
                      height={40}
                      className="w-[40px] h-auto object-contain animate-bounce-slow"
                    />
                  </div>
                  <div>
                    <h1 className="text-[#252525] text-[24px] lg:text-[32px] font-[800] leading-[112.5%] font-altoneBold">
                      ETHAccra
                    </h1>
                  </div>
                </div>

                <button
                  className={styles.hamburgerMenuContainer}
                  onClick={closeNavbarAction}
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="mt-16 h-full w-full">
                <div className="flex flex-col gap-10">
                <motion.a
                    variants={listItemVariants}
                    onClick={closeNavbarAction}
                    href="#about-us"
                    className={styles.anchorLinks}
                  >
                    About
                  </motion.a>
                  <motion.a
                    variants={listItemVariants}
                    onClick={closeNavbarAction}
                    href="#gallery"
                    className={styles.anchorLinks}
                  >
                    Gallery
                  </motion.a>

                  <motion.a
                    variants={listItemVariants}
                    onClick={closeNavbarAction}
                    href="#sponsors"
                    className={styles.anchorLinks}
                  >
                    Sponsors
                  </motion.a>

                  <motion.a
                    variants={listItemVariants}
                    onClick={closeNavbarAction}
                    href="#speakers"
                    className={styles.anchorLinks}
                  >
                    Speakers
                  </motion.a>

                  <motion.a
                    variants={listItemVariants}
                    onClick={closeNavbarAction}
                    href="https://taikai.network/ethaccra/hackathons/hackathon2024"
                    target="_blank"
                    className={styles.anchorLinks}
                  >
                    Projects
                  </motion.a>
                  <motion.a
                    variants={listItemVariants}
                    onClick={closeNavbarAction}
                    href="#media-partners"
                    className={styles.anchorLinks}
                  >
                   Community & Media Partners
                  </motion.a>
                </div>
                <div className="mt-16 flex flex-col gap-10">
                  <motion.div
                    onClick={closeNavbarAction}
                    className={clsx(styles.navLinks, 'lg:hidden')}
                    variants={listItemVariants}
                  ></motion.div>

                  <motion.a
                    onClick={closeNavbarAction}
                    href="https://2024.ethaccra.xyz"
                    className={styles.navLinks}
                    variants={listItemVariants}
                    target="_blank"
                  >
                    2024 Edition
                  </motion.a>

                  <motion.a
                    onClick={closeNavbarAction}
                    href="https://2024.ethaccra.xyz/2023"
                    className={styles.navLinks}
                    variants={listItemVariants}
                    target="_blank"
                  >
                    2023 Edition
                  </motion.a>
                </div>

                <motion.div
                  variants={listItemVariants}
                  className="mx-auto max-w-[840px] mt-16"
                >
                  <motion.div
                    variants={listItemVariants}
                    className="mt-12 border-t border-[#C3C3C3]"
                  ></motion.div>
                </motion.div>
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
