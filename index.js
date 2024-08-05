// app.js

const express = require('express');
const app = express();
const port = 3000;

// Define a GET endpoint
app.get('/postWebhookData', (req, res) => {
  console.log("hello world")
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
