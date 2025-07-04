const express = require('express');
const connectDB = require('./config/db');
const designRoutes = require('./routes/designRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const cartRoutes = require('./routes/CartRoutes')

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', designRoutes);
app.use('/api/user', userRoutes);
app.use('/api' , cartRoutes);



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});