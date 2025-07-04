const express = require('express');
const app = express();
const port = 3000;

let totalRequestCount = 0;

app.use((req, res, next) => {
  totalRequestCount++;
  next();
});

app.get('/requests', (req, res) => {
  res.json({ totalRequests: totalRequestCount });
});

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.listen(3001, () => {
  console.log(`Server running at http://localhost:3001`);
});
