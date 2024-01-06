//AssTasks
import React, { useState, useEffect } from 'react';
import styles from "./assTasks.module.css"

const AssTasks = () => {
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
  const [newTask, setNewTask] = useState({
    task: '',
    date: '',
    time: '',
  });

  const handleTaskChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateTask = () => {
    // Handle task creation logic (e.g., send to server, update state)
    console.log('Creating new task:', newTask);
  };

  const handleSendTask = () => {
    // Handle sending task logic (e.g., send email, create calendar event)
    console.log('Sending task:', newTask);
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
      <div>
        <button>Create New Task</button>
        <div>
          <label>Task:</label>
          <input type="text" name="task" onChange={handleTaskChange} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" onChange={handleTaskChange} />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" name="time" onChange={handleTaskChange} />
        </div>
        <button onClick={handleCreateTask}>Enter</button>
      </div>
      <div>
        <button onClick={handleSendTask}>Send Task</button>
      </div>
    </div>
  );
};

export default AssTasks;
