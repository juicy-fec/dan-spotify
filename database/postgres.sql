DROP DATABASE IF EXISTS top_tracks;

CREATE DATABASE top_tracks;

-- ALTER USER gabor WITH PASSWORD 'gabor';

\c top_tracks

DROP TABLE IF EXISTS tracks;
DROP TABLE IF EXISTS artists;
DROP TABLE IF EXISTS artists_tracks;

CREATE TABLE artists (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL
);

CREATE TABLE tracks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  image VARCHAR(200) NOT NULL,
  playcount INTEGER NOT NULL,
  length VARCHAR(50) NOT NULL
);

CREATE TABLE artists_tracks (
  artist_id INTEGER NOT NULL,
  track_id INTEGER NOT NULL
);

\copy artists(id, name) FROM '~/galvanize/SDC/dan-top-tracks/database/artists.csv' DELIMITER ',' CSV HEADER;
\copy tracks(id, name, image, playcount, length) FROM '~/galvanize/SDC/dan-top-tracks/database/tracks.csv' DELIMITER ',' CSV HEADER;
\copy artists_tracks(artist_id, track_id) FROM '~/galvanize/SDC/dan-top-tracks/database/artists_tracks.csv' DELIMITER ',' CSV HEADER;


-- INSERT INTO artists (name)
-- VALUES
-- ('Test Artist'),
-- ('Test Artist 2');

-- INSERT INTO tracks (name, image, playcount, length) 
-- VALUES
-- ('test track', 'google.com', 5, '3:30'),
-- ('test track2', 'google.com', 2, '2:30');
