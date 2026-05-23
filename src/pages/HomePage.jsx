import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import { movieApi } from '../constants/axios'
import { movieRequests } from '../constants/requests'
import Row from '../components/Row'
import SkeletonCard from '../components/SkeletonCard'

const HomePage = () => {
  const [movies, setMovies] = useState({})
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingBanner, setLoadingBanner] = useState(true);


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
    const fetchData = async () => {
      try {
        const request = await movieApi.get(movieRequests.fetchAllMovies)
        setMovies(request.data.movies)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
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
