import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Login from './Login'; // Create Login.js
import Register from './Register'; // Create Register.js

const Space = () => {
  const { spaceName } = useParams();
  const [userExists, setUserExists] = useState(false);

  // Check if the user exists in the space (you can implement this logic)

  return (
    <div className="space-container">
      <h2>Welcome to Space: {spaceName}</h2>
      {userExists ? <Login /> : <Register />}
    </div>
  );
};

export default Space;
