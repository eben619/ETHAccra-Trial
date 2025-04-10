import React from 'react';
import styles from '../hackathon-images-and-sponsors.module.scss';

const HeadingText = ({ text}: {text: string}) => {
  return (
    <div>
        <div className={styles.sponsorHeadingContainer}>
            <div className={styles.sponsorTextlineLeft}></div>
            <h1 className={styles.sponsorHeadingText}>{text}</h1>
            <div className={styles.sponsorTextlineRight}></div>
        </div>
    </div>
  )
}

export default HeadingText;