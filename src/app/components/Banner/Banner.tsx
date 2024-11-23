import React from "react";
import styles from "./banner.module.css";
import BtnDark from "../Buttons/BtnDark";
import BtnLight from "../Buttons/BtnLight";
interface BannerProps {
  title: string;
  subtitle: string;
  footer: string;
  img: string;
}
const Banner: React.FC<BannerProps> = ({ title, subtitle, footer, img }) => {
  return (
    <div
      className={`${styles.container} `}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={styles.iphoneContent}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div>
          <div className={styles.footer}>
            <BtnDark>Learn more</BtnDark>
            <BtnLight>Buy</BtnLight>
          </div>
          <p>{footer}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
