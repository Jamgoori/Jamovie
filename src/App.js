import './App.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Navbar from "./components/Navbar";
import Movies from './pages/Movies';
import {Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className='body'>
            <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<MovieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
