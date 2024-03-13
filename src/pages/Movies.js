import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Movies() {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        fetch('db.json')
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
                <h3>Movies</h3>
                <Row>
                    {movies.map((movie) => (
                        <div className='col-md-3 p-2 movietile' key={movie._id}>
                            <Link to={`/movies/${movie._id}`}>
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
