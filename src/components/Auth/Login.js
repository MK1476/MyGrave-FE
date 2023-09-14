// Login.js
import React, { useState } from 'react';
import './Auth.css'; // Import your CSS file for styling

const Login = ({ onClose }) => {
  const [key, setKey] = useState('');

  const handleLogin = () => {
    // Implement logic to handle login (e.g., send API request to authenticate user)
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Login to Your Space</h2>
        <input
          type="password"
          placeholder="Enter Your Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <button onClick={handleLogin}>Unlock</button>
        <span className="close" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default Login;
