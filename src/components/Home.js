import React from 'react'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcommingMovies from '../hooks/useUpcommingMovies';
import { useSelector } from 'react-redux';

const Home = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcommingMovies();
    
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[2];

    const {original_title, overview, id} = mainMovie;
  return (
    <div>
      <>
      <MainContainer original_title={original_title} overview={overview} id={id}/>
      <SecondaryContainer/>
      </>
    </div>
  )
}

export default Home;
