const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./public'));

const PORT = 8080;
const HOSTNAME = 'localhost';

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/game.html'));
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running on http://${HOSTNAME}:${PORT}`);
});