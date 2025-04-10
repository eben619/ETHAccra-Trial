import React from "react";
import Image from "next/image";
import EthAccraButton, { DefaultButton } from "@/components/design-system/button/button";
import styles from './footer-section.module.scss'
import clsx from "clsx";
import { motion } from "framer-motion";

const FooterBottom = () => {
  return (
    <div className={styles.footerSectionContainer}>
        <div className="relative z-10">

            <motion.div 
                className={styles.quickLinksContainer}
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{duration: 0.1, delay: 0, ease: "easeInOut"}}
                viewport={{once: true}}
            >
                <div className="mt-8 lg:mt-0">
                    <p className={styles.allRightsReservedText}>
                        All rights reserved 2024
                    </p>
                </div>

                <div className={styles.quickLinksLayout}>
                    <a href='#about-us' className={styles.quickLinksText}>
                        About us
                    </a>

                    <a href="mailto:info@ethaccra.xyz" className={styles.quickLinksText}>
                        Contact us
                    </a>

                    <a href='#faq' className={styles.quickLinksText}>
                        FAQ’s
                    </a>

                    <a href='#gallery' className={clsx(styles.quickLinksText, 'hidden lg:block')}>
                        Gallery
                    </a>
                </div>
            </motion.div>
        </div>


        {/* Bottom svg bg */}
        <div className="absolute left-0 right-0 bottom-0">
            <div className="hidden lg:block">
                <Image
                    alt="eth_icon"
                    src="/assets/svgs/footer/footer_vector_main.svg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
            
            <div className="block lg:hidden">
            </div>
        </div>
    </div>
    
  );
};

export default FooterBottom;
