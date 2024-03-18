const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/events', (req, res) => {
  fs.readFile(path.join(__dirname, 'api', 'event.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: 'Tidak dapat membaca file event.json' });
    }
    const events = JSON.parse(data);
    res.status(200).json(events);
  });
});

app.use('/', (req, res) => {
  res.json({
    author: "renn-shiro",
    message: "Welcome to the API",
    routes: {
      events: "/api/events",
    },
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
