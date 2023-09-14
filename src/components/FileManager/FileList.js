import React from 'react';
import './FileManager.css'; // Import your CSS file for styling

const FileList = ({ files }) => {
  return (
    <div className="file-list-container">
      <h2>Files in Your Space</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
