const express = require('express');
const fs = require('fs');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello World! Dzioni!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.get('/briedis', (req, res) => {
    // read file synchronously
    const data = fs.readFileSync('./html/briedis.html', 'utf8');
    res.send(data);
});