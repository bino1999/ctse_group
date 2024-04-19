const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoute = require('./route/productRoute');
const { connectToDatabase } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use('/products', productRoute);

// Connect to MongoDB
connectToDatabase();

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
