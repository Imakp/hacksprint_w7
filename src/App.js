import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup'
import PasswordReset from './components/PasswordReset/PasswordReset'
import Dashboard from './components/Dashboard/Dashboard'
import CreateMyRoom from './components/CreateMyRoom/CreateMyRoom'
import MyRooms from './components/MyRooms/MyRooms'
import FeaturedRoom from './components/FeaturedRoom/FeaturedRoom'
import CurrentRoom from './components/CurrentRoom/CurrentRoom'
import FileSharing from './components/FileSharing/FileSharing'
import AssTasks from './components/AssTasks/AssTasks'
import Meeting from './components/Meeting/Meeting'


function App() {
  return (
      <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<PasswordReset />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/create-room" element={<CreateMyRoom/>} />
          <Route path="/my-rooms" element={<MyRooms/>} />
          <Route path="/featured-rooms" element={<FeaturedRoom/>} />
          <Route path="/current" element={<CurrentRoom/>} />
          <Route path="/file" element={<FileSharing/>} />
          <Route path="/task" element={<AssTasks/>} />
          <Route path="/chat" element={<Meeting/>} />
        </Routes>
    </Router>
      </div>
  );
}

export default App;
