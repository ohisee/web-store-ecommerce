/**
 * @fileoverview sign in and sign up page component  
 */
import React from "react";
import styles from "./signin-and-signup.module.scss";
import SignIn from "../../components/sign-in/sign-in.component";

const SignInAndSignUpPage: React.FC = () => {
  return (
    <div className={styles["sign-in-and-sign-up"]}>
      <SignIn />
    </div>
  );
};

export default SignInAndSignUpPage;
