'use client';
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
        <div className="flex items-center gap-2 lg:gap-3">
          <div>
            <Link href="/">
            <Image
              src="/assets/svgs/2025/ETHAccra-PrimaryIcon.svg"
              alt="home_img"
              width={40}
              height={40}
              className="w-[40px] h-auto object-contain animate-bounce-slow"
            />
            </Link>
          </div>
          <div>
            <h1 className="text-[#252525] text-[24px] lg:text-[32px] font-[800] leading-[112.5%] font-altoneBold">ETHAccra</h1>
          </div>
        </div>

        <div className="flex items-center">
          <div className="hidden xl:flex gap-6 2xl:gap-10">
          </div>

          <div className="hidden lg:flex px-8 gap-4">
            
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