/**
 * @fileoverview form input component 
 */
import React from "react";
import styles from "./form-input.module.scss";

interface FormInputProps {
  handleChanged: (event: React.ChangeEvent<HTMLInputElement>) => void,
  label?: string,
  [key: string]: any, // other properties 
}
const FormInput: React.FC<FormInputProps> = ({ handleChanged, label, ...otherProps }) => {
  const labelClasses = [styles["form-input-label"]];
  if (otherProps.value && otherProps.value.length) {
    labelClasses.push(styles["shrink"]);
  }
  return (
    <div className={styles["group"]}>
      <input
        className={styles["form-input"]}
        onChange={handleChanged}
        {...otherProps} />
      {
        label ? <label className={labelClasses.join(" ")}>{label}</label> : null
      }
    </div>
  );
};

export default FormInput;
