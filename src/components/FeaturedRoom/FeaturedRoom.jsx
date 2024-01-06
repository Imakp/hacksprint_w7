import React, { useState, useEffect } from 'react';
import styles from './featuredRoom.module.css';
import { useNavigate } from 'react-router-dom';

const FeaturedRoom = () => {
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

  const handleRoomButtonClick = (roomName) => {
    // Implement navigation to the room page with roomName
    console.log(`Navigating to ${roomName} page`);
    navigate('/current')
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
        <button onClick={() => handleRoomButtonClick('Room1')}>
          <div className={styles.room}>Operating System</div>
          <div className={styles.desc}>96 active</div>
        </button>

        <button onClick={() => handleRoomButtonClick('Room2')}>
          <div className={styles.room}>AI/ML</div>
          <div className={styles.desc}>106 active</div>
        </button>

        <button onClick={() => handleRoomButtonClick('Room3')}>
          <div className={styles.room}>Blockchain</div>
          <div className={styles.desc}>143 active</div>
        </button>
      </div>
    </div>
  );
};

export default FeaturedRoom;
