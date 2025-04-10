import React from "react";
import styles from "./info.style.module.scss";

const HackathonInfo = () => {
  return (
    <>
      <div id="overview" className="bg-white text-black text-center px-4 lg:px-0 pt-[3.9rem] pb-[3.75rem]">
        <div className="max-w-[1122px] mx-auto">
          <h1 className={styles.headingText}>ETHAccra SEPTEMBER 2023</h1>
          <div className="mb-[3.25rem]" />
          <p className="font-medium text-xl lg:text-2xl lg:leading-[2.1rem]">
            In view of the fact that ETHAccra 2023 will be held in Accra, we
            want to rally the community together and support developers in Accra
            and Africa. This year’s event comes off on the 7th through 9th
            September, 2023, at the ISSER Seminar Hall, University of Ghana,
            Legon
          </p>
        </div>

        {/* Anchor tag for the media partners page */}
        <div id="media-partners" className="-mt-10"></div>
      </div>
    </>
  );
};

export default HackathonInfo;
