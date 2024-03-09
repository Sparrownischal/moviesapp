
import React, { createContext, useState, useEffect } from 'react';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('db.json')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    return (
        <MovieContext.Provider value={movies}>
            {children}
        </MovieContext.Provider>
    );
};

export { MovieContext, MovieProvider };
