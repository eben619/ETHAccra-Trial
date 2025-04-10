import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./hackathon-images-and-sponsors.module.scss";
import { hackathonImages } from '../data/imageData';

const HackathonImagesRow = () => {
  return (
    <div>
        <div className={styles.hackathonImagesRow}>
          {hackathonImages &&
            hackathonImages.map((curr, idx) => {
              return (
                <motion.div
                  className="md:w-1/3 lg:w-1/4 px-7 md:p-3"
                  key={idx}
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.1, delay: 0, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <Image
                      alt={`hackathon_image-${idx}`}
                      src={curr.imageUrl}
                      height={240}
                      width={768}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  </div>
                </motion.div>
              );
            })}
        </div>
    </div>
  )
}

export default HackathonImagesRow;