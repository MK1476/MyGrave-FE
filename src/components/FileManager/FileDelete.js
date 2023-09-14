import React, { useState } from 'react';
import './FileManager.css'; // Import your CSS file for styling

const FileDelete = ({ files, onDelete }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleCheckboxChange = (e, file) => {
    const fileId = file.id;
    if (e.target.checked) {
      setSelectedFiles([...selectedFiles, fileId]);
    } else {
      setSelectedFiles(selectedFiles.filter((id) => id !== fileId));
    }
  };

  const handleDelete = () => {
    // Implement logic to delete selected files (e.g., send API request to delete files)
    onDelete(selectedFiles);
    setSelectedFiles([]);
  };

  return (
    <div className="file-delete-container">
      <h2>Delete Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxChange(e, file)}
              checked={selectedFiles.includes(file.id)}
            />
            {file.name}
          </li>
        ))}
      </ul>
      <button onClick={handleDelete}>Delete Selected</button>
    </div>
  );
};

export default FileDelete;
