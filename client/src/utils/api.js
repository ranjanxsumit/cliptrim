import axios from 'axios';

export const uploadVideo = (formData) =>
  axios.post('http://localhost:5000/api/upload', formData);
