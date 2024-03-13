import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Row } from 'react-bootstrap';
// import { MovieContext } from '../contexts/MovieContexts';

const MovieDetail = () => {
    let { _id: movieId } = useParams();
    movieId = movieId - 1;
    const [movie, setMovie] = useState(null); // State to store movie data
    const movieURL = `http://localhost:3000/${movieId}`;

    // const movies = useContext(MovieContext);

    useEffect(() => {
        // Fetch movie data when the component mounts
        fetch(movieURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Set the fetched movie data to the state
                setMovie(data);
            })
            .catch(error => {
                // Handle errors that occurred during the fetch operation
                console.error('Error fetching data:', error);
            });
    }, [movieURL]); // Dependency array to ensure useEffect runs only when movieURL changes

    // If movie is not found or data is still being fetched, display a loading message
    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container movieDetail '>
            <h2>Home /Shows/{movie.title}</h2>
            <img src={movie.bgImg} alt={movie.title} className='movieImg' />
            <Row className='mt-3'>
                <div className='col-md-6 text-start'>
                    <Row>
                        <div className='col-md-4 text-start'>
                            <img src={movie.titleImg} alt={movie.title} className='movieImg' />

                        </div>
                        <div className='col-md-8 text-start'>
                            <p>Title: {movie.title} </p>
                            <p>{movie.description}</p>
                            <p>Length: {movie.length}</p>
                            <p>Release : {movie.year} {movie.date}</p>
                        </div>
                    </Row>
                </div>
                {/* <div className='col-md-6'>
                    <h4>Similar Shows</h4>
                    {movies.map((movie) => (
                        <div className='col-md-3 p-2 movietile' key={movie._id}>
                            <Link to={`/movies/${movie._id}`}>
                                <img className='list-img' src={movie.bgImg} alt={movie.title} />
                                title:{movie.title}
                                <h3>{movie.title}</h3>
                            </Link>
                        </div>
                    ))}

                </div> */}

            </Row>
        </div>
    );
}

export default MovieDetail;
