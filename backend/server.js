const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const sensorRoutes = require('./routes/sensorRoutes');
const app = express();

// Load environment variables
dotenv.config();

// Morgan for logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// CORS, allows the frontend to access the backend
app.use(cors());
// Parse JSON and URL-encoded query string data
app.use(express.json());
// Parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/sensor', sensorRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
