import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import AboutUs from './Component/About/About';
import Jobs from './Component/Jobs/Jobs';
import Contact from './Component/Contact/Contact';
import Login from './Component/Login/Login';
import './App.css'; 

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
   
 <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              {loggedInUser ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
