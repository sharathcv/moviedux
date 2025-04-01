import React, { useState, useEffect } from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

// We can also use a name instead of default
export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    useEffect((() => {

        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data));

    }), []); // empty array defines the condition on which useEffect will be called.
    return (
        <div className='movies-grid'>
            {
                movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id}></MovieCard>
                ))
            }
        </div>
    );
}