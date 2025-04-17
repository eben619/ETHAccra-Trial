'use client';
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import EthAccraButton from "@/components/design-system/button/button";
import styles from "./navbar.module.scss";
import clsx from "clsx";
import useScrollNavbar from "@/hooks/useScrollNavbar";
import CollapsibleNav from "./CollapsibleNav";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const { isSticky, element } = useScrollNavbar();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openNavbarAction = () => {
    setOpenNavbar(true);
    document.body.style.overflow = "hidden";
  };

  const closeNavbarAction = () => {
    setOpenNavbar(false);
    document.body.style.overflow = "unset";
  };

  // Custom smooth scroll function with 2 second duration
  const smoothScroll = (targetPosition: number, duration: number = 2000) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    // Easing function for smooth acceleration and deceleration
    function easeInOutCubic(t: number): number {
      return t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * easedProgress);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    
    requestAnimationFrame(animation);
  };

  // Function to handle smooth scrolling to sections with 2s duration
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      // Get the position of the section relative to the document
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      
      // Apply our custom smooth scroll
      smoothScroll(sectionPosition);
    }
    
    // Close mobile navbar if open
    if (openNavbar) {
      closeNavbarAction();
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Define animation variants for the buttons
  const listItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
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
          <div className="hidden xl:flex gap-12 mr-8 items-center">
            {/* Navigation links with smooth scroll functionality */}
            <button 
              onClick={() => scrollToSection('about-us')}
              className="text-lg font-medium cursor-pointer hover:opacity-80 transition-opacity" 
              style={{ color: "#f5950a" }}
            >
              About
            </button>
            
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-lg font-medium cursor-pointer hover:opacity-80 transition-opacity" 
              style={{ color: "#f5950a" }}
            >
              Gallery
            </button>
            
            <button 
              onClick={() => scrollToSection('sponsors')}
              className="text-lg font-medium cursor-pointer hover:opacity-80 transition-opacity" 
              style={{ color: "#f5950a" }}
            >
              Sponsors
            </button>
            
            {/* Past Editions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                className="flex items-center gap-1 text-lg font-medium hover:opacity-80 transition-opacity" 
                style={{ color: "#f5950a" }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Past Editions
                <ChevronDown size={16} />
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-full mt-2 bg-white rounded-md shadow-lg py-2 z-50 w-40">
                  <a 
                    href="https://2024.ethaccra.xyz" 
                    target="_blank" 
                    className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                    style={{ color: "#f5950a" }}
                  >
                    2024 Edition
                  </a>
                  <a 
                    href="https://2024.ethaccra.xyz/2023" 
                    target="_blank" 
                    className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                    style={{ color: "#f5950a" }}
                  >
                    2023 Edition
                  </a>
                </div>
              )}
            </div>
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