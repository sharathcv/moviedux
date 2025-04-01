import React from 'react';
import '../styles.css';

// We can also use a name instead of default
export default function MovieCard({movie}) {
    return (
        <div key={movie.id} className="movie-card">
            <img src={`images/${movie.image}`} alt={movie.title}/>
            <div className='movie-card-info'>
                <h3 className='movie-card-title'>{movie.title}</h3>
                <h3 className='movie-card-genre'>{movie.genre}</h3>
                <h3 className='movie-card-rating'>{movie.rating}</h3>
            </div>
        </div>
    );
}