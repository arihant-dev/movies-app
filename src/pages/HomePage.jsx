import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Row from '../components/Row'
import SkeletonCard from '../components/SkeletonCard'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies, getMoviesData, getMoviesStatus } from '../slices/movieSlice'

const HomePage = () => {
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingBanner, setLoadingBanner] = useState(true);

  const dispatch = useDispatch()
  const status = useSelector(getMoviesStatus)
  const movies = useSelector(getMoviesData)



  useEffect(() => {
    setLoadingCategories(true);
    setLoadingBanner(true);
    const timer = setTimeout(() => {
      setLoadingCategories(false);
      setLoadingBanner(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getMovies())
    }
  }, []);

  return (
    <div className='page' style={{backgroundColor: "var(--bg-color)", overflow: "hidden"}}>
      <Navbar />
      {loadingBanner ? (
        <SkeletonCard />
      ) : (
        <Banner />
      )}

      {loadingCategories ? (
        <SkeletonCard />
      ) : (
        Object.keys(movies).map((category) => (
          <Row key={category} title={category} movies={movies[category]}/>
        ))
      )}
    </div>
  )
}

export default HomePage
