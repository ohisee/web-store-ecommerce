/**
 * @fileoverview sign up component 
 */
import React from "react";
import styles from "./sign-up.module.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

interface SignUpState {
  displayName: string,
  email: string,
  password: string,
  confirmPassword: string,
}
interface SignUpProps { }
class SignUp extends React.Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  }

  async onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (this.state.password !== this.state.confirmPassword) {
      alert("password must be same as confirm password");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        this.state.email, this.state.password);

      await createUserProfileDocument(user, { displayName: this.state.displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

    } catch (err) {
      console.log("Unable to sign up", err.message);
    }
  }

  onInputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    let { name, value } = event.target;
    // typescript check 
    if (name === "displayName") {
      this.setState({ [name]: value });
    }
    if (name === "email") {
      this.setState({ [name]: value });
    }
    if (name === "password") {
      this.setState({ [name]: value });
    }
    if (name === "confirmPassword") {
      this.setState({ [name]: value });
    }
  }

  render() {
    return (
      <div className={styles["sign-up"]}>
        <h2 className={styles["title"]}>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form
          className={styles["sign-up-form"]}
          onSubmit={this.onSubmitHandler.bind(this)}>
          <FormInput
            handleChanged={this.onInputChangeHandler.bind(this)}
            value={this.state.displayName}
            type="text"
            name="displayName"
            label="Display Name"
            required />
          <FormInput
            handleChanged={this.onInputChangeHandler.bind(this)}
            value={this.state.email}
            type="email"
            name="email"
            label="Email"
            required />
          <FormInput
            handleChanged={this.onInputChangeHandler.bind(this)}
            value={this.state.password}
            type="password"
            name="password"
            label="Password"
            required />
          <FormInput
            handleChanged={this.onInputChangeHandler.bind(this)}
            value={this.state.confirmPassword}
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            required />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
