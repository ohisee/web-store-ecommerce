/**
 * @fileoverview this is to load the recaptcha script into HTML header
 */
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA_DATA_SITE_KEY } from "../../utils/utilities";
import styles from "./recaptcha.module.scss";

interface RecaptchaWigetProps {
  reference: React.RefObject<ReCAPTCHA>,
  onChange: (value: string | null) => void,
}
const RecaptchaWiget: React.FC<RecaptchaWigetProps> = ({ reference, onChange }) => {

  return (
    <div className={styles["recaptcha-submit"]}>
      <ReCAPTCHA
        sitekey={RECAPTCHA_DATA_SITE_KEY}
        size="normal"
        ref={reference}
        onChange={onChange}
      />
    </div>
  );
}

export default RecaptchaWiget;
