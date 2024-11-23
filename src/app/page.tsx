import Image from "next/image";
import BtnLight from "./components/Buttons/BtnLight";
import styles from "./home.module.css";
import BtnDark from "./components/Buttons/BtnDark";
import DiscountBar from "./components/Discountbar/DiscountBar";
import Banner from "./components/Banner/Banner";

export default function Home() {
  return (
    <div className={styles.home}>
      <DiscountBar />
      <div className="hero">
        <Banner
          title="iPhone 16 Pro"
          subtitle="Built for Apple Intelligence."
          footer="Apple Intelligence available now in US English"
          img="/hero_iphone16_pro.jpg"
        />
        <div className="h-4"></div>
        <Banner
          title="iPhone 16"
          subtitle="Built for Apple Intelligence."
          footer="Apple Intelligence available now in US English"
          img="/hero_iphone16.jpg"
        />
      </div>
      {/*  */}
      <div className={styles.macbookPro}>
        <div className="content">
          <header>
            <h2>MacBook Pro</h2>
            <p>A work of smart.</p>
          </header>
          <div className="flex justify-center gap-6  font-bold pb-4 ">
            <BtnDark>Learn more</BtnDark>
            <BtnLight>Buy</BtnLight>
          </div>
          <footer>
            <h3>Built for Apple Intelligence.</h3>
            <p>Available now in US English`</p>
          </footer>
        </div>
      </div>
      {/* Products grid */}
      <div className={styles.productsContainer}>
        <div
          className="watch product"
          style={{
            backgroundImage: `url("/apple_watch_series_10.jpg")`,
          }}
        >
          <Image
            src="/logo_apple_watch_series_10.png"
            alt="watch"
            width={100}
            height={100}
          />
          <div className="content">
            <p>Thinstant classic.</p>
            <div className="flex justify-center gap-6  font-bold pb-4 ">
              <BtnDark>Learn more</BtnDark>
              <BtnLight>Buy</BtnLight>
            </div>
          </div>
        </div>
        <div
          className="airpods product"
          style={{
            backgroundImage: `url("/airpods_4.jpg")`,
          }}
        >
          <div className="content">
            <p>Thinstant classic.</p>
            <div className="flex justify-center gap-6  font-bold pb-4 ">
              <BtnDark>Learn more</BtnDark>
              <BtnLight>Buy</BtnLight>
            </div>
          </div>
        </div>
        <div
          className="macmini product"
          style={{
            backgroundImage: `url("/macmini.jpg")`,
          }}
        ></div>
        <div
          className="imac product"
          style={{
            backgroundImage: `url("/imac_announce.jpg")`,
          }}
        >
          <div className="content">
            <p>Thinstant classic.</p>
            <div className="flex justify-center gap-6  font-bold pb-4 ">
              <BtnDark>Learn more</BtnDark>
              <BtnLight>Buy</BtnLight>
            </div>
          </div>
        </div>
        <div
          className="ipadmini product"
          style={{
            backgroundImage: `url("/ipad_mini.jpg")`,
          }}
        ></div>
        <div
          className="tradein product"
          style={{
            backgroundImage: `url("/iphone_tradein.jpg")`,
          }}
        ></div>
      </div>
      {/* slider */}
      <div className="slider"></div>
    </div>
  );
}
