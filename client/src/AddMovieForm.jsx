import React, { useState } from 'react';

function AddMovieForm({ addMovie }) {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && genre) {
            addMovie(title, genre);
            setTitle('');
            setGenre('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Movie/TV Series Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            />
            <button type="submit">Add Movie</button>
        </form>
    );
}

export default AddMovieForm;
