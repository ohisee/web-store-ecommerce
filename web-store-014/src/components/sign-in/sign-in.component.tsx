/**
 * @fileoverview sign in component 
 */
import React from "react";
import { connect } from "react-redux";
import styles from "./sign-in.module.scss";
import FormInput from "../form-input/form-input.component";
import CustomBotton from "../custom-button/custom-button.component";
// import { auth } from "../../firebase/firebase.utils";
// import { signInWithGoogle } from "../../firebase/firebase.utils";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";
import UserAction from "../../redux/shared/actiontype";

interface SignInProps {
  googleSignInStart: () => void,
  emailSignInStart: (email: string, password: string) => void,
}
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

  // async
  // moved auth sign in with email and password to user redux saga 
  onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // try {
    //   await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
    //   this.setState({ email: "", password: "" });
    // } catch (err) {
    //   console.log("Unable to sign in", err.message);
    // }
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;
    emailSignInStart(email, password);
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
    const { googleSignInStart } = this.props;
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
            {/* <CustomBotton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn={true}>Sign In With Google</CustomBotton> */}
            <CustomBotton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn={true}>Sign In With Google</CustomBotton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDipatchToProps = (dispatch: (action: UserAction) => void) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart:
    (email: string, password: string) =>
      dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDipatchToProps)(SignIn);
