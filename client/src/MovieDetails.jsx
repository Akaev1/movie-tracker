import React from 'react';

function MovieDetails({ movie, onBack }) {
    return (
        <div>
            <h2>{movie.title}</h2>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Description:</strong> {movie.description}</p>
            <p><strong>Status:</strong> {movie.watched ? 'Watched' : 'Not Watched'}</p>
            <button onClick={onBack}>Back to list</button>
        </div>
    );
}

export default MovieDetails;
