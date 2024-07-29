import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import app from './app';  // Import the app object using ES Module syntax

// Load environment variables
dotenv.config();

// CORS middleware setup
app.use(cors());
app.use(express.json());

// Server port setup
const PORT = process.env.APP_PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}...`);
});