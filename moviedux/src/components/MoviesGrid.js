import React, { useState, useEffect } from 'react';
import '../styles.css';

// We can also use a name instead of default
export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    useEffect((() => {
        const m = ["a", "b", "c"];
        setMovies(m);
    }), []); // empty array defines the condition on which useEffect will be called.
    return (
        <div>{ movies.length }</div>
    );
}