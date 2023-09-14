// Register.js
import React, { useState } from 'react';
import './Auth.css'; // Import your CSS file for styling

const Register = ({ onClose }) => {
  const [spaceName, setSpaceName] = useState('');
  const [key, setKey] = useState('');

  const handleRegister = () => {
    // Implement logic to handle registration (e.g., send API request to create a user)
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Create Your Space</h2>
        <input
          type="text"
          placeholder="Enter Space Name"
          value={spaceName}
          onChange={(e) => setSpaceName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <button onClick={handleRegister}>Create Grave</button>
        <span className="close" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default Register;
