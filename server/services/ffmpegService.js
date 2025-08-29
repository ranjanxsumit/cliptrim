const { exec } = require('child_process');

exports.runFFmpeg = (inputPath, outputPath) => {
  return new Promise((resolve, reject) => {
    const cmd = `ffmpeg -i ${inputPath} -vf "scale=640:360" -c:v libx264 -preset fast -crf 28 ${outputPath}`;
    exec(cmd, (err, stdout, stderr) => {
      if (err) return reject(err);
      resolve(stdout);
    });
  });
};
