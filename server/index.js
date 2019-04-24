const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const Artist = require('../database/mongo/models/Artist');
const Track = require('../database/mongo/models/Track');

mongoose
  .connect('mongodb://localhost:27017/top_tracks', { useNewUrlParser: true })
  .then(() => console.log('Mongo connected'))
  .catch(console.error);

const app = express();

// Middleware Setup

app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
app.use(morgan('dev'));

// Routes Setup

app.post('/init', async (req, res) => {
  try {
    const newA = new Artist({ name: '123 ' });
    const artist = await newA.save();

    const newT = new Track({
      name: '123',
      image: '123',
      playcount: 123,
      length: '123',
      artist_id: artist._id,
    });

    const track = await newT.save();

    res.status(201).json({ artist, track });
  } catch (err) {
    res.status(500).json({ message: 'Could not save' });
  }
});

// Server Setup

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}...`));
