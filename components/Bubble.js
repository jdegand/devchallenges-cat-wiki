import React from "react";
import styles from '../styles/Bubble.module.css'

const Bubble = props => {

  switch (props.count) {
    case 5:
      return (
        <div className={styles.container}>
          <div className={styles.filled}></div>
          <div className={styles.filled}></div>
          <div className={styles.filled}></div>
          <div className={styles.filled}></div>
          <div className={styles.filled}></div>
        </div>
      );
    case 4:
      return (
        <div className={styles.container}>
          <div className={styles.filled}></div>
          <div className={styles.filled}></div>
          <div className={styles.filled}></div>
          <div className={styles.filled}></div>
          <div className={styles.empty}></div>
        </div>
      );
    case 3:
      return (
        <div className={styles.container}>
          <div className={styles.filled}></div>
          <div className={styles.filled}></div>
          <div className={styles.filled}></div>
          <div className={styles.empty}></div>
          <div className={styles.empty}></div>
        </div>
      );
    case 2:
      return (
        <div className={styles.container}>
          <div className={styles.filled}></div>
          <div className={styles.filled}></div>
          <div className={styles.empty}></div>
          <div className={styles.empty}></div>
          <div className={styles.empty}></div>
        </div>
      )
    default:
      return (
        <div className={styles.container}>
          <div className={styles.filled}></div>
          <div className={styles.empty}></div>
          <div className={styles.empty}></div>
          <div className={styles.empty}></div>
          <div className={styles.empty}></div>
        </div>
      );
  }
};

export default Bubble;