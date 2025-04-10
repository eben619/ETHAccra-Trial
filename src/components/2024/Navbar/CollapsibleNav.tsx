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
                  href="#media-partners" 
                  className={styles.anchorLinks}
                >
                  Media Partners
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

                {/* <motion.a 
                  variants={listItemVariants}
                  onClick={closeNavbarAction} 
                  href="https://glaze-step-222.notion.site/ETHAccra-Hacker-Manual-1e7f186ffe3b424c94dabeb240f7f1fc?pvs=4" 
                  target="_blank"
                  className={styles.anchorLinks}
                >
                  Hacker’s Guide
                </motion.a>

                <motion.a 
                  variants={listItemVariants}
                  onClick={closeNavbarAction} 
                  href="https://glaze-step-222.notion.site/Accra-City-Guide-a3d7591db8a94cce9f49cfd39859a084" 
                  target="_blank"
                  className={styles.anchorLinks}
                >
                  Accra City Guide
                </motion.a> */}
              </div>

              <div className="mt-16 flex flex-col gap-10">
                <motion.div
                  onClick={closeNavbarAction}
                  className={clsx(styles.navLinks, 'lg:hidden')}
                  variants={listItemVariants}
                  
                >
                  <Link 
                    href={'/2023'}
                    className={clsx(
                      "h-[52px] lg:h-auto lg:min-h-[52px] cursor-pointer lg:hidden",
                      "items-center bg-white text-black hover:text-[#FFA500]"
                    )}
                  >
                    Last Edition
                  </Link>
                </motion.div>

                <motion.a
                  onClick={closeNavbarAction}
                  href="#ethAccra-hackaton-video"
                  className={styles.navLinks}
                  variants={listItemVariants}
                >
                  2024 Hackathon
                </motion.a>

                <motion.a
                  onClick={closeNavbarAction} 
                  href="#about-us"
                  className={styles.navLinks}
                  variants={listItemVariants}
                >
                  About
                </motion.a>
              </div>

              <motion.div
                variants={listItemVariants}
                className="mx-auto max-w-[840px] mt-16"
              >
                {/* <div className="flex justify-center md:block">
                  <motion.div
                    className={styles.quickButtonsContainer}
                    variants={listItemVariants}
                  >
                    <a 
                      className={clsx(styles.collapsedNavBarLink, styles.primaryLink)}
                      href="https://form.typeform.com/to/xKBpKRiz" target="_blank"
                    >
                      Become a Sponsor
                    </a>
                    <a 
                      className={clsx(styles.collapsedNavBarLink, styles.tertiaryLink)}
                      href="https://form.typeform.com/to/VSyW1MEq?typeform-source=www.linkedin.com" target="_blank"
                    >
                      Apply to Mentor
                    </a>
                    <a 
                      className={clsx(styles.collapsedNavBarLink, styles.secondaryLink)}
                      href="https://taikai.network/ethaccra/hackathons/hackathon2024" target="_blank"
                    >
                      Apply to Hack
                    </a>
                  </motion.div>
                </div> */}

                <motion.div
                  variants={listItemVariants}
                  className="mt-12 border-t border-[#C3C3C3]"
                >
                  <div className="mt-12">
                    <p className={styles.reachOutToSocialMediaText}>
                      REACH OUT TO US ON SOCIAL MEDIA & STAY UPDATED
                    </p>
                  </div>

                  <div className={styles.socialMediaButtonsContainer}>
                    <a 
                      id="telegram_link" 
                      href="https://t.me/+7ClMFsYpii05NGQ0" 
                      target="_blank"
                      className={styles.navFooterImageLinks}>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6055 26.1793L16.0589 22.1471C14.3032 20.1508 14.0952 19.2736 14.2108 19.0845L15.5419 18.0125L20.9369 13.7925C21.372 13.4523 21.4488 12.8238 21.1085 12.3888C20.7683 11.9538 20.1397 11.877 19.7047 12.2172L14.304 16.4415L12.6799 17.7671C12.3007 18.174 12.0589 18.8699 12.3226 19.8595C12.5687 20.7829 13.259 22.0035 14.7288 23.6791L14.186 24.7496C13.8353 25.2369 13.5099 25.6895 13.2103 25.9996C12.9126 26.3077 12.3717 26.7607 11.6183 26.6108C10.8749 26.4629 10.5412 25.8483 10.376 25.4539C10.2083 25.0532 10.0662 24.5099 9.91203 23.9205L9.24336 21.3652C8.87195 19.9459 8.7437 19.5379 8.50202 19.2376C8.47151 19.1997 8.43974 19.1631 8.40679 19.1279C8.15163 18.8547 7.79127 18.6865 6.47134 18.1575L6.39903 18.1284C5.09825 17.6071 4.02675 17.1776 3.27731 16.7556C2.55126 16.3468 1.7672 15.7525 1.677 14.7497C1.66299 14.5939 1.66323 14.4371 1.67772 14.2812C1.771 13.2787 2.557 12.6869 3.28434 12.2805C4.0351 11.861 5.10793 11.4351 6.41031 10.9181L22.3891 4.57403C24.0236 3.92505 25.36 3.39439 26.4101 3.15245C27.4808 2.9058 28.5868 2.87968 29.4535 3.68135C30.3031 4.46719 30.4048 5.57424 30.2989 6.68996C30.1939 7.79693 29.8485 9.23656 29.4225 11.0124L26.1963 24.4617C25.9248 25.5937 25.6956 26.5495 25.4207 27.2428C25.1431 27.9433 24.6977 28.6955 23.7979 28.9335C22.8872 29.1743 22.1345 28.7253 21.5625 28.2412C21.0007 27.7657 20.3599 27.0372 19.6055 26.1793Z" fill="black"/>
                      </svg>
                    </a>

                    <a 
                      id="x_link" 
                      href="https://twitter.com/ETHAccra" 
                      target="_blank"
                      className={styles.navFooterImageLinks}
                    >
                      <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3533 3.21749C27.1143 2.91647 24.2464 2.91649 20.5953 2.9165H20.4046C16.7535 2.91649 13.8857 2.91647 11.6467 3.21749C9.35224 3.52597 7.53181 4.17102 6.10149 5.60135C4.67116 7.03169 4.02609 8.85212 3.71763 11.1465C3.41659 13.3856 3.41661 16.2534 3.41663 19.9045V20.0952C3.41661 23.7463 3.41659 26.6142 3.71763 28.8532C4.02609 31.1475 4.67116 32.968 6.10149 34.3983C7.53181 35.8287 9.35224 36.4737 11.6467 36.7822C13.8857 37.0832 16.7535 37.0832 20.4046 37.0832H20.5953C24.2464 37.0832 27.1143 37.0832 29.3533 36.7822C31.6478 36.4737 33.4681 35.8287 34.8984 34.3983C36.3288 32.968 36.9738 31.1475 37.2823 28.8532C37.5833 26.6142 37.5833 23.7463 37.5833 20.0952V19.9045C37.5833 16.2533 37.5833 13.3856 37.2823 11.1465C36.9738 8.85212 36.3288 7.03169 34.8984 5.60135C33.4681 4.17102 31.6478 3.52597 29.3533 3.21749ZM12.1666 10.4165C11.6972 10.4165 11.2674 10.6795 11.0537 11.0974C10.84 11.5154 10.8784 12.0178 11.1533 12.3984L17.5193 21.2128L11.2828 27.4493C10.7946 27.9375 10.7946 28.7288 11.2828 29.217C11.7709 29.7052 12.5624 29.7052 13.0505 29.217L19.0019 23.2657L23.1903 29.065C23.4253 29.3905 23.8023 29.5832 24.2036 29.5832H28.8333C29.3028 29.5832 29.7326 29.3202 29.9463 28.9022C30.1599 28.4843 30.1214 27.9818 29.8466 27.6013L23.4808 18.7868L29.7173 12.5504C30.2053 12.0622 30.2053 11.2708 29.7173 10.7826C29.2291 10.2945 28.4376 10.2945 27.9494 10.7826L21.9981 16.734L17.8096 10.9346C17.5746 10.6093 17.1976 10.4165 16.7963 10.4165H12.1666Z" fill="black"/>
                      </svg>
                    </a>

                    <a 
                      id="email_link" 
                      href="mailto:info@ethaccra.xyz" 
                      className={styles.navFooterImageLinks}
                    >
                      <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9705 4.64484C21.7109 4.56304 19.2892 4.56306 16.0295 4.64484L15.9048 4.64797C13.3892 4.71102 11.3194 4.76291 9.65111 5.05307C7.88051 5.36106 6.39797 5.96084 5.14231 7.21972C3.89321 8.47201 3.29512 9.93116 2.99214 11.6738C2.70779 13.3091 2.66476 15.3272 2.61267 17.7697L2.60999 17.8953C2.57449 19.5587 2.57451 20.4418 2.61002 22.105L2.61271 22.2307C2.66477 24.6732 2.70781 26.6912 2.99216 28.3267C3.29516 30.0692 3.89324 31.5283 5.14232 32.7807C6.39801 34.0395 7.88052 34.6393 9.65114 34.9473C11.3194 35.2375 13.3892 35.2893 15.9048 35.3523L16.0296 35.3555C19.2892 35.4373 21.7109 35.4373 24.9705 35.3555L25.0952 35.3523C27.6109 35.2893 29.6807 35.2373 31.349 34.9472C33.1195 34.6393 34.602 34.0395 35.8577 32.7807C37.1069 31.5283 37.705 30.0692 38.0079 28.3265C38.2924 26.6912 38.3354 24.6732 38.3874 22.2307L38.39 22.105C38.4255 20.4417 38.4255 19.5587 38.39 17.8953L38.3874 17.7698C38.3354 15.3273 38.2922 13.3091 38.0079 11.6738C37.7049 9.93116 37.1069 8.47201 35.8577 7.21972C35.1522 6.51229 34.3749 6.01299 33.515 5.65664C33.3842 5.58522 33.244 5.53137 33.0979 5.49701C32.5482 5.30322 31.966 5.16042 31.3489 5.05309C29.6807 4.76291 27.6109 4.71102 25.0952 4.64796L24.9705 4.64484ZM34.9664 14.7507C34.934 14.0748 34.9179 13.7369 34.6732 13.602C34.4285 13.4671 34.1275 13.6375 33.5259 13.9784L26.4664 17.9785C24.3002 19.2058 22.4684 20.0002 20.4997 20.0002C18.531 20.0002 16.6991 19.2058 14.5331 17.9785L7.47412 13.9788C6.87242 13.6379 6.57157 13.4674 6.32684 13.6023C6.08211 13.7372 6.06599 14.0752 6.03376 14.751C5.99031 15.6619 5.96676 16.7178 5.94009 17.9663C5.90559 19.5822 5.90561 20.4182 5.94012 22.034C5.99564 24.634 6.03772 26.399 6.27391 27.7573C6.49631 29.0365 6.86734 29.7963 7.50207 30.4327C8.13021 31.0625 8.90049 31.4398 10.2226 31.6698C11.6196 31.9128 13.4417 31.9628 16.1132 32.0298C19.317 32.1102 21.683 32.1102 24.8869 32.0298C27.5584 31.9628 29.3805 31.9128 30.7775 31.6698C32.0995 31.4398 32.8699 31.0625 33.498 30.4327C34.1327 29.7963 34.5039 29.0365 34.7262 27.7573C34.9624 26.399 35.0045 24.634 35.06 22.034C35.0945 20.4182 35.0945 19.5822 35.06 17.9663C35.0334 16.7177 35.0097 15.6616 34.9664 14.7507Z" fill="black"/>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
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
