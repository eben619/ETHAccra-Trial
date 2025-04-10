import HackathonImagesRow from "./hackathon-images-row";
import styles from "./hackathon-images-and-sponsors.module.scss";

const HackathonImages2023 = () => {
  return (
    <>
      <div className="scroll-mt-[72px]" id="gallery">
        <div className="pt-[72px] pb-[72px] md:pt-[72px] md:pb-[120px] bg-white md:px-[60px]">
          <h1 className={styles.headingText}>2023 Gallery</h1>
          <div className="mb-[3.25rem]" />
          <HackathonImagesRow />
          {/* Anchor tag for sponsors */}
          <div id="sponsors"></div>
        </div>
      </div>
    </>
  );
};

export default HackathonImages2023;
