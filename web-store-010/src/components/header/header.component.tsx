/**
 * @fileoverview header component 
 */
import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/svg/crown.svg";
import { RootState } from "../../redux/root-state";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

interface HeaderProps {
  currentUser: any,
  cartHidden: boolean,
}
const Header: React.FC<HeaderProps> = ({ currentUser, cartHidden }) => {
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
        <CartIcon />
      </div>
      {
        cartHidden ? null : <CartDropdown />
      }
    </div>
  );
};

// const mapStateToProps = (state: RootState) => {
//   return {
//     currentUser: state.user.currentUser,
//     cartHidden: state.cart.hidden
//   }
// };

// use memoization to solve performance issue, use Reselect 
/*const mapStateToProps = (state: RootState) => {
  return {
    currentUser: selectCurrentUser(state),
    cartHidden: selectCartHidden(state),
  }
};*/
// use Reselect createStructuredSelector 
const mapStateToProps = createStructuredSelector<RootState, HeaderProps>({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
