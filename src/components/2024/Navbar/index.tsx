import { useState } from "react";
import Image from "next/image";
import EthAccraButton from "@/components/design-system/button/button";
import styles from "./navbar.module.scss";
import clsx from "clsx";
import useScrollNavbar from "@/hooks/useScrollNavbar";
import CollapsibleNav from "./CollapsibleNav";
import Link from "next/link";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);
  const { isSticky, element } = useScrollNavbar();

  const openNavbarAction = () => {
    setOpenNavbar(true);
    document.body.style.overflow = "hidden";
  };

  const closeNavbarAction = () => {
    setOpenNavbar(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <div
        className={clsx(styles.navContainer, {
          [styles.isSticky]: isSticky,
          [styles.isAbsolute]: !isSticky,
        })}
        ref={element as React.MutableRefObject<HTMLDivElement>}
      >
        <div className="flex items-center gap-[8.5]">
          <div>
            <Link href="/">
              <Image
                src="/assets/svgs/ethAccraCollapsibleDropdownImage.svg"
                alt="home_img"
                width={64}
                height={64}
                className="w-full h-auto object-fill"
              />
            </Link>
          </div>
          <div>
            <h1 className={styles.ethAccraNavText}>ETHAccra</h1>
            <p className={styles.ethAccraHackathonNavText}>Hackathon 2024</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="hidden xl:flex gap-6 2xl:gap-10">
            <a href="#gallery" className={styles.anchorLinks}>
              Gallery
            </a>

            <a href="#sponsors" className={styles.anchorLinks}>
              Sponsors
            </a>

            <a href="#speakers" className={styles.anchorLinks}>
              Speakers
            </a>

            <a href="#media-partners" className={styles.anchorLinks}>
              Media Partners
            </a>

            <a
              className={styles.anchorLinks}
              href="https://taikai.network/ethaccra/hackathons/hackathon2024"
              target="_blank"
            >
              Projects
            </a>

            {/* <a
              className={styles.anchorLinks}
              href="https://glaze-step-222.notion.site/ETHAccra-Hacker-Manual-1e7f186ffe3b424c94dabeb240f7f1fc?pvs=4"
              target="_blank"
            >
              Hacker’s Guide
            </a> */}
          </div>

          <div className="hidden lg:flex px-8 gap-4">
            {/* <a
              href="https://glaze-step-222.notion.site/Accra-City-Guide-a3d7591db8a94cce9f49cfd39859a084"
              className={styles.anchorLinks}
              target="_blank"
            >
              Accra City Guide
            </a> */}

            {/* <a
              className={clsx(styles.navbarLink, styles.primaryLink)}
              href="https://form.typeform.com/to/xKBpKRiz"
              target="_blank"
            >
              Become a Sponsor
            </a> */}

            <Link
              className={clsx(
                "rounded-[32px] h-[52px] lg:h-auto lg:min-h-[52px] cursor-pointer",
                "items-center px-4 py-3 bg-white text-black border border-black hover:border hover:border-[#FFA500] hover:text-[#FFA500]"
              )}
              href="/2023"
            >
              Last Edition
            </Link>
          </div>

          <button
            className={styles.hamburgerMenuCover}
            onClick={openNavbarAction}
          >
            <Image
              src={"/assets/svgs/hamburgerIcon.svg"}
              width={24}
              height={24}
              alt="x_icon"
            ></Image>
          </button>
        </div>
      </div>

      <CollapsibleNav
        navbarState={openNavbar}
        closeNavbarAction={closeNavbarAction}
      />
    </>
  );
};

export default Navbar;
