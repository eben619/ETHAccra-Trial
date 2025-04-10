'use client';
import Image from "next/image";
import Navbar from "../Navbar";
import { useEffect, useRef, useState } from "react";
import styles from "./illustration.module.scss";
import { debounce } from 'lodash'; // Debounce for optimizing resize handling

interface Firefly {
  id: number;
  left: number;
  top: number;
  size: number;
  animationDuration: number;
}

const Illustration = () => {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  const [isClient, setIsClient] = useState(false); // Track if it's mounted on client
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    // Create fireflies on component mount
    const createFireflies = () => {
      if (!containerRef.current) return;

      const newFireflies: Firefly[] = [];
      const fireflyCount = 50;

      for (let i = 0; i < fireflyCount; i++) {
        newFireflies.push({
          id: i,
          left: Math.random() * 100, // percentage of container width
          top: Math.random() * 100, // percentage of container height
          size: Math.random() * 6 + 2, // size between 2-8px
          animationDuration: Math.random() * 4 + 2, // duration between 2-6s
        });
      }

      setFireflies(newFireflies); // Set fireflies state
    };

    createFireflies(); // Create fireflies immediately on mount

    // Debounced resize event to optimize performance
    const handleResize = debounce(() => {
      createFireflies();
    }, 200); // Adjust debounce time as needed

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel(); // Clean up debounce on component unmount
    };
  }, []); // Empty dependency array ensures effect runs only on mount

  if (!isClient) {
    return null; // Or a loading spinner
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden" ref={containerRef}>
      {/* Background Image */}
      <Image
        alt="ETHAccra Illustration"
        src="/assets/pngs/2025/ETHAccra-Illustration.png"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      {/* Fireflies */}
      <div className={styles.firefliesContainer}>
        {fireflies.map((firefly) => (
          <div
            key={firefly.id}
            className={styles.firefly}
            style={{
              left: `${firefly.left}%`,
              top: `${firefly.top}%`,
              width: `${firefly.size}px`,
              height: `${firefly.size}px`,
              animationDuration: `${firefly.animationDuration}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Navbar on top */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>
    </div>
  );
};

export default Illustration;
