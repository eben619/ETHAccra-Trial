import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import styles from "./footer-section.module.scss";

const FooterAction = () => {
  return (
    <div className="bg-[#E7E7E7] px-[1.03125rem] py-[1.875rem] lg:p-[3.75rem] lg:gap-[3.938rem] flex items-center justify-center">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
        viewport={{ once: true }}
        className=" w-full md:w-auto"
      >
        <a
          href="https://taikai.network/ethaccra/hackathons/hackathon2024"
          target="_blank"
          className={clsx(styles.footerActionButton)}
        >
          Explore 2025 Hackathon
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
        </a>
      </motion.div>
    </div>
  );
};

export default FooterAction;
