import React, {useEffect} from 'react'
import {movieActions} from "../redux/actions/movieActions";
import { useDispatch } from 'react-redux';
const Home = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(movieActions.getMovies());
    },[])
  return (
    <div>Home</div>
  )
}

export default Home