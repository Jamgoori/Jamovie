import React, {useEffect} from 'react'
import {movieActions} from "../redux/actions/movieActions";
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
const Home = () => {
    const dispatch = useDispatch();
    const {popularMovies,topRatedMovies,upcomingMovies} = useSelector(state=>state.movie)
    useEffect(()=>{
        dispatch(movieActions.getMovies());
    },[])
  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]}/>}
    </div>
  )
}

export default Home