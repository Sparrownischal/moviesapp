import FeaturedMovies from '../components/FeaturedMovies';
import FeaturedShows from '../components/FeaturedShows';
import HeroCarousel from '../components/HeroCarousel';
import { MovieProvider } from '../contexts/MovieContexts';

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <HeroCarousel></HeroCarousel>
        <FeaturedMovies></FeaturedMovies>
        <FeaturedShows></FeaturedShows>
      </MovieProvider>
    </div>
  );
}
export default App;
