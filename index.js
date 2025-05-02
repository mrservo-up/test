const express = require('express');
const serverless = require("serverless-http");
const path = require('path');
const app = express();
// const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Default route to serve index.html
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// // Start server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

module.exports.handler = serverless(app);