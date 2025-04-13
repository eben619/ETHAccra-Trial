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
      const fireflyCount = 50;
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
      
      {/* Down Arrow and Text in a column layout */}
      <div className="absolute bottom-8 w-full flex flex-col items-center z-10">
        <ChevronDown size={48} color="#ff5cb9" strokeWidth={3} className="animate-bounce mb-2" />
        <p className="text-center font-medium bg-white px-4 py-2 rounded-full" style={{ color: "#ff5cb9" }}>Scroll Down To Learn More</p>
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>
    </div>
  );
};

export default Illustration;