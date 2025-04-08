const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const tripRoutes = require('./routes/tripRoutes');
const exportRoutes = require('./routes/exportRoutes');

app.use('/api/users', userRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/export', exportRoutes);

app.get('/', (req, res) => {
  res.send('SmartTrip Backend Running ✅');
});

module.exports = app;
