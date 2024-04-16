import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import MovieDetail from './pages/MovieDetail';
import ShowDetail from './pages/ShowDetail';
import UserHome from './pages/UserHome';
import SearchPage from './pages/SearchPage';
// import { MovieProvider } from './contexts/MovieContexts';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/movies' element={<Movies />}></Route>
          <Route exact path='/shows' element={<Shows />}></Route>
          {/* <Route exact path="/movies/:id" element={<MovieDetail />} /> */}
          <Route exact path="/movies/:_id" element={<MovieDetail />} />
          <Route exact path="/shows/:_id" element={<ShowDetail />} />
          <Route exact path='/dashboard' element={<UserHome />} />
          <Route exact path='/searchResults' element={<SearchPage />}/>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}
export default App;
