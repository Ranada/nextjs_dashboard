import React from 'react';
import PivotTabs from './PivotTabs';
import styles from "../../styles/Home.module.css";

export default class AppBar extends React.Component {
  render() {
    return (
      <div id={styles.banner}>
        <div>
          <h2>Logo</h2>
        </div>
        <PivotTabs></PivotTabs>
      </div>
    );
  }
}
