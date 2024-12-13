const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Home route to show the server's status
app.get('/', async (req, res) => {
    try {
        // Example: Fetch Minecraft server status
        // You can modify this section to call an API or interact with the server using a library.
        const serverStatus = await axios.get('http://localhost:25565');  // Change this to match your server details
        res.render('index', { status: 'Server is online', ip: 'localhost', port: 25565 });
    } catch (error) {
        res.render('index', { status: 'Server is offline', ip: 'localhost', port: 25565 });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Minecraft Panel is running at http://localhost:${port}`);
});
