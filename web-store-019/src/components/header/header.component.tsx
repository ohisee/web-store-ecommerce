/**
 * @fileoverview header component 
 */
import React from "react";
import styles from "./header.module.scss";
// import { Link } from "react-router-dom";
// import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/svg/crown.svg";
import { RootState } from "../../redux/root-state";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";
import { signOutStart } from "../../redux/user/user.actions";

interface HeaderProps {
  currentUser: any,
  cartHidden: boolean,
}
interface HeaderDispatchProps {
  signOutStart: () => void,
}
const Header: React.FC<HeaderProps & HeaderDispatchProps> =
  function ({ currentUser, cartHidden, signOutStart }) {
    return (
      // <div className={styles["header"]}>
      //   <Link className={styles["logo-container"]} to="/">
      //     <Logo className={styles["logo"]} />
      //   </Link>
      //   <div className={styles["options"]}>
      //     <Link className={styles["option"]} to="/shop">SHOP</Link>
      //     <Link className={styles["option"]} to="/shop">CONTACT</Link>
      //     {
      //       currentUser ?
      //         <div className={styles["option"]} onClick={() => auth.signOut()}>SIGN OUT</div>
      //         :
      //         <Link className={styles["option"]} to="/signin">SIGN IN</Link>
      //     }
      //     <CartIcon />
      //   </div>
      //   {
      //     cartHidden ? null : <CartDropdown />
      //   }
      // </div>
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo className={styles["logo"]} />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink to="/shop">CONTACT</OptionLink>
          {
            currentUser ?
              // <OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
              <OptionLink as="div" onClick={() => signOutStart()}>SIGN OUT</OptionLink>
              :
              <OptionLink to="/signin">SIGN IN</OptionLink>
          }
          <CartIcon />
        </OptionsContainer>
        {
          cartHidden ? null : <CartDropdown />
        }
      </HeaderContainer>
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

const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
