/**
 * @fileoverview sign in component 
 */
import React from "react";
import styles from "./sign-in.module.scss";
import FormInput from "../form-input/form-input.component";
import CustomBotton from "../custom-button/custom-button.component";

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

  onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    this.setState({ email: "", password: "" });
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
          <CustomBotton type="submit">Sign In</CustomBotton>
        </form>
      </div>
    );
  }
}

export default SignIn;
