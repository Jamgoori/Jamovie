import './App.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';
import {Routes, Route} from "react-router-dom"
import TopNav from './components/TopNav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='body'>
      <TopNav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<MovieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
