const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());

// Endpoint to get all events
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

// Endpoint to filter events by 'D' attribute
app.get('/api/events/search', (req, res) => {
  const { d } = req.query;

  if (!d) {
    return res.status(400).json({ error: 'Parameter pencarian "d" harus disediakan' });
  }

  fs.readFile(path.join(__dirname, 'api', 'event.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: 'Tidak dapat membaca file event.json' });
    }

    try {
      const events = JSON.parse(data);
      const filteredEvents = events.filter(event =>
        event.D.toLowerCase().includes(d.toLowerCase())
      );
      res.json(filteredEvents);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Terjadi kesalahan dalam memproses data' });
    }
  });
});

// Default endpoint for other routes
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'api', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
