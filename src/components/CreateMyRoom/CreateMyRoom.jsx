import React, { useState,useEffect } from 'react';
import styles from "./createMyRoom.module.css";

const CreateMyRoom = () => {
  const [roomName, setRoomName] = useState('');
  const [description, setDescription] = useState('');
  const [capacity, setCapacity] = useState('');
  const [roomType, setRoomType] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loggedInUser, setLoggedInUser] = useState('Akash');
  const [showDropdown, setShowDropdown] = useState(false);

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

  const handleSubmit = () => {
    // Perform actions based on the selected room type
    if (roomType === 'public') {
      // Logic for creating a room in the "featured room" section
      console.log('Creating room in featured room section');
    } else if (roomType === 'private') {
      // Logic for creating a room in the "my rooms" section
      console.log('Creating room in my rooms section');
    }
  };

  return (
    <div>
      {/* Realtime Date */}
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

      {/* Form */}
      <div className={styles.middle}>
        <form>
          {/* Room Name */}
          <label>
            Room Name:
            <input
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
          </label>

          {/* Description */}
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          {/* Capacity */}
          <label>
            Capacity:
            <input
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </label>

          {/* Room Type */}
          <label>
            Type:
            <input
              type="checkbox"
              value="public"
              onChange={() => setRoomType('public')}
            />
            Public
            <input
              type="checkbox"
              value="private"
              onChange={() => setRoomType('private')}
            />
            Private
          </label>

          {/* Submit Button */}
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateMyRoom;
