require('dotenv').config();

const express = require('express');
const logger = require('./logger');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Devops Intern Day 3');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});