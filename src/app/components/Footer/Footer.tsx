import React from "react";
import styles from "./Footer.module.css"
function Footer() {
  return (
    <>
      <div className="categories flex gap-32 justify-center py-12 text-gray-600 border-bottom-2">
        <div className="col-1">
          <div className="shop mb-4">
            <p className={styles.heading}>Shop and Learn</p>
            <ul className={styles.list}>
              <li> Store</li>
              <li> Mac</li>
              <li> iPad</li>
              <li> iPhone</li>
              <li> Watch</li>
              <li> AirPods</li>
              <li> TV & Home</li>
              <li> AirTag</li>
              <li> Accessories</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div className="wallet">
            <p className={styles.heading}>Apple Wallet</p>
            <p>Wallet</p>
          </div>
        </div>
        <div className="col-2">
          <div className="account">
            <p className={styles.heading}>Account</p>
            <ul className={styles.list}>
              <li>Manage Your Apple Account</li>
              <li>Apple Store Account</li>
              <li>iCloud.com</li>
            </ul>
          </div>
          <div className="entertainment">
            <p className={styles.heading}>Entertainment</p>
            <ul>
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Podcasts</li>
              <li>Apple Books</li>
              <li>Apple Store</li>
            </ul>
          </div>
        </div>
        <div className="col-3">
          <div className="apple-services">
            <p className={styles.heading}>Apple Services</p>
            <ul className={styles.list}>
              <li>Apple Store</li>
              <li>Find a Store</li>
              <li>Genius Bar</li>
              <li>Today at Apple</li>
              <li>Group Reservations</li>
              <li>Apple Camp</li>
              <li>Apple Trade In</li>
              <p>Ways to Buy</p>
              <p>Recycling Programme</p>
              <p>Order Status</p>
              <p>Shopping Help</p>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="business">
            <p className={styles.heading}>For Business</p>
            <ul>
              <li>Apple and Business</li>
              <li>Shop for Business</li>
            </ul>
          </div>
          <div className="education">
            <p className={styles.heading}>For Education</p>
            <ul className={styles.list}>
              <li>Apple and Education</li>
              <li>Shop for Education</li>
              <li>Shop for University</li>
            </ul>
          </div>

          <div className="healthcare">
            <p className={styles.heading}>For Healthcare</p>
            <ul className={styles.list}>
              <li>Apple in Healthcare</li>
              <li>Mac in Healthcare</li>
              <li>Health on Apple Watch</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="apple-values">
            <p className={styles.heading}>Apple Values</p>
            <ul className={styles.list}>
              <li>Accessibility</li>
              <li>Education</li>
              <li>Environment</li>
              <li>Privacy</li>
              <li>Supply Chain</li>
            </ul>
          </div>
          <div className="about-apple">
            <p className={styles.heading}>About Apple</p>
            <ul className={styles.list}>
              <li>Newsroom</li>
              <li>Apple Leadership</li>
              <li>Career Opportunities</li>
              <li>Investors</li>
              <li>Ethics & Compliance</li>
            </ul>
          </div>
          <div className="events">
            <p>Events</p>
            <p>Contact Apple</p>
          </div>
        </div>
      </div>
      <div className="bottom-content text-gray-600 px-[25.8rem]">
        <p className="py-6 border-b-2">
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 000800 040 1966 .
        </p>
        <div className="copyright flex gap-12 py-6">
          <p> India Copyright © 2024 Apple Inc. All rights reserved.</p>
          <ul className="flex gap-2">
            <li> Privacy Policy | </li>
            <li> Terms of Use | </li>
            <li> Sales Policy | </li>
            <li> Legal | </li>
            <li> Site Map</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
