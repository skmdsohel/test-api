const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

// Define your route
app.get('/healthcheck', (req, res) => {
  const issue = req.body;
  console.log("/healthcheck route")
  // console.log(`Issue created: ${issue.key} - ${issue.fields.summary}`);
  // Add your logic to handle the issue created event
  res.status(200).send("ok");
});
app.post('/jira-webhook', (req, res) => {
  const issue = req.body;
  console.log(req.body)
  // console.log(`Issue created: ${issue.key} - ${issue.fields.summary}`);
  // Add your logic to handle the issue created event
  res.status(200).json(req.body);
});

// Load SSL certificate and key
const options = {
  key: fs.readFileSync('certificates/key.pem'),
  cert: fs.readFileSync('certificates/cert.pem')
};

// Create HTTPS server
const httpsServer = https.createServer(options, app);

const PORT = process.env.PORT || 3000;
httpsServer.listen(PORT, () => {
  console.log(`HTTPS Server is running on port ${PORT}`);
});
