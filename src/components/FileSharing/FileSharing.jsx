import React, { useState, useEffect } from 'react';
import styles from "./fileSharing.module.css"

const FileSharing = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loggedInUser, setLoggedInUser] = useState('Chirag');
  const [showDropdown, setShowDropdown] = useState(false);

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear authentication token, redirect, etc.
    console.log('Logout clicked');
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <span className={styles.box1}>{currentTime.toLocaleDateString()}</span>
        <span className={styles.box2}>{currentTime.toLocaleTimeString()}</span>
        {/* <span className={styles.box1}>{loggedInUser}</span> */}
        <div className={styles.drop} onClick={() => setShowDropdown(!showDropdown)}>
          {loggedInUser} &#9660;
          {showDropdown && (
            <ul>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          )}
        </div>
      </div>

      {/* Middle: File drop/attach box */}
      <div className={styles.dragndrop} style={{ marginTop: '50px', textAlign: 'center' }}>
        <input
          type="file"
          onChange={(e) => {
            // Handle file attachment logic here
            console.log('File attached:', e.target.files[0]);
          }}
        />
        <p>Drag and drop your files here</p>
      </div>
    </div>
  );
};

export default FileSharing;
