# cliptrim
Full-stack video editing app using React, Node.js, and FFmpeg


<img width="1889" height="835" alt="image" src="https://github.com/user-attachments/assets/8936281e-e5fc-4ae9-a091-1e3384923b1e" />

# 🎬 ClipTrim

ClipTrim is a full-stack video editing web application that allows users to upload, preview, trim, and download videos using FFmpeg. Built with React and Node.js, it offers a clean UI, drag-and-drop support, and backend-powered video processing.

---

## 🚀 Features

- 📁 Upload videos via drag-and-drop or file picker
- 👁️ Preview selected video before processing
- ✂️ Trim videos using timestamp inputs (slider coming soon)
- 🔄 Split videos into segments (planned)
- ✅ Download processed videos instantly
- ⚙️ FFmpeg-powered backend for fast, reliable editing

---

## 🧱 Tech Stack

| Layer       | Technology                     |
|-------------|--------------------------------|
| Frontend    | React, Axios, HTML/CSS         |
| Backend     | Node.js, Express, Multer       |
| Video Engine| FFmpeg                         |
| Deployment  | Render (Frontend + Backend)    |
| Versioning  | Git & GitHub                   |

---

## 📦 Folder Structure

<img width="430" height="494" alt="image" src="https://github.com/user-attachments/assets/e7d61e6f-a093-49f7-ae29-76e35ef103db" />


---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/ranjanxsumit/cliptrim.git
cd cliptrim

2. Install dependencies
cd client && npm install
cd ../server && npm install

3. Start development servers

# In one terminal
cd server
npm start

# In another terminal
cd client
npm start

🌐 Deployment (Render)
Backend (Web Service)
Root Directory: server

Build Command: npm install

Start Command: node index.js

Ensure FFmpeg is available

Frontend (Static Site)
Root Directory: client

Build Command: npm install && npm run build

Publish Directory: build

Update API URLs in client/src/components/UploadForm.jsx to point to your Render backend.

🧠 Future Enhancements
🎚️ Slider-based trimming UI

🔪 Video splitting by timestamp or duration

🖼️ Thumbnail previews

🧼 Upload cleanup and file management

🌍 Multi-language support

👨‍💻 Author
Sumit Ranjan Backend Developer | Full-Stack Enthusiast

