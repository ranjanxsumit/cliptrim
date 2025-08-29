const express = require('express');
const cors = require('cors');
const uploadRoutes = require('./routes/upload');
require('dotenv').config();

const app = express();
app.use(cors());
app.use('/api/upload', uploadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
