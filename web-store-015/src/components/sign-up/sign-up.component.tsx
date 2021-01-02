/**
 * @fileoverview sign up component 
 */
import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "./sign-up.module.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
// import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { signUpStart } from "../../redux/user/user.actions";

// interface SignUpState {
//   displayName: string,
//   email: string,
//   password: string,
//   confirmPassword: string,
// }
interface SignUpProps {
  signUpStart: (email: string, password: string, displayName: string) => void,
}
// class SignUp extends React.Component<SignUpProps, SignUpState> {
//   constructor(props: SignUpProps) {
//     super(props);

//     this.state = {
//       displayName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     }
//   }
type UserCredentials = {
  displayName: string,
  email: string,
  password: string,
  confirmPassword: string,
};
const SignUp: React.FC<SignUpProps> = ({ signUpStart }) => {

  const [userCredentials, setUserCredentials] = useState<UserCredentials>(
    {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  );

  const { displayName, email, password, confirmPassword } = userCredentials;

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // if (this.state.password !== this.state.confirmPassword) {
    //   alert("password must be same as confirm password");
    //   return;
    // }

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     this.state.email, this.state.password);

    //   await createUserProfileDocument(user, { displayName: this.state.displayName });

    //   this.setState({
    //     displayName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //   });

    // } catch (err) {
    //   console.log("Unable to sign up", err.message);
    // }
    // const { email, password, displayName } = this.state;
    // const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("password must be same as confirm password");
      return;
    }

    signUpStart(email, password, displayName);
  }

  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let { name, value } = event.target;
    // typescript check 
    if (name === "displayName") {
      // this.setState({ [name]: value });
      setUserCredentials({ ...userCredentials, [name]: value });
    }
    if (name === "email") {
      // this.setState({ [name]: value });
      setUserCredentials({ ...userCredentials, [name]: value });
    }
    if (name === "password") {
      // this.setState({ [name]: value });
      setUserCredentials({ ...userCredentials, [name]: value });
    }
    if (name === "confirmPassword") {
      // this.setState({ [name]: value });
      setUserCredentials({ ...userCredentials, [name]: value });
    }
  }

  // render() { ... }
  return (
    <div className={styles["sign-up"]}>
      <h2 className={styles["title"]}>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form
        className={styles["sign-up-form"]}
        onSubmit={onSubmitHandler}>
        <FormInput
          handleChanged={onInputChangeHandler}
          value={displayName}
          type="text"
          name="displayName"
          label="Display Name"
          required />
        <FormInput
          handleChanged={onInputChangeHandler}
          value={email}
          type="email"
          name="email"
          label="Email"
          required />
        <FormInput
          handleChanged={onInputChangeHandler}
          value={password}
          type="password"
          name="password"
          label="Password"
          required />
        <FormInput
          handleChanged={onInputChangeHandler}
          value={confirmPassword}
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          required />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  signUpStart: (email: string, password: string, displayName: string) => {
    dispatch(signUpStart({ email, password, displayName }));
  }
});

export default connect(null, mapDispatchToProps)(SignUp);
