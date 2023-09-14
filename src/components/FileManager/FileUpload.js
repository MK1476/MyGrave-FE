import React, { useState } from 'react';
import './FileManager.css'; // Import your CSS file for styling

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Implement logic to handle file upload (e.g., send API request to upload the file)
  };

  return (
    <div className="file-upload-container">
      <h2>Upload a File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
