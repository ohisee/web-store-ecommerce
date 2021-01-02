/**
 * @fileoverview menu item component 
 */
import React from "react";
import styles from "./menu-item.module.scss";

interface Props {
  title: string,
  subtitle: string,
  imageUrl: string,
  size?: string,
}
const MenuItem: React.FC<Props> = ({ title, subtitle, imageUrl, size }) => {
  const classes = size ? [styles["menu-item"], styles[size]] : [styles["menu-item"]];
  return (
    <div className={classes.join(" ")}>
      <div className={styles["background-image"]}
        style={{
          backgroundImage: `url(${imageUrl})`
        }} />
      <div className={styles["content"]}>
        <h1 className={styles["title"]}>{title}</h1>
        <span className={styles["subtitle"]}>{subtitle}</span>
      </div>
    </div>
  );
}

export default MenuItem;
