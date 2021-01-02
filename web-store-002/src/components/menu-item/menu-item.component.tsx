/**
 * @fileoverview menu item component 
 */
import React from "react";
import styles from "./menu-item.module.scss";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface MenuItemProps {
  title: string,
  subtitle: string,
  imageUrl: string,
  size?: string,
  linkUrl: string,
}
const MenuItem: React.FC<MenuItemProps & RouteComponentProps> =
  ({ title, subtitle, imageUrl, linkUrl, size, history, match }) => {
    const classes = size ? [styles["menu-item"], styles[size]] : [styles["menu-item"]];
    return (
      <div
        className={classes.join(" ")}
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div
          className={styles["background-image"]}
          style={{
            backgroundImage: `url(${imageUrl})`
          }} />
        <div className={styles["content"]}>
          <h1 className={styles["title"]}>{title}</h1>
          <span className={styles["subtitle"]}>{subtitle}</span>
        </div>
      </div>
    );
  };

export default withRouter(MenuItem);
