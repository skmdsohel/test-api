const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/jira-webhook', (req, res) => {
  const issueData = req.body;

  console.log('Issue created:', issueData);

  // Process the issue data here
  // For example, send it to another service or store it in a database

  res.status(200).send('Webhook received');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
