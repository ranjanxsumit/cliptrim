import React, { useState } from 'react';
import UploadForm from './components/UploadForm';

function App() {
  const [fileName, setFileName] = useState('');
  const [message, setMessage] = useState('');
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleClear = () => {
    setFileName('');
    setMessage('');
    setPreviewUrl(null);
    window.location.reload(); // quick reset
  };

  const handlePreview = () => {
    if (!previewUrl) return;
    const videoElement = document.getElementById('video-preview');
    if (videoElement) videoElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to right, #2c3e50, #4ca1af)',
      color: '#fff',
      fontFamily: 'Segoe UI, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🎬 ClipTrim</h1>
        <p style={{ fontSize: '1.2rem' }}>
          Upload your video, trim it with FFmpeg, and preview or download the result instantly.
        </p>
      </header>

      <div style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: '600px',
        textAlign: 'center'
      }}>
        <UploadForm
          setFileName={setFileName}
          setMessage={setMessage}
          setPreviewUrl={setPreviewUrl}
        />
        {fileName && <p style={{ marginTop: '1rem' }}>📁 Selected: {fileName}</p>}
        {message && (
          <p style={{
            color: message.includes('✅') ? '#2ecc71' : '#e74c3c',
            fontWeight: 'bold',
            marginTop: '1rem'
          }}>
            {message}
          </p>
        )}

        <div style={{ marginTop: '1.5rem' }}>
          <button
            onClick={handleClear}
            style={{
              padding: '0.6rem 1.2rem',
              marginRight: '1rem',
              backgroundColor: '#e74c3c',
              border: 'none',
              borderRadius: '6px',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            ❌ Clear
          </button>
          <button
            onClick={handlePreview}
            disabled={!previewUrl}
            style={{
              padding: '0.6rem 1.2rem',
              background: 'linear-gradient(to right, #27ae60, #2ecc71)',
              border: 'none',
              borderRadius: '6px',
              color: '#fff',
              cursor: previewUrl ? 'pointer' : 'not-allowed'
            }}
          >
            👁️ Preview
          </button>
        </div>
      </div>

      {previewUrl && (
        <div id="video-preview" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h2>🎥 Preview</h2>
          <video
            src={previewUrl}
            controls
            style={{ maxWidth: '90%', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}
          />
        </div>
      )}

      <footer style={{ marginTop: '3rem', fontSize: '0.9rem', opacity: 0.8 }}>
        Made with ❤️ by Sumit · Powered by FFmpeg
      </footer>
    </div>
  );
}

export default App;
