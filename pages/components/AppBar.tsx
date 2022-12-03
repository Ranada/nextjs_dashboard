import React from 'react';
import PivotTabs from './PivotTabs';
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default class AppBar extends React.Component {
  render() {
    return (
      <div id={styles.banner}>
        <div className={styles.logo}>
          <Image
            src="/images/logo-white.svg" // Route of the image file
            height={28} // Desired size with correct aspect ratio
            width={28} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>
        <h4>Next.js</h4>
        <PivotTabs></PivotTabs>
      </div>
    );
  }
}
