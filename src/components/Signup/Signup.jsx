// import React from "react";
// import styles from "./signup.module.css";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
  
//   const navigate = useNavigate();
  
//   const handleSignUp = () => {
//     // Add logic for navigating to my rooms page here
//     console.log('Navigating to my rooms page');
//     navigate('/dashboard');
//   };

//   return (
//     <>
//       <div className={styles.container}>
//         <h2>Sign up</h2>
//         <button className={styles.googleL}>Continue with Google</button>

//         <p>or</p>
//         <input
//           type="text"
//           placeholder="email address"
//           className={styles.input}
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="password"
//           className={styles.input}
//         />
//         <br />
//         <button className={styles.but} onClick={handleSignUp}>sign up</button>
//         <p>
//           Already have an account? <Link to="/login">Sign in</Link>
//         </p>
//         <Link to="/">Back to Home</Link>
//       </div>
//     </>
//   );
// };
// export default Signup;
import React, { useState } from 'react';
import styles from './signup.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');

 const navigate = useNavigate();

 const handleSignUp = () => {
    if (email.trim() === '') {
      setError('fill this');
    } else {
      setError('');
      // Add logic for navigating to my rooms page here
      console.log('Navigating to my rooms page');
      navigate('/dashboard');
    }
 };

 return (
    <>
      <div className={styles.container}>
        <h2>Sign up</h2>
        <button className={styles.googleL}>Continue with Google</button>

        <p>or</p>
        <input
          type="text"
          placeholder="email address"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {error && <p>{error}</p>}
        <button className={styles.but} onClick={handleSignUp}>sign up</button>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
        <Link to="/">Back to Home</Link>
      </div>
    </>
 );
};

export default Signup;