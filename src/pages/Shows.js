import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../config';

function Movies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(`${API_BASE_URL}/shows`)
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    if (!movies) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <div className='carousel-container'>
                <h3>TV Shows</h3>
                <Row>
                    {movies.map((movie) => (
                        <div className='col-md-3 p-2 movietile' key={movie.id}>
                            <Link to={`/shows/${movie.id}`}>
                                <img className='list-img' src={movie.bgImg} alt={movie.title} />
                                {movie.title}
                                {/* <h3>{movie.title}</h3> */}
                            </Link>
                        </div>
                    ))}
                </Row>

            </div>
        </Container>
    );
}

export default Movies;
