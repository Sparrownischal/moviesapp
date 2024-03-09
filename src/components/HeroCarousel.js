import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContexts';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const movies = useContext(MovieContext);
  const latestMovies = movies.slice(0,5);
  return (
    <div className='carousel-container'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {latestMovies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <img className='carousel-img' src={movie.bgImg} alt={movie.title} />
            <Carousel.Caption>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;