/**
 * @fileoverview sign in and sign up page component  
 */
import React from "react";
import styles from "./signin-and-signup.module.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage: React.FC = () => {
  return (
    <div className={styles["sign-in-and-sign-up"]}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
