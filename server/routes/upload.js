const express = require('express');
const multer = require('multer');
const { editVideo } = require('../controllers/editController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('video'), editVideo);

module.exports = router;
