import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './dashboard.module.css';

const Dashboard = () => {
 const [currentTime, setCurrentTime] = useState(new Date());
 const [loggedInUser, setLoggedInUser] = useState('Akash');
 const [showDropdown, setShowDropdown] = useState(false);
 const navigate = useNavigate();

 useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
 }, []);

 const handleLogout = () => {
    // Add logic for logout here
    console.log('User logged out');
 };

 const handleCreateRoom = () => {
    // Add logic for navigating to create room page here
    console.log('Navigating to create room page');
    navigate('/create-room');
 };

 const handleMyRooms = () => {
    // Add logic for navigating to my rooms page here
    console.log('Navigating to my rooms page');
    navigate('/my-rooms');
 };

 const handleFeaturedRooms = () => {
    // Add logic for navigating to featured rooms page here
    console.log('Navigating to featured rooms page');
    navigate('/featured-rooms');
 };

 return (
    <div className={styles.container}>
      <div className={styles.box}>
        <span className={styles.box1}>{currentTime.toLocaleDateString()}</span>
        <span className={styles.box2}>{currentTime.toLocaleTimeString()}</span>
        <div className={styles.drop} onClick={() => setShowDropdown(!showDropdown)}>
          {loggedInUser} &#9660;
          {showDropdown && (
            <ul>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          )}
        </div>
      </div>

      <div className={styles.container1}>
        <div className={styles.bigBox} onClick={handleCreateRoom}>+</div>
        <div className={styles.bigBox} onClick={handleMyRooms}>my rooms</div>
        <div className={styles.bigBox} onClick={handleFeaturedRooms}>featured rooms</div>
      </div>
    </div>
 );
};

export default Dashboard;