
import React, { createContext, useState, useEffect } from 'react';
import API_BASE_URL from '../config';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/movies`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.data);
                // console.log(data.data);
            }
            )
            .catch(error => console.error('Error fetching movies:', error));

    }, []);

    return (
        <MovieContext.Provider value={movies}>
            {children}
        </MovieContext.Provider>
    );
};

export { MovieContext, MovieProvider };
