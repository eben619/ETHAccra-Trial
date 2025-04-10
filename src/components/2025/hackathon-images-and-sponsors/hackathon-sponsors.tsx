import Image from "next/image";
import clsx from "clsx";
import styles from "./hackathon-images-and-sponsors.module.scss";
import { motion } from "framer-motion";
import HeadingText from "./components/headingText";

const HackathonSponsors = () => {
  const PlaceholderCard = () => (
    <div className="w-[280px] h-[150px] bg-white rounded-lg shadow-md"></div>
  );

  const CardWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 p-3">
      {children}
    </div>
  );

  return (
    <div className="bg-[#f5ebda] md:px-[30px]">
      <div className="py-[72px] px-6 lg:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.h1
            className="sectionText"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            2025 Sponsors
          </motion.h1>
          <a
            className={clsx(styles.primaryLink, "text-white")}
            href="https://form.typeform.com/to/xKBpKRiz"
            target="_blank"
          >
            BECOME A SPONSOR
          </a>
        </div>

        {/* Platinum Sponsors */}
        <div className="mt-[72px]">
          <HeadingText text="PLATINUM SPONSORS" />
          <div className={styles.imagesRow}>
            <CardWrapper>
              <div className="platinumImageCover">
                <PlaceholderCard />
              </div>
            </CardWrapper>
            <CardWrapper>
              <div className="platinumImageCover">
                <PlaceholderCard />
              </div>
            </CardWrapper>
            <CardWrapper>
              <div className="platinumImageCover">
                <PlaceholderCard />
              </div>
            </CardWrapper>
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mt-[72px]">
          <HeadingText text="GOLD SPONSORS" />
          <div className={styles.imagesRowGoldSponsors}>
            <CardWrapper>
              <div className="goldImageCover">
                <PlaceholderCard />
              </div>
            </CardWrapper>
            <CardWrapper>
              <div className="goldImageCover">
                <PlaceholderCard />
              </div>
            </CardWrapper>
            <CardWrapper>
              <div className="goldImageCover">
                <PlaceholderCard />
              </div>
            </CardWrapper>
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mt-[72px]">
          <HeadingText text="SILVER SPONSORS" />
          <div className={styles.imagesRowSilverSponsors}>
            <CardWrapper>
              <div className="silverImageCover">
                <PlaceholderCard />
              </div>
            </CardWrapper>
            <CardWrapper>
              <div className="silverImageCover">
                <PlaceholderCard />
              </div>
            </CardWrapper>
            <CardWrapper>
              <div className="silverImageCover">
                <PlaceholderCard />
              </div>
            </CardWrapper>
          </div>
        </div>

        {/* Supporters */}
        <div className="mt-[72px]">
          <HeadingText text="SUPPORTERS" />
          <div className={styles.imagesRowSupporters}>
            <CardWrapper>
              <div className="sponsorsImageCover">
                <PlaceholderCard />
              </div>
            </CardWrapper>
            <CardWrapper>
              <div className="sponsorsImageCover">
                <PlaceholderCard />
              </div>
            </CardWrapper>
            <CardWrapper>
              <div className="sponsorsImageCover">
                <PlaceholderCard />
              </div>
            </CardWrapper>
          </div>
        </div>

        <div id="about-us"></div>
      </div>
    </div>
  );
};

export default HackathonSponsors;
