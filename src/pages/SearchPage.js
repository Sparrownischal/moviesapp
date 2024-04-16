import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import API_BASE_URL from '../config';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SearchComponent() {
  const location = useLocation();
  const [movieResults, setMovieResults] = useState([]);
  const [showResults, setShowResults] = useState([]);
  
  const [searchError, setSearchError] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.get('keyword');
    if (keyword) {
      fetchSearchResults(keyword);
    }
  }, [location]);

  const fetchSearchResults = async (keyword) => {
    try {
      const response = await fetch(`${API_BASE_URL}/search?keyword=${encodeURIComponent(keyword)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      setMovieResults(data.movies);
      setShowResults(data.tvShows);
      setSearchError(null);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchError('Failed to fetch search results');
    }
  };

  return (
    <Container>
            <div className='carousel-container'>
                <h3>Movies</h3>
                    {movieResults.length == 0 && <p>Not Found</p>}
                <Row>
                    {movieResults.map((movie) => (
                        <div className='col-md-3 p-2 movietile' key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>
                                <img className='list-img' src={movie.bgImg} alt={movie.title} />
                                {movie.title}
                            </Link>
                        </div>
                    ))}
                </Row>
                <h3>TV Shows</h3>
                    {showResults.length == 0 && <p>Not Found</p>}
                <Row>
                    {showResults.map((show) => (
                        <div className='col-md-3 p-2 movietile' key={show.id}>
                            <Link to={`/shows/${show.id}`}>
                                <img className='list-img' src={show.bgImg} alt={show.title} />
                                {show.title}
                            </Link>
                        </div>
                    ))}
                </Row>
            </div>
        </Container>
  );
}

export default SearchComponent;
