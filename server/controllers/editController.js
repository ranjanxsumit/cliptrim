const path = require('path');
const fs = require('fs');
const { runFFmpeg } = require('../services/ffmpegService');

exports.editVideo = async (req, res) => {
  const inputPath = req.file.path;
  const outputPath = path.join(__dirname, '..', 'uploads', `edited-${Date.now()}.mp4`);

  try {
    await runFFmpeg(inputPath, outputPath);
    res.download(outputPath, () => {
      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);
    });
  } catch (err) {
    console.error('FFmpeg error:', err);
    res.status(500).send('Video processing failed');
  }
};
