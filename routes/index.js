// routes/index.js
import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/events', (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'data', 'events.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send({ error: 'Tidak dapat membaca file event.json' });
    }
    res.json(JSON.parse(data));
  });
});

export default router;
