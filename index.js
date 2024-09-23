const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB Connection using Mongoose
mongoose.connect('mongodb://localhost:27017/techHub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log('Error connecting to MongoDB:', err));

// Basic route to test server
app.get('/', (req, res) => {
  res.send('Hello, Express and Mongoose!');
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
