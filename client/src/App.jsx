import { useState } from 'react';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import './App.css'; // Add some styles for the header

function App() {
    const [movies, setMovies] = useState([
        { id: 1, title: 'Interstellar', genre: 'Sci-Fi', watched: false, description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.' },
        { id: 2, title: 'Life of Pi', genre: 'Adventure', watched: false, description: 'A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery.' },
        { id: 3, title: 'Mask', genre: 'Drama', watched: false, description: 'A disfigured teenager struggles with his appearance and the impact it has on his life.' },
        { id: 4, title: 'Saw', genre: 'Horror', watched: false, description: 'Two strangers awaken in a room with no recollection of how they got there, and soon discover they are pawns in a deadly game.' },
    ]);

    const [searchTerm, setSearchTerm] = useState(''); // Search term state
    const [selectedMovie, setSelectedMovie] = useState(null); // To display movie details

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleWatched = (id) => {
        setMovies(
            movies.map((movie) =>
                movie.id === id ? { ...movie, watched: !movie.watched } : movie
            )
        );
    };

    return (
        <div className="App">
            <header>
                <h1>Movie/TV Tracker</h1>
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </header>

            <main>
                {selectedMovie ? (
                    <MovieDetails movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
                ) : (
                    <MovieList movies={filteredMovies} toggleWatched={toggleWatched} onSelectMovie={setSelectedMovie} />
                )}
            </main>
        </div>
    );
}

export default App;
