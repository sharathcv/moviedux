import React from 'react';
import '../styles.css';

// We can also use a name instead of default
export default function MovieCard({movie}) {

    const handleError = (e) => {
        e.target.src = "images/default.jpg";
    }

    const getRatingClass = (rating) => {
        if (rating >= 8) {
            return 'rating-good';
        } if (rating >=5 && rating < 8) {
            return 'rating-ok';
        }

        return 'rating-bad';
    }

    return (
        <div key={movie.id} className="movie-card">
            <img src={`images/${movie.image}`} alt={movie.title} onError={handleError}/>
            <div className='movie-card-info'>
                <h3 className='movie-card-title'>{movie.title}</h3>
                <h3 className='movie-card-genre'>{movie.genre}</h3>
                <h3 className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</h3>
            </div>
        </div>
    );
}