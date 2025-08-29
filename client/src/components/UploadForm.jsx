import React, { useRef, useState } from 'react';
import axios from 'axios';

function UploadForm({ setFileName, setMessage, setPreviewUrl }) {
  const fileInputRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = async (file) => {
    if (!file) return;

    setFileName(file.name);
    setMessage('⏳ Processing...');
    setPreviewUrl(URL.createObjectURL(file)); // for preview

    const formData = new FormData();
    formData.append('video', file);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'edited-video.mp4');
      document.body.appendChild(link);
      link.click();

      setMessage('✅ Video processed and downloaded!');
    } catch (err) {
      console.error(err);
      setMessage('❌ Upload failed or FFmpeg error');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      style={{
        border: dragging ? '2px dashed #2ecc71' : '2px dashed #ccc',
        padding: '2rem',
        borderRadius: '12px',
        backgroundColor: dragging ? '#ecf0f1' : '#f9f9f9',
        color: '#333',
        cursor: 'pointer',
        transition: '0.3s ease',
      }}
      onClick={handleClick}
    >
      <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
        📁 Drag & drop your video here or click to choose
      </p>
      <input
        type="file"
        accept="video/*"
        ref={fileInputRef}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default UploadForm;
