import React, { useState, useEffect } from 'react';
import styles from './currentRoom.module.css';
import { useNavigate } from 'react-router-dom';

const CurrentRoom = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loggedInUser, setLoggedInUser] = useState('chirag'); // Replace with your user authentication logic
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Implement logout functionality
    console.log('User logged out');
  };

  const handleRoomButtonClick1 = () => {
    navigate('/file')
  };
  const handleRoomButtonClick2 = () => {
    navigate('/task')
  };
  const handleRoomButtonClick3 = () => {
    navigate('/chat')
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

      <div className={styles.room1}>
        <button onClick={handleRoomButtonClick1}>
          <div className={styles.room}>File Sharing</div>
          <div className={styles.desc}>You can Share Files Here</div>
        </button>

        <button onClick={handleRoomButtonClick2}>
          <div className={styles.room}>Task Manager</div>
          <div className={styles.desc}>Scheduling of Task</div>
        </button>

        <button onClick={handleRoomButtonClick3}>
          <div className={styles.room}>Live/Text Meet</div>
          <div className={styles.desc}>Interection with Friend and Colleagues</div>
        </button>
      </div>
    </div>
  );
};

export default CurrentRoom;
