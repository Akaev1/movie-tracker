const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let movies = [
    { id: 1, title: 'Inception', genre: 'Sci-Fi', watched: false },
    { id: 2, title: 'Breaking Bad', genre: 'Drama', watched: true },
];

// Fetch all movies
app.get('/api/movies', (req, res) => {
    res.json(movies);
});

// Add a new movie
app.post('/api/movies', (req, res) => {
    const { title, genre } = req.body;
    const newMovie = { id: movies.length + 1, title, genre, watched: false };
    movies.push(newMovie);
    res.json(newMovie);
});

// Toggle watched status
app.put('/api/movies/:id', (req, res) => {
    const { id } = req.params;
    const movie = movies.find((m) => m.id == id);
    if (movie) {
        movie.watched = !movie.watched;
        res.json(movie);
    } else {
        res.status(404).send('Movie not found');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});
