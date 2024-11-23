import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css"
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
{
  id: 2,
  title: "Store",
  url: "/store",
  shop: ["shop the latest", "Mac", "iPad", "iPhone", "Apple Watch", "Accessories"],
  "Quick Links": ["Find a Store", "Order Status", "Ways to buy"],
  "Shop Special Stores": ["Education", "Business"]
},
  {
    id: 3,
    title: "Mac",
    url: "/mac",
  },
  {
    id: 4,
    title: "iPad",
    url: "/ipad",
  },
  {
    id: 5,
    title: "iPhone",
    url: "/iphone",
  },
  {
    id: 6,
    title: "AirPods",
    url: "/airpods",
  },
  {
    id: 7,
    title: "TV & Home",
    url: "/tv-home",
  },
  {
    id: 8,
    title: "Entertainment",
    url: "/entertainment",
  },
  {
    id: 9,
    title: "Accessories",
    url: "/accessories",
  },
  {
    id: 10,
    title: "Support",
    url: "/support",
  },
];

function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">icon</Link>
      <div className="flex gap-10">
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
