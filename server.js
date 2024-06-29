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

// Endpoint to filter events by 'C', 'D', and 'E' attributes
app.get('/api/events/search', (req, res) => {
  const { c, d, e } = req.query;

  if (!c && !d && !e) {
    return res.status(400).json({ error: 'Setidaknya satu parameter pencarian (c, d, e) harus disediakan' });
  }

  fs.readFile(path.join(__dirname, 'api', 'event.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: 'Tidak dapat membaca file event.json' });
    }

    try {
      const events = JSON.parse(data);
      let filteredEvents = events;

      if (c) {
        filteredEvents = filteredEvents.filter(event =>
          event.C && event.C.toLowerCase().includes(c.toLowerCase())
        );
      }
      if (d) {
        filteredEvents = filteredEvents.filter(event =>
          event.D && event.D.toLowerCase().includes(d.toLowerCase())
        );
      }
      if (e) {
        filteredEvents = filteredEvents.filter(event =>
          event.E && event.E.toLowerCase().includes(e.toLowerCase())
        );
      }

      res.json(filteredEvents);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Terjadi kesalahan dalam memproses data' });
    }
  });
});

// Middleware untuk menyajikan file statis dari direktori 'api'
app.use(express.static(path.join(__dirname, 'api')));

// Handler untuk route root, mengirimkan file index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'api', 'index.html'));
});

// Handler untuk route '/dashboard.html', mengirimkan file dashboard.html
app.get('/dashboard.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'api', 'dashboard.html'));
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
