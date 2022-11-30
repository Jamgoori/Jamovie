import React,{useEffect} from 'react'
import { useSelector } from "react-redux";
import Banner from './Banner'
const {movieDetail} = useSelector(state=>state.movie)
const Moviedetails = () => {
    const getMovieDetail=()=>{

    }
    useEffect(()=>{
        getMovieDetail()
    })
  return (
    <>
    <Banner/>
    </>
  )
}

export default Moviedetails