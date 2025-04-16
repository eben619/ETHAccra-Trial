import Image from "next/image";
import styles from "./hackathon-images-and-sponsors.module.scss";
import { motion } from "framer-motion";
import { hackathonImages } from "./data/imageData";
import HackathonImagesSlide from "./slideshow";
import HackathonImagesRow from "./image-section/hackathon-images-row";
import clsx from "clsx";

const HackathonImages = () => {
  return (
    <>
    <div className="bg-white md:px-[60px]">
      <div className="pt-[72px] pb-[72px] md:pt-[72px] md:pb-[120px]">
      <h2 className="text-5xl md:text-6xl font-bold text-left" style={{ color: "#0d0801" }}>
            Gallery
      </h2><br />
        <HackathonImagesSlide />
        {/* <HackathonImagesRow /> */}
        {/* Anchor tag for the speakers page */}
        <div id="speakers"></div>
      </div>
    </div>
    </>
  );
};

export default HackathonImages;