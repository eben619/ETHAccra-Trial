'use client';
import Image from "next/image";
import Navbar from "../Navbar";
import { useEffect, useRef, useState } from "react";
import styles from "./illustration.module.scss";
import { debounce } from 'lodash';
import { ChevronDown } from 'lucide-react';

// Type for our firefly objects
interface Firefly {
  id: number;
  left: number;
  top: number;
  size: number;
  animationDuration: number;
}

// Extended CSS properties type that includes our custom property
type CustomCSSProperties = {
  '--firefly-id'?: number;
} & React.CSSProperties;

const Illustration = () => {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Create and manage fireflies
  useEffect(() => {
    setIsClient(true);

    const createFireflies = () => {
      if (!containerRef.current) return;

      const newFireflies: Firefly[] = [];
      const fireflyCount = 10; // Reduced from 50 to 10
      const { offsetWidth: width, offsetHeight: height } = containerRef.current;

      for (let i = 0; i < fireflyCount; i++) {
        newFireflies.push({
          id: i,
          left: Math.random() * width,
          top: Math.random() * height,
          size: Math.random() * 6 + 2, // 2-8px
          animationDuration: Math.random() * 4 + 2, // 2-6s
        });
      }

      setFireflies(newFireflies);
    };

    createFireflies();

    // Handle window resize with debounce
    const handleResize = debounce(createFireflies, 200);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel();
    };
  }, []);

  // Custom smooth scroll function with 2 second duration
  // Enhanced to work reliably on mobile
  const smoothScroll = (targetPosition: number, duration: number = 2000) => {
    const startPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
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
      
      const scrollY = Math.floor(startPosition + distance * easedProgress);
      
      // Use more compatible scroll method that works on various mobile browsers
      window.scrollTo({
        top: scrollY,
        behavior: 'auto' // We're handling the animation ourselves
      });
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    
    requestAnimationFrame(animation);
  };

  // Scroll to the hero section with 2-second smooth scroll
  const scrollToHero = () => {
    // Prevent any default behaviors first
    // This is especially important on mobile
    event?.preventDefault();
    
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      // Get the position of the hero section relative to the document
      // Using a more cross-browser compatible approach
      const rect = heroSection.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const heroPosition = rect.top + scrollTop;
      
      // Apply our custom smooth scroll
      smoothScroll(heroPosition);
    } else {
      // If there's no specific ID, just scroll one viewport height
      const targetPosition = window.innerHeight;
      smoothScroll(targetPosition);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden" ref={containerRef}>
      {/* Background Image */}
      <Image
        alt="ETHAccra Illustration"
        src="/assets/pngs/2025/ETHAccra-Illustration1.png"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      {/* Fireflies Container */}
      <div className={styles.firefliesContainer}>
        {isClient && fireflies.map((firefly) => (
          <div
            key={firefly.id}
            className={styles.firefly}
            style={{
              '--firefly-id': firefly.id,
              left: `${firefly.left}px`,
              top: `${firefly.top}px`,
              width: `${firefly.size}px`,
              height: `${firefly.size}px`,
              animationDuration: `${firefly.animationDuration}s`,
            } as CustomCSSProperties}
          />
        ))}
      </div>
      
      {/* Down Arrow and Text - Made more touch-friendly for mobile */}
      <div 
        className="absolute bottom-8 w-full flex flex-col items-center z-10 cursor-pointer touch-manipulation"
        onClick={scrollToHero}
        onTouchEnd={scrollToHero} // Add explicit touch handler for mobile
      >
        <ChevronDown 
          size={48} 
          color="#ff5cb9" 
          strokeWidth={3} 
          className="animate-bounce mb-2 touch-manipulation" 
        />
        <p 
          className="text-center font-medium bg-white px-6 py-3 rounded-full touch-manipulation" 
          style={{ color: "#ff5cb9" }}
        >
          Scroll Down To Learn More
        </p>
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>
    </div>
  );
};

export default Illustration;