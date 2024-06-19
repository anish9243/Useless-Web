const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors'); // Import cors module

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

app.use(express.static('public'));
app.use(cors()); // Use cors middleware

app.get('/api/random-goat', async (req, res) => {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?query=goat&client_id=${unsplashAccessKey}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching the image:', error);
        res.status(500).json({ error: 'Failed to fetch image' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
