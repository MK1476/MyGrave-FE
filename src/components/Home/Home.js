import React from 'react';
import './Home.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="parallax">
        <h1>Take Things to Your Grave!</h1>
      </div>
      <div className="content">
        <h2>Create Your Space</h2>
        <p>Securely store your files in your own space.</p>
        <div className="action-container">
          <input type="text" placeholder="Enter Your Space Name" />
          <Link to="/mygrave-app-storage">
            <button>Go</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
