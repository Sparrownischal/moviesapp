import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MovieContext } from '../contexts/MovieContexts';

const FeaturedMovies = () => {
  // const history = useHistory();

  // const handleMovieClick = (movieId) => {
  //   history.push('/movies/${movieId}');
  // };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1 
        }
      }
    ]
  };
  const movies = useContext(MovieContext);

  return (
    <div className="featured-movies">
      <h2 className='text-start'>Featured Movies</h2>
      <Slider {...settings}>
        {movies.map(movie => (
          <div className='movie-slide' key={movie.id}
          >
            {/* onClick={() => handleMovieClick(movie.id)} */}
            <img className='slic-img' src={movie.bgImg} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeaturedMovies;