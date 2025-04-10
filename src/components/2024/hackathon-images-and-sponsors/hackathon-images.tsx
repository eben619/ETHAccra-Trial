import Image from "next/image";
import styles from "./hackathon-images-and-sponsors.module.scss";
import { motion } from "framer-motion";
import { hackathonImages } from "./data/imageData";
import HackathonImagesSlide from "./slideshow";
import HackathonImagesRow from "./image-section/hackathon-images-row";


const HackathonImages = () => {
  return (
    <>
    <div id="gallery" className="bg-white md:px-[60px]">
      <div className="pt-[72px] pb-[72px] md:pt-[72px] md:pb-[120px]">
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
