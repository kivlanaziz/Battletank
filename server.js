const express = require('express');
const path = require('path');

const app = express();

app.use('/public/assets', express.static('./public/assets'));
app.use('/public/css', express.static('./public/css'));
app.use('/public/js', express.static('./public/js'));
app.use('/public/lib', express.static('./public/lib'));

const PORT = 8080;
const HOSTNAME = 'localhost';

app.get('/sample', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running on http://${HOSTNAME}:${PORT}`);
});