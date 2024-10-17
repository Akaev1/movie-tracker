import React from 'react';

function MovieList({ movies, toggleWatched, onSelectMovie }) {
    return (
        <div>
            <h2>Movie List</h2>
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <div key={movie.id} style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type="checkbox"
                            checked={movie.watched}
                            onChange={() => toggleWatched(movie.id)}
                            style={{ marginRight: '10px' }}
                        />
                        <span
                            onClick={() => onSelectMovie(movie)} // Clickable movie title for details
                            style={{
                                cursor: 'pointer',
                                textDecoration: movie.watched ? 'line-through' : 'none',
                                color: movie.watched ? 'gray' : 'black',
                            }}
                        >
              {movie.title} ({movie.genre})
            </span>
                    </div>
                ))
            ) : (
                <p>No movies found</p>
            )}
        </div>
    );
}

export default MovieList;
