import React, { useState, useEffect } from 'react';
import styles from "./meeting.module.css"
// import { VideoConference } from 'react-video-conference';

const Meeting = () => {
  // State variables
  const [currentTime, setCurrentTime] = useState(new Date());
    const [loggedInUser, setLoggedInUser] = useState('chirag'); // Replace with your user authentication logic
    const [showDropdown, setShowDropdown] = useState(false);
  
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

  // Render
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
      <div className="chat-section">
        <div className="chat-section">
            <div className="chat-container">
                <div className="chat-messages">
                {/* Display chat messages here */}
                <div className="message">
                    <span className="sender">Chirag:</span> Hello there!
                </div>
                <div className="message">
                    <span className="sender">Aka:</span> Hi John!
                </div>
                {/* Add more messages as needed */}
                </div>
                <div className="chat-input">
                <input type="text" placeholder="Type your message..." />
                <button>Send</button>
                </div>
            </div>
        </div>
    </div>
        {/* <div className="virtual-meeting-section">
            <div className="virtual-meeting-section">
                <VideoConference
                    // Pass necessary props such as room ID, user details, etc.
                    roomId="your-room-id"
                    user={{ name: "John", userId: "john123" }}
                />
            </div>
        </div> */}
    </div>
  );
};

export default Meeting;
