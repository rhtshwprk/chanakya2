import React, { useState } from 'react';

function Announce() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const storageKey = `uploaded_${Date.now()}_${selectedFile.name}`;
      localStorage.setItem(storageKey, JSON.stringify(selectedFile));
      alert('File uploaded successfully!');
      
      // Clear the selected file and reset the input field
      setSelectedFile(null);
      document.getElementById('fileInput').value = '';
    } 
    else {
      alert('Please select a file first.');
    }
  };

  return (
    <div className="file-upload-container">
    
      <div className="file-input-container">
        <label htmlFor="fileInput" className="label">Select a File:</label>
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          accept=".pdf, .doc, .docx"
          className="file-input"
        />
        <button onClick={handleUpload} className="upload-button">Upload</button>
      </div>
      {selectedFile && (
        <div className="file-info">
          <p className="info-text">Selected File: {selectedFile.name}</p>
          <p className="info-text">File Size: {selectedFile.size} bytes</p>
        </div>
      )}
    </div>
    
  );
}

export default Announce;