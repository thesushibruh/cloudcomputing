const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');

// Connect to MongoDB
connectDB();

// Middleware
// app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/pet', require('./routes/petRoutes'));
app.use('/api/walker', require('./routes/walkerRoute'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
