require('dotenv').config();

const express = require('express');
const logger = require('./logger');
const client = require('prom-client');
const app = express();

const port = process.env.PORT || 3000;

client.collectDefaultMetrics();

app.get('/', (req, res) => {
  res.send('Hello, Devops Intern Day 3');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    logger.info(`Server running on port ${port}`);
  });
}

module.exports = app;
