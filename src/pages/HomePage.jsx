import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import { movieApi } from '../constants/axios'
import { movieRequests } from '../constants/requests'
import Row from '../components/Row'

const HomePage = () => {
  const [movies, setMovies] = useState({})

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
    <div className='page' style={{backgroundColor: "#111", overflow: "hidden"}}>
      <Navbar />
      <Banner />

      {Object.keys(movies).map((category) => (
        <Row key={category} title={category} movies={movies[category]}/>
      ))}
    </div>
  )
}

export default HomePage
