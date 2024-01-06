import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import img from "../../assets/img/image-1.png";

const Home = () => {
  return (
      <div className={styles.container}>
        <div className={styles.backgroundContainer}>
          <img className={styles.image} src={img} alt="" />
          <div className={styles.infoContainer}>
            <div className={styles.buttonContainer}>
              <Link to="/login" className={styles.joinButton}>
                Join a Room Now
              </Link>
            </div>
            <p className={styles.text}>
              United in Study,
              <br />
              Together in Success
            </p>
          </div>
          <div className={styles.headerContainer}>
            <div className={styles.appName}>Apna Study</div>
            <div className={styles.goButtonContainer}>
              <Link to="/login" className={styles.goButton}>
                Let's Go
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;
