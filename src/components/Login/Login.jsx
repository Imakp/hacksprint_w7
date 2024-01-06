// import React from "react";
// import styles from "./login.module.css";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// const Login = () => {
//   const navigate = useNavigate();
  
//   const handleSignIn = () => {
//     // Add logic for navigating to my rooms page here
//     console.log('Navigating to my rooms page');
//     navigate('/dashboard');
//   };
//   return (
//     <>
//       <div className={styles.container}>
//         <h2>Sign in</h2>
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
//         <button className={styles.but} onClick={handleSignIn}>sign in</button>
//         <p>
//           Don't have an account? <Link to= "/signup">Sign up</Link>
//         </p>
//         <Link to="/forgot">Forgot Password</Link>
//       </div>
//     </>
//   );
// };
// export default Login;









// {/* import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {initializeApp} from 'firebase/app';
// import 'firebase/auth';
// import styles from './login.module.css';

// const Login = () => {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const history = useNavigate();

//  const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await initializeApp.auth().signInWithEmailAndPassword(email, password);
//       console.log('User signed in successfully');
//       history.push('/dashboard');
//     } catch (error) {
//       console.log('Error signing in:', error);
//     }
//  };

//  return (
//     <>
//       <div className={styles.container}>
//         <h2>Sign in</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="email address"
//             className={styles.input}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <br />
//           <input
//             type="password"
//             placeholder="password"
//             className={styles.input}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />
//           <button className={styles.but}>sign in</button>
//         </form>
//         <p>
//           Don't have an account? <Link to="/signup">Sign up</Link>
//         </p>
//         <Link to="/forgot">Forgot Password</Link>
//       </div>
//     </>
//  );
// };
// export default Login; */}




import React, { useState } from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
 const navigate = useNavigate();
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [errorMsg, setErrorMsg] = useState("");

 const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
 };

 const validateInputs = () => {
    if (email === "" || password === "") {
      return "fill this";
    } else {
      return "";
    }
 };

 const handleSignIn = () => {
    const error = validateInputs();
    if (error) {
      setErrorMsg(error);
    } else {
      setErrorMsg("");
      // Add logic for navigating to my rooms page here
      console.log('Navigating to my rooms page');
      navigate('/dashboard');
    }
 };

 return (
    <>
      <div className={styles.container}>
        <h2>Sign in</h2>
        <button className={styles.googleL}>Continue with Google</button>

        <p>or</p>
        <input
          type="text"
          placeholder="email address"
          className={styles.input}
          name="email"
          value={email}
          onChange={handleChange}
        />
        {errorMsg && <p>{errorMsg}</p>}
        <br />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          name="password"
          value={password}
          onChange={handleChange}
        />
        {errorMsg && <p>{errorMsg}</p>}
        <br />
        <button className={styles.but} onClick={handleSignIn}>sign in</button>
        <p>
          Don't have an account? <Link to= "/signup">Sign up</Link>
        </p>
        <Link to="/forgot">Forgot Password</Link>
      </div>
    </>
 );
};
export default Login;