import React from "react";
import Image from "next/image";
import EthAccraButton, { DefaultButton } from "@/components/design-system/button/button";
import styles from './footer-section.module.scss'
import clsx from "clsx";
import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <div className={styles.footerSectionContainer}>
        <div className="relative z-10">
            <div className="mx-auto max-w-[871px]">
                <div className={styles.footerEthIconSection}>
                    <motion.div 
                        className={styles.footerEthIconImageContainer}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{duration: 0.1, delay: 0, ease: "easeInOut"}}
                        viewport={{once: true}}
                    >
                        <Image
                            alt="eth_icon"
                            src={"/assets/svgs/footer/ethAccraFooter.svg"}
                            width={144}
                            height={211}
                            sizes="100vw"
                            priority
                            style={{ width: "100%", height: "auto", }}
                        />
                    </motion.div>

                    {/* clouds svg bg */}
                    <div>
                        <div className={styles.footerCloud1ImageContainer}>
                            <Image
                                alt="eth_icon"
                                src="/assets/svgs/footer/cloudfooter_main_1.svg"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>

                        <motion.div 
                            className={styles.footerCloud2ImageContainer}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{duration: 0.1, delay: 0, ease: "easeInOut"}}
                            viewport={{once: true}}
                        >
                            <Image
                                alt="eth_icon"
                                src="/assets/svgs/footer/cloudfooter_main.svg"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </motion.div>

                        <motion.div 
                            className={styles.footerCloud3ImageContainer}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{duration: 0.1, delay: 0, ease: "easeInOut"}}
                            viewport={{once: true}}
                        >
                            <Image
                                alt="eth_icon"
                                src="/assets/svgs/footer/cloudfooter_main_2.svg"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </motion.div> 
                    </div>
                </div>

                <motion.p 
                    className={styles.footerCommunityText}
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    transition={{duration: 0.1, delay: 0, ease: "easeInOut"}}
                    viewport={{once: true}}
                >
                    Our vibrant community welcomes developers, designers, researchers, and
                    enthusiasts to push the boundaries of technology in West Africa. Accra
                    is poised to be the epicenter of Ethereum innovation in the region. 
                    <br/>
                    <span className="uppercase">Come for the hack, stay for the vibes.</span>
                </motion.p>

                {/* <motion.div 
                    className="flex flex-col gap-4 lg:flex-row lg:justify-center lg:items-center lg:gap-6 mt-6"
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    transition={{duration: 0.1, delay: 0, ease: "easeInOut"}}
                    viewport={{once: true}}
                >
                    <a
                        className={styles.applyAsAHackerButton}
                        href="https://taikai.network/ethaccra/hackathons/hackathon2024" target="_blank"
                    >
                        Apply as a Hacker
                    </a>

                    <a
                        className={styles.applyAsAMentorButton}
                        href="https://form.typeform.com/to/VSyW1MEq?typeform-source=www.linkedin.com" target="_blank"
                    >
                        Apply as a Mentor
                    </a>

                    <a
                        className={styles.applyAsASponsorButton} 
                        href="https://form.typeform.com/to/xKBpKRiz" target="_blank"
                    >
                        Apply as a Sponsor
                    </a>
                </motion.div> */}

                <motion.div 
                    id="contactUs"
                    className="mt-12 flex justify-center items-center gap-8"
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    transition={{duration: 0.1, delay: 0, ease: "easeInOut"}}
                    viewport={{once: true}}
                >
                    <a 
                        href='https://t.me/+7ClMFsYpii05NGQ0' 
                        target="_blank" 
                        className={styles.footerImageLinks}
                    >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5068 32.7242L20.0737 27.6838C17.879 25.1885 17.619 24.092 17.7635 23.8557L19.4273 22.5157L26.1712 17.2407C26.715 16.8153 26.811 16.0298 26.3857 15.486C25.9603 14.9422 25.1747 14.8462 24.6308 15.2715L17.88 20.5518L15.8498 22.2088C15.3759 22.7175 15.0736 23.5873 15.4033 24.8243C15.7109 25.9787 16.5738 27.5043 18.411 29.5988L17.7325 30.937C17.2942 31.5462 16.8873 32.1118 16.5129 32.4995C16.1408 32.8847 15.4646 33.4508 14.5229 33.2635C13.5936 33.0787 13.1765 32.3103 12.9701 31.8173C12.7604 31.3165 12.5827 30.6373 12.39 29.9007L11.5542 26.7065C11.0899 24.9323 10.9296 24.4223 10.6275 24.047C10.5894 23.9997 10.5497 23.9538 10.5085 23.9098C10.1895 23.5683 9.73909 23.3582 8.08917 22.6968L7.99879 22.6605C6.3728 22.0088 5.03344 21.472 4.09664 20.9445C3.18907 20.4335 2.209 19.6907 2.09625 18.4372C2.07874 18.2423 2.07904 18.0463 2.09715 17.8515C2.21375 16.5984 3.19625 15.8586 4.10542 15.3506C5.04387 14.8263 6.3849 14.2939 8.01289 13.6476L27.9863 5.71753C30.0295 4.90632 31.7 4.24298 33.0127 3.94057C34.351 3.63225 35.7335 3.5996 36.8168 4.60168C37.8788 5.58398 38.006 6.9678 37.8737 8.36245C37.7423 9.74617 37.3107 11.5457 36.7782 13.7655L32.7453 30.5772C32.406 31.9922 32.1195 33.1868 31.7758 34.0535C31.4288 34.9292 30.8722 35.8693 29.7473 36.1668C28.609 36.4678 27.6682 35.9067 26.9532 35.3015C26.2508 34.7072 25.4498 33.7965 24.5068 32.7242Z" 
                            fill="#9A9A9A"/>
                        </svg>
                    </a>

                    <a 
                        href='https://twitter.com/ETHAccra' 
                        target="_blank"
                        className={styles.footerImageLinks}
                    >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M28.8533 3.21749C26.6143 2.91647 23.7465 2.91649 20.0953 2.9165H19.9046C16.2535 2.91649 13.3857 2.91647 11.1467 3.21749C8.85228 3.52597 7.03185 4.17102 5.60153 5.60135C4.1712 7.03169 3.52613 8.85212 3.21767 11.1465C2.91663 13.3856 2.91665 16.2534 2.91667 19.9045V20.0952C2.91665 23.7463 2.91663 26.6142 3.21767 28.8532C3.52613 31.1475 4.1712 32.968 5.60153 34.3983C7.03185 35.8287 8.85228 36.4737 11.1467 36.7822C13.3857 37.0832 16.2535 37.0832 19.9046 37.0832H20.0953C23.7465 37.0832 26.6143 37.0832 28.8533 36.7822C31.1478 36.4737 32.9681 35.8287 34.3985 34.3983C35.8288 32.968 36.4738 31.1475 36.7823 28.8532C37.0833 26.6142 37.0833 23.7463 37.0833 20.0952V19.9045C37.0833 16.2533 37.0833 13.3856 36.7823 11.1465C36.4738 8.85212 35.8288 7.03169 34.3985 5.60135C32.9681 4.17102 31.1478 3.52597 28.8533 3.21749ZM11.6667 10.4165C11.1973 10.4165 10.7674 10.6795 10.5537 11.0974C10.34 11.5154 10.3785 12.0178 10.6533 12.3984L17.0193 21.2128L10.7828 27.4493C10.2946 27.9375 10.2946 28.7288 10.7828 29.217C11.271 29.7052 12.0624 29.7052 12.5506 29.217L18.502 23.2657L22.6903 29.065C22.9253 29.3905 23.3023 29.5832 23.7036 29.5832H28.3333C28.8028 29.5832 29.2326 29.3202 29.4463 28.9022C29.66 28.4843 29.6215 27.9818 29.3466 27.6013L22.9808 18.7868L29.2173 12.5504C29.7053 12.0622 29.7053 11.2708 29.2173 10.7826C28.7291 10.2945 27.9376 10.2945 27.4495 10.7826L21.4981 16.734L17.3096 10.9346C17.0746 10.6093 16.6976 10.4165 16.2963 10.4165H11.6667Z" 
                            fill="#9A9A9A"/>
                        </svg>
                    </a>

                    <a 
                        href="mailto:info@ethaccra.xyz" 
                        className={styles.footerImageLinks}
                    >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M24.4705 4.64484C21.2108 4.56304 18.7892 4.56306 15.5295 4.64484L15.4047 4.64797C12.8891 4.71102 10.8193 4.76291 9.15106 5.05307C7.38046 5.36106 5.89793 5.96084 4.64226 7.21972C3.39316 8.47201 2.79508 9.93116 2.4921 11.6738C2.20775 13.3091 2.16471 15.3272 2.11263 17.7697L2.10995 17.8953C2.07445 19.5587 2.07446 20.4418 2.10998 22.105L2.11266 22.2307C2.16473 24.6732 2.20776 26.6912 2.49211 28.3267C2.79511 30.0692 3.3932 31.5283 4.64228 32.7807C5.89796 34.0395 7.38048 34.6393 9.1511 34.9473C10.8194 35.2375 12.8892 35.2893 15.4048 35.3523L15.5295 35.3555C18.7892 35.4373 21.2108 35.4373 24.4705 35.3555L24.5952 35.3523C27.1108 35.2893 29.1807 35.2373 30.849 34.9472C32.6195 34.6393 34.102 34.0395 35.3577 32.7807C36.6068 31.5283 37.205 30.0692 37.5078 28.3265C37.7923 26.6912 37.8353 24.6732 37.8873 22.2307L37.89 22.105C37.9255 20.4417 37.9255 19.5587 37.89 17.8953L37.8873 17.7698C37.8353 15.3273 37.7922 13.3091 37.5078 11.6738C37.2048 9.93116 36.6068 8.47201 35.3577 7.21972C34.6522 6.51229 33.8748 6.01299 33.015 5.65664C32.8842 5.58522 32.744 5.53137 32.5978 5.49701C32.0482 5.30322 31.466 5.16042 30.8488 5.05309C29.1807 4.76291 27.1108 4.71102 24.5952 4.64796L24.4705 4.64484ZM34.4663 14.7507C34.434 14.0748 34.4178 13.7369 34.1732 13.602C33.9285 13.4671 33.6275 13.6375 33.0258 13.9784L25.9663 17.9785C23.8002 19.2058 21.9683 20.0002 19.9997 20.0002C18.031 20.0002 16.1991 19.2058 14.0331 17.9785L6.97408 13.9788C6.37238 13.6379 6.07153 13.4674 5.8268 13.6023C5.58206 13.7372 5.56595 14.0752 5.53371 14.751C5.49026 15.6619 5.46671 16.7178 5.44005 17.9663C5.40555 19.5822 5.40556 20.4182 5.44008 22.034C5.4956 24.634 5.53768 26.399 5.77386 27.7573C5.99626 29.0365 6.3673 29.7963 7.00203 30.4327C7.63016 31.0625 8.40045 31.4398 9.72258 31.6698C11.1196 31.9128 12.9416 31.9628 15.6132 32.0298C18.817 32.1102 21.183 32.1102 24.3868 32.0298C27.0583 31.9628 28.8805 31.9128 30.2775 31.6698C31.5995 31.4398 32.3698 31.0625 32.998 30.4327C33.6327 29.7963 34.0038 29.0365 34.2262 27.7573C34.4623 26.399 34.5045 24.634 34.56 22.034C34.5945 20.4182 34.5945 19.5822 34.56 17.9663C34.5333 16.7177 34.5097 15.6616 34.4663 14.7507Z" 
                            fill="#9A9A9A"/>
                        </svg>
                    </a>
                </motion.div>
            </div>

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
                <Image
                    alt="eth_icon"
                    src="/assets/svgs/footer/footer_vector_main_mobile.svg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
        </div>
    </div>
    
  );
};

export default FooterSection;
