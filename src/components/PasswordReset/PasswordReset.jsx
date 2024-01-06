import React from "react";
import styles from "./passwordReset.module.css";
import { Link } from "react-router-dom";
const PasswordReset = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>Password Reset</h2>

        <p>Enter the e-mail address used to sign into the account</p>
        <input
          type="text"
          placeholder="email address"
          className={styles.input}
        />
        <br />
        <button className={styles.but}>Send reset link</button>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </>
  );
};
export default PasswordReset;
