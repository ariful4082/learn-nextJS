import React from "react";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer style={{backgroundColor: 'green'}}>
      <div className={styles.container}>
        <p style={{ textAlign: "center" }}>
          <small>All Right Reserved &copy; Learning Team nextJS</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
