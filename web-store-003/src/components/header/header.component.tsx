/**
 * @fileoverview header component 
 */
import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/crown.svg";

const Header: React.FC = () => {
  return (
    <div className={styles["header"]}>
      <Link className={styles["logo-container"]} to="/">
        <Logo className={styles["logo"]} />
      </Link>
      <div className={styles["options"]}>
        <Link className={styles["option"]} to="/shop">SHOP</Link>
        <Link className={styles["option"]} to="/shop">CONTACT</Link>
      </div>
    </div>
  );
};

export default Header;
