const express = require('express');
const fs = require('fs'); // Membutuhkan modul filesystem untuk membaca file
const app = express();
const cors = require('cors'); // Setelah menginstal dengan npm install cors
app.use(cors());
const port = process.env.PORT || 3000;
app.use(express.json());
const path = require('path');
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, '..', 'event.json'), 'utf8');
    const events = JSON.parse(data);
    res.status(200).json(events);
  } catch (err) {
    res.status(500).send({ error: 'Tidak dapat membaca file event.json' });
  }
};
