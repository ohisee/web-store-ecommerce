/**
 * @fileoverview header component 
 */
import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/svg/crown.svg";

interface HeaderProps {
  currentUser: any,
}
const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  return (
    <div className={styles["header"]}>
      <Link className={styles["logo-container"]} to="/">
        <Logo className={styles["logo"]} />
      </Link>
      <div className={styles["options"]}>
        <Link className={styles["option"]} to="/shop">SHOP</Link>
        <Link className={styles["option"]} to="/shop">CONTACT</Link>
        {
          currentUser ?
            <div className={styles["option"]} onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className={styles["option"]} to="/signin">SIGN IN</Link>
        }
      </div>
    </div>
  );
};

export default Header;
