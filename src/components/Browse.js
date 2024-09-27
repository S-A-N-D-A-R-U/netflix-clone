import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcommingMovies from '../hooks/useUpcommingMovies';
import useAringTodayTVSeries from '../hooks/useAiringTodayTVSeries';


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();
  useAringTodayTVSeries();
  

  return (
    <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse
