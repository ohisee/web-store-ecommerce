/**
 * @fileoverview sign in component 
 */
import React from "react";
import styles from "./sign-in.module.scss";
import FormInput from "../form-input/form-input.component";
import CustomBotton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

interface SignInProps { }
interface SignInState {
  email: string,
  password: string,
}
class SignIn extends React.Component<SignInProps, SignInState> {
  constructor(props: SignInProps) {
    super(props);

    this.state = {
      email: "",
      password: "",
    }
  }

  async onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log("Unable to sign in", err.message);
    }
  }

  onInputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    let { name, value } = event.target;
    // typescript check 
    if (name === "email") {
      this.setState({ [name]: value });
    }
    // typescript check 
    if (name === "password") {
      this.setState({ [name]: value });
    }
  }

  render() {
    return (
      <div className={styles["sign-in"]}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.onSubmitHandler.bind(this)}>
          {/* <input
            name="email"
            type="email"
            onChange={this.onInputChangeHandler.bind(this)}
            value={this.state.email} required />
          <label>Email</label> */}
          {/* <input
            name="password"
            type="password"
            onChange={this.onInputChangeHandler.bind(this)}
            value={this.state.password} required />
          <label>Password</label> */}
          <FormInput
            handleChanged={this.onInputChangeHandler.bind(this)}
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            required />
          <FormInput
            handleChanged={this.onInputChangeHandler.bind(this)}
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            required />
          {/* <input type="submit" value="Submit Form" /> */}
          <div className={styles["buttons"]}>
            <CustomBotton
              type="submit"
              isGoogleSignIn={false}>Sign In</CustomBotton>
            <CustomBotton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn={true}>Sign In With Google</CustomBotton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
