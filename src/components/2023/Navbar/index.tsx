import { useState } from "react";
import Image from "next/image";
import EthAccraButton from "@/components/design-system/button/button";
import styles from "./navbar.module.scss";
import clsx from "clsx";
import useScrollNavbar from "@/hooks/useScrollNavbar";
import CollapsibleNav from "./CollapsibleNav";
import Link from "next/link";
import { useParams } from "next/navigation";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);
  const params = useParams();

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
            <Link href={`/${params?.year}`}>
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
            <a href="#about-us" className={styles.anchorLinks}>
              Overview
            </a>

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
              Media
            </a>

            <a
              className={styles.anchorLinks}
              href="https://taikai.network/ethaccra/hackathons/hackathon/projects"
              target="_blank"
            >
              Projects
            </a>

            <Link
              className={styles.anchorLinks}
              href="/"
            >
              2024 Hackathon
            </Link>
          </div>

          {/* <div className="hidden lg:flex px-8 gap-4">
            <a
              className={clsx(
                "rounded-[32px] lg:h-auto cursor-pointer",
                "items-center px-5 py-4 bg-[#803134] text-white border border-black hover:bg-white hover:border hover:border-[#803134] hover:text-[#803134]"
              )}
              href="https://taikai.network/ethaccra/hackathons/hackathon2024"
            >
              2025 Hackathon
            </a>
          </div> */}

          <button
            className={styles.hamburgerMenuCover}
            onClick={openNavbarAction}
          >
            <Image
              src={"/assets/svgs/2023/hamburgerIcon.svg"}
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
